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
          to="/pelotoes"
        >
          <v-icon left>mdi-arrow-left-bold-circle</v-icon>
          Voltar
        </v-btn>
        <material-card
          title="Atiradores do Pelotão"
        >
          <v-spacer/>
          <v-data-table
            :headers="headers"
            :items="atiradores"
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            style="font-weight: bold;"
            sort-by="ra"
            class="elevation-1"
          >
            <template v-slot:item.funcao="{ item }">
              <div v-if="item.funcao != ''">
                <v-icon
                  color="warning"
                >mdi-crown</v-icon>
              </div>
            </template>
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
      numeroPelotao: 0,
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'CR', align: 'left', value: 'cr' },
        { text: 'Nome', align: 'left', value: 'nomeAtirador' },
        { text: 'Nome de Guerra', align: 'left', value: 'nomeGuerra' },
        { text: 'Monitor', align: 'left', value: 'funcao' },
        { text: 'Pelotão', align: 'left', value: 'numeroPelotao' },
        { text: 'Número', align: 'left', value: 'numeroAtirador' }
      ]
    }
  },
  computed: {
    ...mapState({
      atiradores: state => state.atiradores.all.items
    })
  },
  created () {
    this.getNumeroPelotao()
    this.getAtiradoresPorPelotao(this.numeroPelotao)
  },
  methods: {
    ...mapActions('atiradores', {
      getAtiradoresPorPelotao: 'getPorPelotao'
    }),
    getNumeroPelotao () {
      let numero = localStorage.getItem('numeroPelotao')
      this.numeroPelotao = numero
      console.log('Numero aqui => ' + this.numeroPelotao)
    }
  }
}
</script>
