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
          title="Editar Atirador"
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
                step="2">
                Endereco / Telefones
              </v-stepper-step>

              <v-divider/>

              <v-stepper-step
                step="3">
                Dados do Atirador
              </v-stepper-step>
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
                      v-mask="dataMask"
                      v-model="atirador.dataNascimento"
                      :rules="[v => !!v || 'O campo Data Nascimento é obrigatório']"
                      label="Data de Nascimento"
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
                    <v-row>
                      <v-col
                        cols="12"
                        sm="3"
                      >
                        <v-text-field
                          v-model="atirador.registroGeral.orgaoEmissor"
                          :rules="[v => !!v || 'O campo é obrigatório']"
                          label="Orgao Emissor"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="9"
                      >
                        <v-text-field
                          v-model="atirador.registroGeral.numeroRg"
                          :rules="[v => !!v || 'O campo RG é obrigatório']"
                          label="RG"
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          v-model="atirador.tituloEleitor.numeroTitulo"
                          :rules="[v => !!v || 'O campo Titulo de Eleitor é obrigatório']"
                          label="Titulo Eleitor"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          v-model="atirador.tituloEleitor.zonaTitulo"
                          :rules="[v => !!v || 'O campo é obrigatório']"
                          label="Zona Eleitoral"
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-text-field
                      v-model="atirador.nomePai"
                      :rules="[v => !!v || 'O campo Nome do Pai é obrigatório']"
                      label="Nome do Pai"
                      required
                    />
                    <v-text-field
                      v-model="atirador.nomeMae"
                      :rules="[v => !!v || 'O campo Nome da Mãe é obrigatório']"
                      label="Nome da Mae"
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
                    <v-switch
                      v-model="atirador.statusAtirador"
                      label="Status"
                    />
                  </v-form>
                </v-card>

                <v-btn
                  :disabled="!valid"
                  color="indigo darken-4"
                  @click="step = 2"
                >
                  <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                  Continuar
                </v-btn>

                <v-btn
                  color="red darken-4"
                  @click="modalCancelar = true"
                >
                  <v-icon left>mdi-close-circle</v-icon>
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
                      v-model="atirador.endereco.numeroEndereco"
                      :rules="[v => !!v || 'O campo Numero é obrigatório']"
                      label="Numero"
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.cidade"
                      :rules="[v => !!v || 'O campo Cidade é obrigatório']"
                      label="Cidade"
                      disabled
                      required
                    />
                    <v-text-field
                      v-model="atirador.endereco.estado"
                      :rules="[v => !!v || 'O campo Estado é obrigatório']"
                      label="Estado"
                      disabled
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
                      v-mask="telefoneMask"
                      v-model="atirador.telefonePai"
                      label="Telefone do Pai"
                    />
                    <v-text-field
                      v-mask="telefoneMask"
                      v-model="atirador.telefoneMae"
                      label="Telefone da Mae"
                    />
                  </v-form>
                </v-card>

                <v-btn
                  :disabled="!valid"
                  color="indigo darken-4"
                  @click="step = 3"
                >
                  <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                  Continuar
                </v-btn>

                <v-btn
                  color="indigo darken-2"
                  @click="step = 1"
                >
                  <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                  Voltar
                </v-btn>

                <v-btn
                  color="red darken-4"
                  @click="modalCancelar = true"
                >
                  <v-icon left>mdi-close-circle</v-icon>
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
                    <v-autocomplete
                      v-model="atirador.numeroPelotao"
                      :items="pelotoes"
                      :no-data-text="'Pelotões não foram encontrados'"
                      item-text="numeroPelotao"
                      item-value="numeroPelotao"
                      label="Numero do Pelotao"
                      placeholder="Numero do Pelotao"
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
                    <v-select
                      v-model="atirador.funcao"
                      :items="funcaoOptions"
                      label="Função"
                    />
                    <v-checkbox
                      v-model="atirador.volutario"
                      label="Voluntario"
                    />
                  </v-form>
                </v-card>

                <v-btn
                  :disabled="!valid"
                  color="indigo darken-4"
                  @click="handleSubmit()"
                >
                  <v-icon left>mdi-check-circle</v-icon>
                  Editar
                </v-btn>

                <v-btn
                  color="indigo darken-2"
                  @click="step = 2"
                >
                  <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                  Voltar
                </v-btn>

                <v-btn
                  color="red darken-4"
                  @click="modalCancelar = true"
                >
                  <v-icon left>mdi-close-circle</v-icon>
                  Cancelar
                </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </material-card>
      </v-flex>
      <!--Modal com mensagem de confirmar cancelamento-->
      <v-dialog
        v-model="modalCancelar"
        max-width="350"
        persistent
      >
        <v-card color="error">
          <v-card-title
            class="headline"
            style="color: white !important;"
          >
            <v-icon
              style="color: white !important; padding-right: 15px !important;"
            >
              mdi-alert
            </v-icon>
            Atenção!
          </v-card-title>

          <v-card-text style="font-weight: bold; color: white !important;">
            Todos os dados informados até agora serão perdidos!
            Deseja realmente cancelar a edição?
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"/>

            <v-btn
              text
              to="/atiradores"
            >
              Sim
            </v-btn>

            <v-btn
              text
              @click="modalCancelar = false"
            >
              Não
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
import { mapState, mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
import axios from 'axios'

export default {
  directives: {
    mask
  },
  data () {
    return {
      step: 0,
      valid: true,
      atirador: {
        idAtirador: this.$store.state.editAtirador.atiradorEdit.idAtirador,
        cr: this.$store.state.editAtirador.atiradorEdit.cr,
        nomeAtirador: this.$store.state.editAtirador.atiradorEdit.nomeAtirador,
        numeroPelotao: this.$store.state.editAtirador.atiradorEdit.numeroPelotao,
        nomeGuerra: this.$store.state.editAtirador.atiradorEdit.nomeGuerra,
        numeroAtirador: this.$store.state.editAtirador.atiradorEdit.numeroAtirador,
        religiao: this.$store.state.editAtirador.atiradorEdit.religiao,
        escolaridade: this.$store.state.editAtirador.atiradorEdit.escolaridade,
        volutario: this.$store.state.editAtirador.atiradorEdit.volutario,
        dataNascimento: this.$store.state.editAtirador.atiradorEdit.dataNascimento,
        naturalidade: this.$store.state.editAtirador.atiradorEdit.naturalidade,
        naturalidadeCR: this.$store.state.editAtirador.atiradorEdit.naturalidadeCR,
        nomePai: this.$store.state.editAtirador.atiradorEdit.nomePai,
        nomeMae: this.$store.state.editAtirador.atiradorEdit.nomeMae,
        endereco: {
          logradouro: this.$store.state.editAtirador.atiradorEdit.endereco.logradouro,
          bairro: this.$store.state.editAtirador.atiradorEdit.endereco.bairro,
          numeroEndereco: this.$store.state.editAtirador.atiradorEdit.endereco.numeroEndereco,
          cep: this.$store.state.editAtirador.atiradorEdit.endereco.cep,
          cidade: this.$store.state.editAtirador.atiradorEdit.endereco.cidade,
          estado: this.$store.state.editAtirador.atiradorEdit.endereco.estado
        },
        telefone: this.$store.state.editAtirador.atiradorEdit.telefone,
        telefonePai: this.$store.state.editAtirador.atiradorEdit.telefonePai,
        telefoneMae: this.$store.state.editAtirador.atiradorEdit.telefoneMae,
        registroGeral: {
          orgaoEmissor: this.$store.state.editAtirador.atiradorEdit.registroGeral.orgaoEmissor,
          numeroRg: this.$store.state.editAtirador.atiradorEdit.registroGeral.numeroRg
        },
        cpf: this.$store.state.editAtirador.atiradorEdit.cpf,
        tituloEleitor: {
          zonaTitulo: this.$store.state.editAtirador.atiradorEdit.tituloEleitor.zonaTitulo,
          numeroTitulo: this.$store.state.editAtirador.atiradorEdit.tituloEleitor.numeroTitulo
        },
        funcao: this.$store.state.editAtirador.atiradorEdit.funcao,
        statusAtirador: this.$store.state.editAtirador.atiradorEdit.statusAtirador,
        pontosJustificados: this.$store.state.editAtirador.atiradorEdit.pontosJustificados,
        pontosNaoJustificados: this.$store.state.editAtirador.atiradorEdit.pontosNaoJustificados,
        totalPontos: this.$store.state.editAtirador.atiradorEdit.totalPontos,
        horasCfc: this.$store.state.editAtirador.atiradorEdit.horasCfc,
        horasInstrucao: this.$store.state.editAtirador.atiradorEdit.horasInstrucao,
        horasExtras: this.$store.state.editAtirador.atiradorEdit.horasExtras,
        horasServico: this.$store.state.editAtirador.atiradorEdit.horasServico,
        totalHoras: this.$store.state.editAtirador.atiradorEdit.totalHoras,
        totalDias: this.$store.state.editAtirador.atiradorEdit.totalDias
      },
      vCpf: true,
      modalCancelar: false,
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
      funcaoOptions: [
        'Monitor'
      ],
      rgMask: '##.###.###-#',
      cpfMask: '###.###.###-##',
      telefoneMask: '(##)####-#####',
      cepMask: '#####-###',
      dataMask: '##/##/####'
    }
  },
  computed: {
    ...mapState({
      pelotoes: state => state.pelotoes.all.items
    })
  },
  created () {
    this.getAllPelotoes()
  },
  methods: {
    ...mapActions('editAtirador', {
      update: 'update'
    }),
    ...mapActions('pelotoes', {
      getAllPelotoes: 'getAll'
    }),
    handleSubmit () {
      if (this.$refs.formCadastroStep1.validate()) {
        this.vCpf = this.validaCpf()
        if (this.vCpf) {
          console.log('Atirador a ser editado: ' + JSON.stringify(this.atirador))
          this.update(this.atirador)
          this.$refs.formCadastroStep1.reset()
          this.$refs.formCadastroStep2.reset()
          this.$refs.formCadastroStep3.reset()
        } else {
          console.log('Atirador não pode ser editado!')
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
    formatarData (date) {
      if (date === '0001-01-01T00:00:00Z') {
        return date
      }
      // eslint-disable-next-line one-var
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear()
      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day
      return [year, month, day].join('-')
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
