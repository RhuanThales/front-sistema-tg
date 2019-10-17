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
          title="Edição de Escala"
        >
          <v-spacer/>
          <v-form
            ref="formEdit"
            v-model="valid"
            lazy-validation
          >
            <!--Campos do Formulário-->
            <v-text-field
              v-model="escala.numeroEscala"
              label="Número da Escala"
              disabled
            />
            <v-text-field
              v-model="escala.dia"
              label="Data"
              type="date"
              disabled
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
              Editar
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
        idEscala: this.$store.state.editEscala.escalaEdit.idEscala,
        numeroEscala: this.$store.state.editEscala.escalaEdit.numeroEscala,
        instrutorDia: this.$store.state.editEscala.escalaEdit.instrutorDia,
        permanenciaManha: this.$store.state.editEscala.escalaEdit.permanenciaManha,
        permanenciaTarde: this.$store.state.editEscala.escalaEdit.permanenciaTarde,
        comandanteGuarda: this.$store.state.editEscala.escalaEdit.comandanteGuarda,
        guardas: this.$store.state.editEscala.escalaEdit.guardas,
        dia: this.formatarData(this.$store.state.editEscala.escalaEdit.dia)
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
    ...mapActions('editEscala', {
      update: 'update'
    }),
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll'
    }),
    ...mapActions('oficiais', {
      getAllOficiais: 'getAll'
    }),
    handleSubmit () {
      if (this.$refs.formEdit.validate()) {
        console.log('Escala a ser editada: ' + JSON.stringify(this.escala))
        this.update(this.escala)
        this.$refs.formEdit.reset()
      }
    },
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
    }
  }
}
</script>
