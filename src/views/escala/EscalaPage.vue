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
          title="Escalas Cadastradas"
        >
          <v-spacer/>
          <v-btn
            color="grey darken-2"
            to="/cadastrarEscala"
          >
            <v-icon left>mdi-plus-circle</v-icon>
            Nova Escala
          </v-btn>
          <v-spacer/>
          <v-data-table
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            :items="escalas"
            :headers="headers"
            style="font-weight: bold;"
            sort-by="nome"
            class="elevation-1"
          >
            <template v-slot:item.detail="{ item }">
              <v-btn
                color="success"
                @click="getEscalaInformacao(item)"
              >
                <v-icon>mdi-clipboard-text</v-icon>
              </v-btn>
            </template>

            <template v-slot:item.edit="{ item }">
              <v-btn
                color="indigo darken-4"
                @click="getEscalaEditar(item)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>

            <template v-slot:item.delete="{ item }">
              <v-btn
                color="red darken-4"
                @click="openModalDelete(item.idEscala)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
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
        <v-dialog
          v-model="modalDelete"
          max-width="350"
        >
          <v-card>
            <v-card-title class="headline">Deseja realmente excluir a escala?</v-card-title>

            <v-card-text>
              O Escala será excluida permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="red darken-1"
                text
                @click="modalDelete = false"
              >
                Cancelar
              </v-btn>

              <v-btn
                color="green darken-1"
                text
                @click="deletarEscala(idEscala)"
              >
                Confirmar
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
import moment from 'moment'

export default {
  data () {
    return {
      idEscala: '',
      modalDelete: false,
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Número Escala', align: 'left', value: 'numeroEscala' },
        { text: 'Instrutor', align: 'left', value: 'instrutorSemana' },
        { text: 'Detalhar', align: 'center', value: 'detail', sortable: false },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      escalas: state => state.escalas.all.items
    })
  },
  created () {
    this.getAllEscalas()
    moment.locale('pt')
  },
  methods: {
    moment,
    ...mapActions('escalas', {
      getAllEscalas: 'getAll',
      deleteEscala: 'delete'
    }),
    ...mapActions('editEscala', {
      getEscalaEditar: 'getEscalaEdit',
      getEscalaInformacao: 'getEscalaInfo'
    }),
    openModalDelete (id) {
      this.idEscala = id
      this.modalDelete = true
    },
    deletarEscala (id) {
      this.deleteEscala(id)
      this.modalDelete = false
    }
  }
}
</script>
