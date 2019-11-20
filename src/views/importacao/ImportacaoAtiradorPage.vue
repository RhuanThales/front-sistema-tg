<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg12
      >
        <material-card
          title="Importar Atiradores"
        >
          <div class="instrucao">
            <span>
              <v-icon
                left
                color="warning"
              >
                mdi-alert
              </v-icon>
            </span> Selecione um arquivo com extensão CSV e delimitador ";".
          </div>
          <div>
            <label
              for="selecao-arquivo-atirador"
              class="btnFile"
            >Selecione um Arquivo &#187; </label>
            <input
              id="selecao-arquivo-atirador"
              ref="fileAtirador"
              type="file"
              @change="handleFileUploadAtirador()"
            >
            <div class="erroImportacao">
              <span class="text-danger">{{ mensagem }}</span>
            </div><br>
            <v-btn
              :disabled="validaEnvioAtirador"
              color="blue-grey"
              class="white--text"
              @click="enviarArquivoAtirador"
            >
              Enviar
              <v-icon
                right
                dark
              >
                mdi-upload
              </v-icon>
            </v-btn>
          </div>
        </material-card>
      </v-flex>
      <v-dialog
        v-model="modalAtirador"
        max-width="600"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Importação de Atiradores</span>
          </v-card-title>
          <v-container grid-list-md>
            <v-progress-linear :indeterminate="true"/>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      modulo: 'Importações',
      modalAtirador: false,
      validaEnvioAtirador: true,
      arquivo: '',
      arquivoFinal: '',
      mensagem: ''
    }
  },
  computed: {
    ...mapState({
      atiradores: state => state.atiradores.all
    })
  },
  created () {
  },
  methods: {
    ...mapActions('atiradores', {
      uploadArquivoAtirador: 'uploadArquivo'
    }),
    verificaExtensao (nomeArquivo) {
      this.mensagem = ''
      let extPermitidas = ['csv']
      let extArquivo = nomeArquivo.split('.').pop()
      if (typeof extPermitidas.find(function (ext) { return extArquivo === ext }) === 'undefined') {
        this.mensagem = 'Extensão "' + extArquivo + '" não permitida!'
        return false
      } else {
        return true
      }
    },
    handleFileUploadAtirador () {
      this.arquivo = this.$refs.fileAtirador.files[0]
      if (this.arquivo !== '' && this.arquivo !== undefined && this.arquivo !== null) {
        if (this.verificaExtensao(this.arquivo.name)) {
          this.validaEnvioAtirador = false
        } else {
          this.validaEnvioAtirador = true
        }
      } else {
        this.validaEnvioAtirador = true
      }
    },
    enviarArquivoAtirador () {
      let arquivo = this.arquivo
      let reader = new FileReader()
      reader.readAsDataURL(arquivo)
      reader.onload = () => {
        let informacoes = {
          arquivo: reader.result.slice(37, reader.result.length)
        }
        this.arquivoFinal = {
          arquivo: informacoes.arquivo
        }
        this.uploadArquivoAtirador(this.arquivoFinal)
        this.modalAtirador = true
      }
    }
  }
}
</script>

<style scoped>
input[type='file'] {
  display: none
}
.btnFile {
  background-color: #3498db;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 15px
}
.instrucao {
  margin-bottom: 15px;
}
</style>
