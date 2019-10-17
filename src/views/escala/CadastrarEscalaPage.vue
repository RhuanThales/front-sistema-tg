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
        {{ escala }}
        <material-card
          title="Cadastro de Escala"
        >
          <v-spacer/>
          <v-form
            ref="formCadastro"
            v-model="valid"
            lazy-validation
          >
            <!--Campos do Formulário-->
            <v-text-field
              v-model="escala.numeroEscala"
              :rules="[v => !!v || 'O campo Número é obrigatório']"
              label="Número da Escala"
              required
            />
            <v-text-field
              v-model="escala.instrutorDia"
              :rules="[v => !!v || 'O campo Instrutor é obrigatório']"
              label="Instrutor"
              required
            />
            <v-autocomplete
              v-model="escala.permanenciaManha"
              :items="atiradores"
              :no-data-text="'Atiradores não foram encontrados'"
              :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
              item-text="nomeGuerra"
              item-value="nomeAtirador"
              chips
              small-chips
              multiple
              label="Permanencia Manha"
              required
            />
            <v-autocomplete
              v-model="escala.permanenciaTarde"
              :items="atiradores"
              :no-data-text="'Atiradores não foram encontrados'"
              :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
              label="Permanencia Tarde"
              item-text="nomeGuerra"
              item-value="nomeAtirador"
              chips
              small-chips
              multiple
              required
            />
            <v-text-field
              v-model="escala.comandanteGuarda"
              :rules="[v => !!v || 'O campo Comandante é obrigatório']"
              label="Comandante"
              required
            />
            <v-autocomplete
              v-model="escala.guardas"
              :items="atiradores"
              :no-data-text="'Atiradores não foram encontrados'"
              :rules="[v => !!v || 'O campo Guardas é obrigatório']"
              item-text="nomeGuerra"
              item-value="nomeAtirador"
              chips
              small-chips
              multiple
              label="Guardas"
              required
            />
            <!--Botões-->
            <v-btn
              :disabled="!valid"
              color="indigo darken-4"
              class="mr-4"
              @click="handleSubmit"
            >
              Cadastrar
            </v-btn>

            <v-btn
              color="red darken-4"
              class="mr-4"
              to="/escalas"
            >
              Cancelar
            </v-btn>
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
      escala: {
        numeroEscala: 0,
        instrutorDia: '',
        permanenciaManha: [],
        permanenciaTarde: [],
        comandanteGuarda: '',
        guardas: [],
        dia: Date
      }
    }
  },
  computed: {
    ...mapState({
      atiradores: state => state.atiradores.all.items
    }),
    ...mapState({
      oficiais: state => state.oficiais.all.items
    })
  },
  created () {
    this.getAllAtiradores()
    this.getAllOficiais()
  },
  methods: {
    ...mapActions('escalas', {
      register: 'register'
    }),
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll'
    }),
    ...mapActions('oficiais', {
      getAllOficiais: 'getAll'
    }),
    handleSubmit () {
      if (this.$refs.formCadastro.validate()) {
        console.log('Escala a ser cadastrada: ' + JSON.stringify(this.escala))
        this.register(this.escala)
        this.$refs.formCadastro.reset()
      }
    }
  }
}
</script>
