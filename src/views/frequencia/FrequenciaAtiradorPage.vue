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
        <v-btn
          color="error"
          @click="voltar"
        >
          <v-icon left>mdi-arrow-left-bold-circle</v-icon>
          Voltar
        </v-btn>
        <material-card
          title="Histórico de Frequências"
        >
          <v-data-table
            :headers="headers"
            :items="frequencias"
            :search="search"
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            style="font-weight: bold;"
            sort-by="numeroAtirador"
            class="elevation-1"
          >
            <template v-slot:no-data>
              <v-alert
                :value="true"
                color="error"
                icon="mdi-alert"
              >TEXTO!</v-alert>
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
      crAtirador: '545454',
      search: '',
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Data', align: 'left', value: 'data' },
        { text: 'Tipo', align: 'left', value: 'tipo' },
        { text: 'Horas', align: 'left', value: 'pesoHoras' },
        { text: 'Pontos', align: 'left', value: 'pesoPontos' },
        { text: 'Presenca', align: 'center', value: 'presenca', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      frequencias: state => state.frequencias.all.items
    })
  },
  created () {
    this.pegarAtirador()
    this.getFrequenciasPorAtirador(this.crAtirador)
  },
  methods: {
    ...mapActions('frequencias', {
      getFrequenciasPorAtirador: 'getFrequenciasPorAtirador'
    }),
    ...mapActions('editAtirador', {
      getAtiradorInfo: 'getAtiradorInfo'
    }),
    pegarAtirador () {
      let crTemp = localStorage.getItem('crAtirador')
      this.crAtirador = crTemp
    },
    voltar () {
      this.$router.push('/atiradores')
    }
  }
}
</script>
