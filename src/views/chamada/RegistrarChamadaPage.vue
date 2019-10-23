<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        xl12
        lg12
        md12
        sm12
        xs12
      >
        <material-card
          title="Lista de Chamada"
        >
          <v-spacer/>
          <v-form
            ref="formCadastro"
            v-model="valid"
            lazy-validation
          >
            <v-select
              v-model="chamada.dataChamada"
              :items="dataOptions"
              :rules="[v => !!v || 'O campo Data é obrigatório']"
              required
              label="Data"
            />
            <v-autocomplete
              v-model="chamada.numeroPelotao"
              :items="pelotoes"
              :no-data-text="'Pelotões não foram encontrados'"
              :rules="[v => !!v || 'O campo Pelotão é obrigatório']"
              item-text="numeroPelotao"
              item-value="numeroPelotao"
              clearable
              required
              label="Selecione o Pelotão"
              placeholder="Pelotão"
              @change="buscarAtiradores()"
            />

            <div
              v-show="showAtiradores"
            >
              <table style="border: 1px solid black; border-collapse: collapse; width: 100%;">
                <tr>
                  <th style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">Presença</th>
                  <th style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">Falta</th>
                  <th style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">Justificado</th>
                  <th style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">Atiradores</th>
                </tr>
                <tr
                  v-for="ati in atiradores"
                  :key="ati.id"
                >
                  <td style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">
                    <v-checkbox
                      v-model="chamada.atiradoresPresentes"
                      :value="ati.nomeGuerra"
                      style="margin-top: 0px;"
                    />
                  </td>
                  <td style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">
                    <v-checkbox
                      v-model="chamada.atiradoresFaltosos"
                      :value="ati.nomeGuerra"
                      style="margin-top: 0px;"
                    />
                  </td>
                  <td style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">
                    <v-checkbox
                      v-model="chamada.atiradoresJustificados"
                      :value="ati.nomeGuerra"
                      style="margin-top: 0px;"
                    />
                  </td>
                  <td style="border: 1px solid black; border-collapse: collapse; padding: 5px; text-align: left;">
                    {{ ati.numeroAtirador }} - {{ ati.nomeGuerra }}
                  </td>
                </tr>
              </table>
            </div>

            <v-btn
              :disabled="!valid"
              color="success"
              @click="handleSubmit()"
            >
              Concluir
            </v-btn>
            <!-- <v-btn
              color="error"
              to="/chamadas"
            >
              Cancelar
            </v-btn> -->
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      valid: true,
      showAtiradores: false,
      dataOptions: [],
      chamada: {
        numeroPelotao: 0,
        dataChamada: '',
        horarioChamada: '',
        usuario: '',
        atiradoresPresentes: [],
        atiradoresFaltosos: [],
        atiradoresJustificados: []
      }
    }
  },
  computed: {
    ...mapState({
      pelotoes: state => state.pelotoes.all.items
    }),
    ...mapState({
      atiradores: state => state.atiradores.all.items
    })
  },
  created () {
    this.pegarUsuario()
    this.getAllPelotoes()
    this.criarListaDatas()
  },
  methods: {
    ...mapState({
      account: state => state.account
    }),
    ...mapActions('pelotoes', {
      getAllPelotoes: 'getAll'
    }),
    ...mapActions('atiradores', {
      getAtiradoresPorPelotao: 'getPorPelotao'
    }),
    ...mapActions('chamadas', {
      register: 'register'
    }),
    pegarUsuario () {
      if (this.account !== null || this.account.user !== null || this.account !== '' || this.account.user !== '') {
        this.account.user = JSON.parse(localStorage.getItem('usuario'))
        this.userLoged = this.account.user.value.nome
        this.chamada.usuario = this.userLoged
      }
    },
    buscarAtiradores () {
      this.getAtiradoresPorPelotao(this.chamada.numeroPelotao)
      this.chamada.atiradoresPresentes = []
      this.chamada.atiradoresFaltosos = []
      this.chamada.atiradoresJustificados = []
      this.showAtiradores = true
    },
    selecionarTodos () {
      /* console.log('Atiradores => ' + JSON.stringify(this.atiradores))

      let newArray = []

      for (let i = 0; i < 99; i++) {
        newArray.push(this.atiradores[i].nomeGuerra)
      } */
    },
    criarListaDatas () {
      const options = {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric'
      }

      let hora = new Intl.DateTimeFormat([], options)
      this.chamada.horarioChamada = hora.format(new Date())

      let data = new Date()

      let mes = data.getMonth() + 1

      let qtd = 0

      if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        qtd = 32
      } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        qtd = 31
      } else {
        qtd = 30
      }

      let diaAtual = data.getDate()

      for (let i = diaAtual; i < qtd; i++) {
        if (i < 10) {
          this.dataOptions.push('0' + i + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())
        } else {
          this.dataOptions.push(i + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())
        }
      }
    },
    handleSubmit () {
      if (this.$refs.formCadastro.validate()) {
        console.log('Chamada => ' + JSON.stringify(this.chamada))
        this.register(this.chamada)
      }
    }
  }
}
</script>
