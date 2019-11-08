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
          title="Oficiais"
        >
          <v-spacer/>
          <v-btn
            color="grey darken-2"
            to="/cadastrarOficial"
          >
            <v-icon left>mdi-plus-circle</v-icon>
            Novo Oficial
          </v-btn>
          <v-spacer/>
          <v-data-table
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            :headers="headers"
            :items="oficiais"
            style="font-weight: bold;"
            sort-by="numeroPelotao"
            class="elevation-1"
          >
            <template v-slot:item.chefeInstrucao="{ item }">
              <div v-if="item.chefeInstrucao == true">
                Sim
              </div>
              <div v-else>
                Não
              </div>
            </template>

            <template v-slot:item.edit="{ item }">
              <v-btn
                color="indigo darken-4"
                @click="openModalEdit(item)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>

            <template v-slot:item.delete="{ item }">
              <v-btn
                color="red darken-4"
                @click="openModalDelete(item.nome, item.idOficial)"
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
        <!--Modal com mensagem de exclusão-->
        <v-dialog
          v-model="modalDelete"
          max-width="350"
        >
          <v-card>
            <v-card-title class="headline">Deseja realmente excluir o atirador?</v-card-title>

            <v-card-text style="font-weight: bold;">
              O Atirador <strong>{{ nome }}</strong> será excluido permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="indigo darken-4"
                text
                @click="deletarOficial(idOficial)"
              >
                Confirmar
              </v-btn>

              <v-btn
                color="red darken-4"
                text
                @click="modalDelete = false"
              >
                Cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--Modal com formulário de edição-->
        <v-dialog
          v-model="modalEdit"
          max-width="700"
        >
          <v-card>
            <v-card-title class="headline">Editar Oficial</v-card-title>

            <v-card-text>
              <v-form
                ref="formEdit"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="oficialEdit.nome"
                  :rules="[v => !!v || 'O campo Nome é obrigatório']"
                  label="Nome"
                  required
                />
                <v-text-field
                  v-model="oficialEdit.numeroPelotao"
                  label="Pelotão"
                />
                <v-select
                  v-model="oficialEdit.patente"
                  :items="patenteOptions"
                  :rules="[v => !!v || 'O campo Patente é obrigatório']"
                  label="Patente"
                />
                <v-select
                  v-model="oficialEdit.funcaoOficial"
                  :items="funcaoOptions"
                  label="Função"
                />
                <v-checkbox
                  v-model="oficialEdit.chefeInstrucao"
                  label="Chefe de Instrução"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                :disabled="!valid"
                color="indigo darken-4"
                @click="handleSubmit()"
              >
                <v-icon left>mdi-check-circle</v-icon>
                Editar
              </v-btn>

              <v-btn
                color="red darken-4"
                @click="modalEdit = false"
              >
                <v-icon left>mdi-close-circle</v-icon>
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
      valid: true,
      nome: '',
      idOficial: '',
      oficialEdit: {
        idOficial: '',
        nome: '',
        numeroPelotao: 0,
        patente: '',
        funcaoOficial: '',
        chefeInstrucao: false
      },
      modalEdit: false,
      modalDelete: false,
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Pelotão', align: 'left', value: 'numeroPelotao' },
        { text: 'Nome', align: 'left', value: 'nome' },
        { text: 'Patente', align: 'left', value: 'patente' },
        { text: 'Chefe Instrução', align: 'center', value: 'chefeInstrucao', sortable: false },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ],
      patenteOptions: [
        'Subtenente',
        'Primeiro-Sargento',
        'Segundo-Sargento',
        'Terceiro-Sargento'
      ],
      funcaoOptions: [
        'A',
        'B',
        'C',
        'D',
        'E'
      ]
    }
  },
  computed: {
    ...mapState({
      oficiais: state => state.oficiais.all.items
    })
  },
  created () {
    this.getAllOficiais()
  },
  methods: {
    ...mapActions('oficiais', {
      getAllOficiais: 'getAll',
      deleteOficial: 'delete',
      update: 'update'
    }),
    handleSubmit () {
      if (this.$refs.formEdit.validate()) {
        console.log('Oficial a ser editado: ' + JSON.stringify(this.oficialEdit))
        this.update(this.oficialEdit)
        this.modalEdit = false
        this.$refs.formEdit.reset()
      }
    },
    openModalEdit (oficial) {
      // eslint-disable-next-line no-sequences
      // eslint-disable-next-line no-unused-expressions
      this.modalEdit = true
      this.oficialEdit.idOficial = oficial.idOficial
      this.oficialEdit.nome = oficial.nome
      this.oficialEdit.numeroPelotao = oficial.numeroPelotao
      this.oficialEdit.patente = oficial.patente
      this.oficialEdit.funcaoOficial = oficial.funcaoOficial
      this.oficialEdit.chefeInstrucao = oficial.chefeInstrucao
    },
    openModalDelete (nome, id) {
      console.log('Oficial => ' + nome)
      this.nome = nome
      this.idOficial = id
      this.modalDelete = true
    },
    deletarOficial (id) {
      this.deleteOficial(id)
      this.modalDelete = false
    }
  }
}
</script>
