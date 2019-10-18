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
