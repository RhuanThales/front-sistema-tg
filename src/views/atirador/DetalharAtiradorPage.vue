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
          title="Informações do Atirador"
        >
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Nome:
                    </strong>
                    {{ atiradorInfo.nomeAtirador }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Nome de Guerra:
                    </strong>
                    {{ atiradorInfo.nomeGuerra }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Número:
                    </strong>
                    {{ atiradorInfo.numeroAtirador }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Pelotão:
                    </strong>
                    {{ atiradorInfo.numeroPelotao }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Função:
                    </strong>
                    {{ atiradorInfo.funcao }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-btn
                      color="indigo darken-4"
                      @click="getAtiradorEditar(atiradorInfo)"
                    >
                      Editar
                    </v-btn>

                    <v-btn
                      color="red darken-4"
                      @click="openModalDelete(atiradorInfo.nomeGuerra, atiradorInfo.idAtirador)"
                    >
                      Excluir
                    </v-btn>

                    <v-btn
                      color="green darken-4"
                      @click="gerarDeclaracao(atiradorInfo)"
                    >
                      Declarações
                    </v-btn>

                    <v-btn
                      color="warning"
                      to="/atiradores"
                    >
                      Voltar
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </material-card>
        <v-dialog
          v-model="modalDelete"
          max-width="350"
        >
          <v-card>
            <v-card-title class="headline">Deseja realmente excluir o atirador?</v-card-title>

            <v-card-text style="font-weight: bold;">
              O Atirador {{ nomeAtirador }} será excluido permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="indigo darken-4"
                text
                @click="deletarAtirador(idAtirador)"
              >
                Confirmar
              </v-btn>

              <v-btn
                color="red darken-4"
                text
                @click="modalDelete = false"
              >
                Cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      modalDelete: false,
      idAtirador: '',
      nomeAtirador: '',
      atiradorInfo: {
        idAtirador: this.$store.state.editAtirador.atiradorEdit.idAtirador,
        cr: this.$store.state.editAtirador.atiradorEdit.cr,
        nomeAtirador: this.$store.state.editAtirador.atiradorEdit.nomeAtirador,
        numeroPelotao: this.$store.state.editAtirador.atiradorEdit.numeroPelotao,
        nomeGuerra: this.$store.state.editAtirador.atiradorEdit.nomeGuerra,
        numeroAtirador: this.$store.state.editAtirador.atiradorEdit.numeroAtirador,
        religiao: this.$store.state.editAtirador.atiradorEdit.religiao,
        escolaridade: this.$store.state.editAtirador.atiradorEdit.escolaridade,
        volutario: this.$store.state.editAtirador.atiradorEdit.volutario,
        dataNascimento: this.formatarData(this.$store.state.editAtirador.atiradorEdit.dataNascimento),
        naturalidade: this.$store.state.editAtirador.atiradorEdit.naturalidade,
        naturalidadeCR: this.$store.state.editAtirador.atiradorEdit.naturalidadeCR,
        nomePai: this.$store.state.editAtirador.atiradorEdit.nomePai,
        nomeMae: this.$store.state.editAtirador.atiradorEdit.nomeMae,
        endereco: {
          logradouro: this.$store.state.editAtirador.atiradorEdit.endereco.logradouro,
          bairro: this.$store.state.editAtirador.atiradorEdit.endereco.bairro,
          numeroEndereco: this.$store.state.editAtirador.atiradorEdit.endereco.numeroEndereco,
          cep: this.$store.state.editAtirador.atiradorEdit.endereco.cep,
          cidade: this.$store.state.editAtirador.atiradorEdit.endereco.cidade,
          estado: this.$store.state.editAtirador.atiradorEdit.endereco.estado
        },
        telefone: this.$store.state.editAtirador.atiradorEdit.telefone,
        telefonePai: this.$store.state.editAtirador.atiradorEdit.telefonePai,
        telefoneMae: this.$store.state.editAtirador.atiradorEdit.telefoneMae,
        registroGeral: {
          orgaoEmissor: this.$store.state.editAtirador.atiradorEdit.registroGeral.orgaoEmissor,
          numeroRg: this.$store.state.editAtirador.atiradorEdit.registroGeral.numeroRg
        },
        cpf: this.$store.state.editAtirador.atiradorEdit.cpf,
        tituloEleitor: {
          zonaTitulo: this.$store.state.editAtirador.atiradorEdit.tituloEleitor.zonaTitulo,
          numeroTitulo: this.$store.state.editAtirador.atiradorEdit.tituloEleitor.numeroTitulo
        },
        funcao: this.$store.state.editAtirador.atiradorEdit.funcao,
        statusAtirador: this.$store.state.editAtirador.atiradorEdit.statusAtirador,
        pontosJustificados: this.$store.state.editAtirador.atiradorEdit.pontosJustificados,
        pontosNaoJustificados: this.$store.state.editAtirador.atiradorEdit.pontosNaoJustificados,
        totalPontos: this.$store.state.editAtirador.atiradorEdit.totalPontos,
        horasCfc: this.$store.state.editAtirador.atiradorEdit.horasCfc,
        horasInstrucao: this.$store.state.editAtirador.atiradorEdit.horasInstrucao,
        horasExtras: this.$store.state.editAtirador.atiradorEdit.horasExtras,
        horasServico: this.$store.state.editAtirador.atiradorEdit.horasServico,
        totalHoras: this.$store.state.editAtirador.atiradorEdit.totalHoras,
        totalDias: this.$store.state.editAtirador.atiradorEdit.totalDias
      }
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    ...mapActions('atiradores', {
      deleteAtirador: 'delete'
    }),
    ...mapActions('editAtirador', {
      getAtiradorEditar: 'getAtiradorEdit'
    }),
    formatarData (date) {
      if (date === '0001-01-01T00:00:00Z') {
        return date
      }
      // eslint-disable-next-line one-var
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear()
      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day
      return [year, month, day].join('-')
    },
    openModalDelete (nome, id) {
      console.log('Atirador => ' + nome)
      this.nomeAtirador = nome
      this.idAtirador = id
      this.modalDelete = true
    },
    deletarAtirador (id) {
      this.deleteAtirador(id)
      this.modalDelete = false
      this.$router.push('/atiradores')
    },
    gerarDeclaracao () {
      console.log('Teste gerar declaração!')
    }
  }
}
</script>
