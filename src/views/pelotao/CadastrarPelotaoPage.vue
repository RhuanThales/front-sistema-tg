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
          title="Cadastro de Pelotão"
        >
          <v-spacer/>
          <v-form
            ref="formCadastro"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="pelotao.nomePelotao"
              :rules="[v => !!v || 'O campo Nome é obrigatório']"
              label="Nome do Pelotão"
              required
            />
            <v-text-field
              v-model="pelotao.numeroPelotao"
              :rules="[v => !!v || 'O campo Número é obrigatório']"
              label="Número do Pelotão"
              required
            />
            <v-autocomplete
              v-model="pelotao.comandante"
              :items="oficiais"
              :no-data-text="'Oficiais não foram encontrados'"
              :rules="[v => !!v || 'O campo Comandante é obrigatório']"
              item-text="nome"
              item-value="nome"
              label="Comandante"
              placeholder="Comandante"
              required
            />
            <v-autocomplete
              v-model="pelotao.monitor"
              :items="atiradores"
              :no-data-text="'Atiradores não foram encontrados'"
              :rules="[v => !!v || 'O campo Monitor é obrigatório']"
              item-text="nomeAtirador"
              item-value="nomeAtirador"
              label="Monitor"
              placeholder="Monitor"
              required
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
            to="/pelotoes"
          >
            Cancelar
          </v-btn>
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
      show4: false,
      valid: true,
      pelotao: {
        nomePelotao: '',
        numeroPelotao: 0,
        comandante: '',
        monitor: ''
      },
      checkbox: false
    }
  },
  computed: {
    ...mapState({
      oficiais: state => state.oficiais.all.items
    }),
    ...mapState({
      atiradores: state => state.atiradores.all.items
    })
  },
  created () {
    this.getAllOficiais()
    this.getAllAtiradores()
  },
  methods: {
    ...mapActions('pelotoes', {
      register: 'register'
    }),
    ...mapActions('oficiais', {
      getAllOficiais: 'getAll'
    }),
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll'
    }),
    handleSubmit () {
      if (this.$refs.formCadastro.validate()) {
        console.log('Pelotão a ser cadastrado: ' + JSON.stringify(this.pelotao))
        this.register(this.pelotao)
        this.modalEdit = false
        this.$refs.formCadastro.reset()
      }
    }
  }
}
</script>
