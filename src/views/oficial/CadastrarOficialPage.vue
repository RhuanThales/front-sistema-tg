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
          color="primary"
          title="Cadastro de Oficial"
        >
          <v-spacer/>
          <v-form
            ref="formCadastro"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="oficial.nome"
              :rules="[v => !!v || 'O campo Nome é obrigatório']"
              label="Nome"
              required
            />
            <v-text-field
              v-model="oficial.numeroPelotao"
              :rules="[v => !!v || 'O campo Pelotão é obrigatório']"
              label="Pelotão"
              required
            />
            <v-select
              v-model="oficial.patente"
              :items="patenteOptions"
              :rules="[v => !!v || 'O campo Patente é obrigatório']"
              label="Patente"
            />
            <v-select
              v-model="oficial.funcaoOficial"
              :items="funcaoOptions"
              label="Função"
            />
            <v-checkbox
              v-model="oficial.chefeInstrucao"
              label="Chefe de Instrução"
            />
          </v-form>
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="handleSubmit()"
          >
            Cadastrar
          </v-btn>

          <v-btn
            color="error"
            to="/oficiais"
          >
            Cancelar
          </v-btn>
        </material-card>
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
      show4: false,
      valid: true,
      oficial: {
        nome: '',
        numeroPelotao: 0,
        patente: '',
        funcaoOficial: '',
        chefeInstrucao: false
      },
      checkbox: false,
      patenteOptions: [
        'A',
        'B',
        'C',
        'D',
        'E'
      ],
      funcaoOptions: [
        'A',
        'B',
        'C',
        'D',
        'E'
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    ...mapActions('oficiais', {
      register: 'register'
    }),
    handleSubmit () {
      if (this.$refs.formCadastro.validate()) {
        console.log('Oficial a ser cadastrado: ' + JSON.stringify(this.oficial))
        this.register(this.oficial)
        this.$refs.formCadastro.reset()
      }
    }
  }
}
</script>
