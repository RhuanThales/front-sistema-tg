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
          title="Atiradores"
        >
          <v-spacer/>
          <v-btn
            color="grey darken-2"
            to="/cadastrarAtirador"
          >
            Novo Atirador
          </v-btn>
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
            :items="atiradores"
            :search="search"
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            style="font-weight: bold;"
            sort-by="ra"
            class="elevation-1"
          >
            <template v-slot:item.edit="{ item }">
              <v-btn
                color="indigo darken-4"
                @click="getAtiradorEditar(item)"
              >
                Editar
              </v-btn>
            </template>

            <template v-slot:item.delete="{ item }">
              <v-btn
                color="red darken-4"
                @click="openModalDelete(item.nomeAtirador, item.idAtirador)"
              >
                Excluir
              </v-btn>
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
              >Não foram encontradros nunhum resultado para a pesquisa</v-alert>
            </template>
          </v-data-table>
        </material-card>

        <v-dialog
          v-model="modalDelete"
          max-width="350"
        >
          <v-card>
            <v-card-title class="headline">Deseja realmente excluir o atirador?</v-card-title>

            <v-card-text>
              O Atirador {{ nomeAtirador }} será excluido permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="green darken-1"
                text
                @click="deletarAtirador(idAtirador)"
              >
                Confirmar
              </v-btn>

              <v-btn
                color="red darken-1"
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
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      nomeAtirador: '',
      idAtirador: '',
      search: '',
      modalDelete: false,
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'CR', align: 'left', value: 'cr' },
        { text: 'Nome', align: 'left', value: 'nomeAtirador' },
        { text: 'Nome de Guerra', align: 'left', value: 'nomeGuerra' },
        { text: 'Pelotão', align: 'left', value: 'numeroPelotao' },
        { text: 'Número', align: 'left', value: 'numeroAtirador' },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      atiradores: state => state.atiradores.all.items
    })
  },
  created () {
    this.getAllAtiradores()
  },
  methods: {
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll',
      deleteAtirador: 'delete'
    }),
    ...mapActions('editAtirador', {
      getAtiradorEditar: 'getAtiradorEdit'
    }),
    openModalDelete (nome, id) {
      console.log('Atirador => ' + nome)
      this.nomeAtirador = nome
      this.idAtirador = id
      this.modalDelete = true
    },
    deletarAtirador (id) {
      this.deleteAtirador(id)
      this.modalDelete = false
    }
  }
}
</script>
