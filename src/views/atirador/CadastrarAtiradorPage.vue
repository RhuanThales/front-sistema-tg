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
              <v-stepper-step
                :complete="step > 1"
                step="1">
                Dados Pessoais
              </v-stepper-step>

              <v-divider/>

              <v-stepper-step
                :complete="step > 2"
                step="2">Endereco / Telefones
              </v-stepper-step>

              <v-divider/>

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
                      :rules="[v => !!v || 'O campo nome é obrigatório']"
                      label="Nome"
                      required
                    />
                    <v-text-field
                      v-model="atirador.rg.numero"
                      :rules="[v => !!v || 'O campo RG é obrigatório']"
                      label="RG"
                      required
                    />
                    <v-text-field
                      v-model="atirador.rg.orgaoEmissor"
                      :rules="[v => !!v || 'O campo é obrigatório']"
                      label="Orgao Emissor"
                      required
                    />
                    <v-text-field
                      v-mask="cpfMask"
                      v-model="atirador.cpf"
                      :rules="[v => !!v || 'O campo CPF é obrigatório']"
                      label="CPF"
                      required
                    >
                      <template v-slot:append-outer>
                        <v-btn
                          color="primary"
                          small
                          dark
                          @click="validaCpf()"
                        >
                          Verificar CPF
                          <v-icon
                            dark
                            right>mdi-check</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="atirador.tituloEleitor.zona"
                      :rules="[v => !!v || 'O campo é obrigatório']"
                      label="Zona"
                      required
                    />
                    <v-text-field
                      v-model="atirador.tituloEleitor.numero"
                      :rules="[v => !!v || 'O campo Titulo de Eleitor é obrigatório']"
                      label="Titulo Eleitor"
                      required
                    />
                    <v-text-field
                      v-model="atirador.nomePai"
                      :rules="[v => !!v || 'O campo Nome do Pai é obrigatório']"
                      label="Nome do Pai"
                      required
                    />
                    <v-text-field
                      v-model="atirador.nomeMae"
                      :rules="[v => !!v || 'O campo Nome da Mãe é obrigatório']"
                      label="Nome da Mãe"
                      required
                    />
                    <v-text-field
                      v-model="atirador.dataNascimento"
                      :rules="[v => !!v || 'O campo Data Nascimento é obrigatório']"
                      label="Data de Nascimento"
                      type="date"
                      required
                    />
                    <v-text-field
                      v-model="atirador.naturalidade"
                      :rules="[v => !!v || 'O campo Naturalidade é obrigatório']"
                      label="Naturalidade"
                      required
                    />
                    <v-select
                      v-model="atirador.religiao"
                      :items="religioesOptions"
                      label="Religiao"
                    />
                    <v-select
                      v-model="atirador.escolaridade"
                      :items="escolaridadeOptions"
                      label="Escolaridade"
                    />
                  </v-form>
                </v-card>

                <v-btn
                  :disabled="!valid"
                  color="primary"
                  @click="step = 2"
                >
                  Continuar
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
                      v-mask="cepMask"
                      v-model="atirador.endereco.cep"
                      :rules="[v => !!v || 'O campo CEP é obrigatório']"
                      label="CEP"
                      required
                    >
                      <template v-slot:append-outer>
                        <v-btn
                          color="primary"
                          dark
                          small
                          @click="buscar()">Buscar CEP
                          <v-icon
                            dark
                            right>mdi-account-search</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                    <v-text-field
                      v-model="atirador.endereco.logradouro"
                      :rules="[v => !!v || 'O campo Rua é obrigatório']"
                      label="Rua"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.bairro"
                      :rules="[v => !!v || 'O campo Bairro é obrigatório']"
                      label="Bairro"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.numero"
                      :rules="[v => !!v || 'O campo Numero é obrigatório']"
                      label="Numero"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.cidade"
                      :rules="[v => !!v || 'O campo Cidade é obrigatório']"
                      disabled
                      label="Cidade"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.estado"
                      :rules="[v => !!v || 'O campo Estado é obrigatório']"
                      disabled
                      label="Estado"
                      required
                    />
                    <v-text-field
                      v-mask="telefoneMask"
                      v-model="atirador.telefone"
                      :rules="[v => !!v || 'O campo Telefone é obrigatório']"
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
                  :disabled="!valid"
                  color="primary"
                  @click="step = 3"
                >
                  Continuar
                </v-btn>

                <v-btn
                  color="warning"
                  @click="step = 1"
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
                    />
                    <v-text-field
                      v-model="atirador.numeroPelotao"
                      label="Numero do Pelotao"
                    />
                    <v-text-field
                      v-model="atirador.nomeGuerra"
                      label="Nome de Guerra"
                    />
                    <v-text-field
                      v-model="atirador.numeroAtirador"
                      label="Numero do Atirador"
                    />
                    <v-text-field
                      v-model="atirador.naturalidadeCR"
                      label="Naturalidade CR"
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
                  :disabled="!valid"
                  color="primary"
                  @click="handleSubmit()"
                >
                  Cadastrar
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
      <v-snackbar
        v-model="snackbarCpf"
        top
        color="error"
      >
        {{ textErrorCpf }}
        <v-btn
          color="white"
          text
          @click="snackbarCpf = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
