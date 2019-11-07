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
          title="Chamadas Realizadas"
        >
          <!-- <v-btn
            color="grey darken-2"
            to="/registrarChamada"
          >
            Registrar Chamada
          </v-btn> -->
          <v-spacer/>
          <v-data-table
            :headers="headers"
            :items="chamadas"
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            style="font-weight: bold;"
            sort-by="ra"
            class="elevation-1"
          >

            <template v-slot:item.confirm="{ item }">
              <div v-if="item.statusChamada !== true">
                <v-btn
                  color="green darken-4"
                  @click="openModalConfirmar(item.idChamada)"
                >
                  Confirmar
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                  color="indigo darken-4"
                  disabled
                >
                  Confirmar
                </v-btn>
              </div>
            </template>

            <template v-slot:item.edit="{ item }">
              <div v-if="item.statusChamada !== true">
                <v-btn
                  color="indigo darken-4"
                  @click="getChamadaEditar(item)"
                >
                  Editar
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                  color="indigo darken-4"
                  disabled
                >
                  Editar
                </v-btn>
              </div>
            </template>

            <template v-slot:item.delete="{ item }">
              <div v-if="item.statusChamada !== true">
                <v-btn
                  color="red darken-4"
                  @click="openModalDelete(item.idChamada)"
                >
                  Excluir
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                  color="red darken-4"
                  disabled
                >
                  Excluir
                </v-btn>
              </div>
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
            <v-card-title class="headline">Deseja realmente excluir a chamada?</v-card-title>

            <v-card-text>
              A chamada será excluida permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="green darken-1"
                text
                @click="deletarChamada(idChamada)"
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
        <v-dialog
          v-model="modalConfirmar"
          max-width="400"
        >
          <v-card>
            <v-card-title class="headline">Deseja realmente Confimar?</v-card-title>

            <v-card-text>
              A chamada não poderá mais ser editada nem excluida e os pontos e horas serão aplicados aos respectivos atiradores.
              Tem certeza que deseja continuar!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="green darken-1"
                text
                @click="confirmar(idChamada)"
              >
                Confirmar
              </v-btn>

              <v-btn
                color="red darken-1"
                text
                @click="modalConfirmar = false"
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
      modalDelete: false,
      modalConfirmar: false,
      idChamada: '',
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Data', align: 'left', value: 'dataChamada' },
        { text: 'Hora', align: 'left', value: 'horarioChamada' },
        { text: 'Responsável', align: 'left', value: 'usuario' },
        { text: 'Pelotão', align: 'left', value: 'numeroPelotao' },
        { text: 'Confimar', align: 'center', value: 'confirm', sortable: false },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      chamadas: state => state.chamadas.all.items
    })
  },
  created () {
    this.getAllChamadas()
  },
  methods: {
    ...mapActions('chamadas', {
      getAllChamadas: 'getAll',
      confirmarChamada: 'confirmarChamada',
      deleteChamada: 'delete'
    }),
    ...mapActions('editChamada', {
      getChamadaEditar: 'getChamadaEdit'
    }),
    openModalDelete (id) {
      console.log('Id Chamada => ' + id)
      this.idChamada = id
      this.modalDelete = true
    },
    deletarChamada (id) {
      this.deleteChamada(id)
      this.modalDelete = false
    },
    openModalConfirmar (idChamada) {
      console.log('Id Chamada => ' + idChamada)
      this.idChamada = idChamada
      this.modalConfirmar = true
    },
    confirmar (idChamada) {
      // this.confirmarChamada(idChamada)
      this.modalConfirmar = false
    }
  }
}
</script>
