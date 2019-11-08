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
          title="Pelotões"
        >
          <v-spacer/>
          <v-btn
            color="grey darken-2"
            to="/cadastrarPelotao"
          >
            <v-icon left>mdi-plus-circle</v-icon>
            Novo Pelotão
          </v-btn>
          <v-spacer/>
          <v-data-table
            :headers="headers"
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            :items="pelotoes"
            style="font-weight: bold;"
            sort-by="numeroPelotao"
            class="elevation-1"
          >
            <template v-slot:item.detail="{ item }">
              <v-btn
                color="success"
                @click="openPageDetail(item.numeroPelotao)"
              >
                <v-icon>mdi-clipboard-text</v-icon>
              </v-btn>
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
                @click="openModalDelete(item.nomePelotao, item.idPelotao)"
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
            <v-card-title class="headline">Deseja realmente excluir o Pelotão?</v-card-title>

            <v-card-text style="font-weight: bold;">
              O Pelotão <strong>{{ nomePelotao }}</strong> será excluido permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="indigo darken-4"
                text
                @click="deletarPelotao(idPelotao)"
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
                  v-model="pelotaoEdit.nomePelotao"
                  :rules="[v => !!v || 'O campo Nome é obrigatório']"
                  label="Nome do Pelotão"
                  required
                />
                <v-text-field
                  v-model="pelotaoEdit.numeroPelotao"
                  :rules="[v => !!v || 'O campo Pelotão é obrigatório']"
                  label="Número do Pelotão"
                  required
                />
                <v-autocomplete
                  v-model="pelotaoEdit.comandante"
                  :items="oficiais"
                  :no-data-text="'Oficiais não foram encontrados'"
                  :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                  item-text="nome"
                  item-value="nome"
                  label="Comandante"
                  placeholder="Comandante"
                  required
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
      nomePelotao: '',
      idPelotao: '',
      pelotaoEdit: {
        idPelotao: '',
        nomePelotao: '',
        numeroPelotao: 0,
        comandante: ''
      },
      modalEdit: false,
      modalDelete: false,
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Pelotão', align: 'left', value: 'numeroPelotao' },
        { text: 'Nome', align: 'left', value: 'nomePelotao' },
        { text: 'Comandante', align: 'left', value: 'comandante' },
        { text: 'Detalhar', align: 'center', value: 'detail', sortable: false },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      pelotoes: state => state.pelotoes.all.items
    }),
    ...mapState({
      oficiais: state => state.oficiais.all.items
    }),
    ...mapState({
      atiradores: state => state.atiradores.all.items
    })
  },
  created () {
    this.getAllPelotoes()
    this.getAllOficiais()
    this.getAllAtiradores()
  },
  methods: {
    ...mapActions('pelotoes', {
      getAllPelotoes: 'getAll',
      deletePelotao: 'delete',
      update: 'update'
    }),
    ...mapActions('oficiais', {
      getAllOficiais: 'getAll'
    }),
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll'
    }),
    handleSubmit () {
      if (this.$refs.formEdit.validate()) {
        console.log('Pelotão a ser editado: ' + JSON.stringify(this.pelotaoEdit))
        this.update(this.pelotaoEdit)
        this.modalEdit = false
        this.$refs.formEdit.reset()
      }
    },
    openPageDetail (numero) {
      console.log('Número do Pelotão => ' + numero)
      localStorage.setItem('numeroPelotao', numero)
      this.$router.push('/informacaoPelotao')
    },
    openModalEdit (pelotao) {
      // eslint-disable-next-line no-sequences
      // eslint-disable-next-line no-unused-expressions
      this.modalEdit = true
      this.pelotaoEdit.idPelotao = pelotao.idPelotao
      this.pelotaoEdit.nomePelotao = pelotao.nomePelotao
      this.pelotaoEdit.numeroPelotao = pelotao.numeroPelotao
      this.pelotaoEdit.numeroPelotao = pelotao.numeroPelotao
      this.pelotaoEdit.comandante = pelotao.comandante
      this.pelotaoEdit.monitor = pelotao.monitor
    },
    openModalDelete (nome, id) {
      console.log('Pelotão => ' + nome)
      this.nomePelotao = nome
      this.idPelotao = id
      this.modalDelete = true
    },
    deletarPelotao (id) {
      this.deletePelotao(id)
      this.modalDelete = false
    }
  }
}
</script>
