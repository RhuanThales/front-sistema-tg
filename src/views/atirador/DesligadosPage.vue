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
          title="Desligados"
        >
          <v-spacer/>
          <v-spacer/>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquisar"
            single-line
            hide-details
          />
          <v-spacer/>
          <v-data-table
            :headers="headers"
            :items="desligados"
            :search="search"
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            style="font-weight: bold;"
            sort-by="numeroAtirador"
            class="elevation-1"
          >
            <template v-slot:item.details="{ item }">
            </template>
            <template v-slot:no-data>
              <v-alert
                :value="true"
                color="error"
                icon="mdi-alert"
              >TEXTO!</v-alert>
            </template>
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="mdi-alert"
              >Este atirador nao esta desligado!</v-alert>
            </template>
          </v-data-table>
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
      nomeAtirador: '',
      idAtirador: '',
      search: '',
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Número', align: 'left', value: 'numeroAtirador' },
        { text: 'Nome de Guerra', align: 'left', value: 'nomeGuerra' },
        { text: 'Pelotão', align: 'left', value: 'numeroPelotao' },
        { text: 'Horas', align: 'left', value: 'totalHoras' },
        { text: 'Faltas', align: 'left', value: 'totalPontos' }
      ]
    }
  },
  computed: {
    ...mapState({
      desligados: state => state.atiradores.all.items
    })
  },
  created () {
    this.getDesligados()
    localStorage.removeItem('nomeAtirador')
    //this.$vuetify.theme.dark = true
  },
  methods: {
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll',
      getDesligados: 'getDesligados',
      deleteAtirador: 'delete'
    }),
    ...mapActions('editAtirador', {
      getAtiradorInfo: 'getAtiradorInfo'
    })
  }
}
</script>
