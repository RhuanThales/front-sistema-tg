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
        <!-- <material-card
          color="primary"
          title="Titulo Pagina"
        >
          <v-spacer/>
        </material-card> -->
        {{ escala }}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
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
  },
  created () {
  },
  methods: {
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