import axios from 'axios'

export default {
  directives: {
    mask
  },
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
        dataNascimento: Date,
        naturalidade: '',
        naturalidadeCR: '',
        nomePai: '',
        nomeMae: '',
        endereco: {
          logradouro: '',
          bairro: '',
          numero: 0,
          cep: '',
          cidade: '',
          estado: ''
        },
        telefone: '',
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
      checkbox: false,
      vCpf: true,
      snackbarCpf: false,
      textErrorCpf: 'CPF inválido!',
      religioesOptions: [
        'Católica',
        'Evangélica',
        'Sem religião',
        'Outra religiosidade',
        'Não declarada'
      ],
      escolaridadeOptions: [
        'Analfabeto',
        'Ensino Fundamental Incompleto',
        'Ensino Fundamental Completo',
        'Ensino Médio Incompleto',
        'Ensino Médio Completo',
        'Ensino Superior Incompleto',
        'Ensino Superior Completo'
      ],
      rgMask: '##.###.###-#',
      cpfMask: '###.###.###-##',
      telefoneMask: '(##)####-#####',
      cepMask: '#####-###'
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
        this.vCpf = this.validaCpf()
        if (this.vCpf) {
          console.log('Atirador a ser cadastrado: ' + JSON.stringify(this.atirador))
          this.register(this.atirador)
          this.$refs.formCadastroStep1.reset()
          this.$refs.formCadastroStep2.reset()
          this.$refs.formCadastroStep3.reset()
        } else {
          console.log('Atirador não pode ser cadastrado!')
        }
      }
    },
    buscar () {
      // console.log("Entrou na busca");
      if (/^[0-9]{5}-[0-9]{3}$/.test(this.atirador.endereco.cep)) {
        axios
          .get('https://viacep.com.br/ws/' + this.atirador.endereco.cep + '/json/')
          .then(resp => {
            // console.log("RESPOSTA API CEP => " + JSON.stringify(resp));
            if (resp.data.erro) {
              this.respCep = 'CEP inexistente.'
            } else {
              this.respCep = ''
            }
            this.atirador.endereco.logradouro = resp.data.logradouro
            this.atirador.endereco.cidade = resp.data.localidade
            this.atirador.endereco.bairro = resp.data.bairro
            this.atirador.endereco.estado = resp.data.uf
          })
      }
      // if(/^[0-9]{5}-[0-9]{3}$/.test(this.cep))
    },
    validaCpf () {
      if (this.atirador.cpf.length === 14) {
        console.log('TAMANHO DO CPF => ' + this.atirador.cpf.length + ' E SE ESTA VALIDADO => ' + this.testeCpf(this.atirador.cpf))
        this.vCpf = this.testeCpf(this.atirador.cpf)
        console.log('Teste cpf => ' + this.vCpf)
        if (this.vCpf === false) {
          this.snackbarCpf = true
        }
        return this.vCpf
      } else {
        this.vCpf = false
        this.snackbarCpf = true
        return this.vCpf
      }
    },
    testeCpf (cpf) {
      var cpfSemMascara = cpf.replace(/\D/g, '')
      var Soma
      var Resto
      Soma = 0
      if (cpfSemMascara === '00000000000') return false

      for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpfSemMascara.substring(i - 1, i)) * (11 - i)
      Resto = (Soma * 10) % 11

      if ((Resto === 10) || (Resto === 11)) Resto = 0
      if (Resto !== parseInt(cpfSemMascara.substring(9, 10))) return false

      Soma = 0
      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfSemMascara.substring(i - 1, i)) * (12 - i)
      Resto = (Soma * 10) % 11

      if ((Resto === 10) || (Resto === 11)) Resto = 0
      if (Resto !== parseInt(cpfSemMascara.substring(10, 11))) return false
      return true
    }
  }
}
</script>
