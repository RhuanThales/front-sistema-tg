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
          color="primary"
          title="Titulo Pagina"
        >
          <v-spacer/>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step :complete="step > 1" step="1">Dados Pessoais</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="step > 2" step="2">Endereco / Telefones </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Dados do Atirador</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastroStep1"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="atirador.nomeAtirador"
                      label="Nome"
                      required
                    />
                    <v-text-field
                      v-model="atirador.rg.orgaoEmissor"
                      label="Orgao Emissor"
                      required
                    />
                    <v-text-field
                      v-model="atirador.rg.numero"
                      label="RG"
                      required
                    />
                    <v-text-field
                      v-model="atirador.cpf"
                      label="CPF"
                      required
                    />
                    <v-text-field
                      v-model="atirador.tituloEleitor.zona"
                      label="Zona"
                      required
                    />
                    <v-text-field
                      v-model="atirador.tituloEleitor.numero"
                      label="Titulo Eleitor"
                      required
                    />
                    <v-text-field
                      v-model="atirador.nomePai"
                      label="Nome do Pai"
                      required
                    />
                    <v-text-field
                      v-model="atirador.nomeMae"
                      label="Nome da Mae"
                      required
                    />
                    <v-text-field
                      v-model="atirador.dataNascimento"
                      label="Data de Nascimento"
                      type="date"
                      required
                    />
                    <v-text-field
                      v-model="atirador.naturalidade"
                      label="Naturalidade"
                      required
                    />
                    <v-text-field
                      v-model="atirador.religiao"
                      label="Religiao"
                    />
                    <v-text-field
                      v-model="atirador.escolaridade"
                      label="Escolaridade"
                    />
                  </v-form>
                
                </v-card>

                <v-btn
                  color="primary"
                  @click="step = 2"
                >
                  Continue
                </v-btn>

                <v-btn
                  color="error"
                  to="/atiradores"
                >
                  Cancelar
                </v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastroStep2"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="atirador.endereco.cep"
                      label="CEP"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.logradouro"
                      label="Rua"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.bairro"
                      label="Bairro"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.numero"
                      label="Numero"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.cidade"
                      label="Cidade"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.estado"
                      label="Estado"
                      required
                    />
                    <v-text-field
                      v-model="atirador.telefones"
                      label="Telefone"
                      required
                    />
                    <v-text-field
                      v-model="atirador.telefonePai"
                      label="Telefone do Pai"
                    />
                    <v-text-field
                      v-model="atirador.telefoneMae"
                      label="Telefone da Mae"
                    />
                  </v-form>
                </v-card>

                <v-btn
                  color="primary"
                  @click="step = 3"
                >
                  Continue
                </v-btn>

                <v-btn
                  color="warning"
                  @click="step = 1"
                >
                  Voltar
                </v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastroStep3"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="atirador.cr"
                      label="CR"
                      required
                    />
                    <v-text-field
                      v-model="atirador.numeroPelotao"
                      label="Numero do Pelotao"
                      required
                    />
                    <v-text-field
                      v-model="atirador.nomeGuerra"
                      label="Nome de Guerra"
                      required
                    />
                    <v-text-field
                      v-model="atirador.numeroAtirador"
                      label="Numero do Atirador"
                      required
                    />
                    <v-text-field
                      v-model="atirador.naturalidadeCR"
                      label="Naturalidade CR"
                      required
                    />
                    <v-text-field
                      v-model="atirador.funcao"
                      label="Funcao"
                    />
                    <v-checkbox
                      v-model="atirador.voluntario"
                      label="Voluntario"
                    />
                  </v-form>
                </v-card>

                <v-btn
                  color="primary"
                  @click="handleSubmit()"
                >
                  Continue
                </v-btn>

                <v-btn
                  color="warning"
                  @click="step = 2"
                >
                  Voltar
                </v-btn>

                <v-btn
                  color="error"
                  to="/atiradores"
                >
                  Cancelar
                </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
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
      step: 0,
      show4: false,
      valid: true,
      atirador: {
        cr: '',
        nomeAtirador: '',
        numeroPelotao: 0,
        nomeGuerra: '',
        numeroAtirador: 0,
        religiao: '',
        escolaridade: '',
        voluntario: false,
        dataNascimento: ``,
        naturalidade: '',
        naturalidadeCR: '',
        nomePai: '',
        nomeMae: '',
        endereco : {
          logradouro: '',
          bairro: '',
          numero: 0,
          cep: '',
          cidade: '',
          estado: ''
        },
        telefones: [],
        telefonePai: '',
        telefoneMae: '',
        rg: {
          orgaoEmissor: '',
          numero: ''
        },
        cpf: '',
        tituloEleitor: {
          zona: '',
          numero: ''
        },
        funcao: '',
        totalPontos: 0
      },
      checkbox: false
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    ...mapActions('atiradores', {
      register: 'register'
    }),
    handleSubmit () {
      if (this.$refs.formCadastroStep1.validate()) {
        console.log('Atirador a ser cadastrado: ' + JSON.stringify(this.atirador))
        this.register(this.atirador)
        this.$refs.formCadastroStep1.reset()
        this.$refs.formCadastroStep2.reset()
        this.$refs.formCadastroStep3.reset()
      }
    }
  }
}
</script>
