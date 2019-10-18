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
          title="Cadastro de Escala"
        >
          <v-spacer/>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step
                :complete="step > 1"
                step="1">Seg
              </v-stepper-step>
              <v-divider/>
              <v-stepper-step
                :complete="step > 2"
                step="2">Ter
              </v-stepper-step>
              <v-divider/>
              <v-stepper-step
                :complete="step > 3"
                step="3">Qua
              </v-stepper-step>
              <v-divider/>
              <v-stepper-step
                :complete="step > 4"
                step="4">Qui
              </v-stepper-step>
              <v-divider/>
              <v-stepper-step
                :complete="step > 5"
                step="5">Sex
              </v-stepper-step>
              <v-divider/>
              <v-stepper-step
                :complete="step > 6"
                step="6">Sáb
              </v-stepper-step>
              <v-divider/>
              <v-stepper-step
                :complete="step > 7"
                step="7">Dom
              </v-stepper-step>
            </v-stepper-header>
            <!--01-->
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastro1"
                    v-model="valid"
                    lazy-validation
                  >
                    <!--Campos do Formulário-->
                    <v-autocomplete
                      v-model="escala.instrutorSemana"
                      :items="oficiais"
                      :no-data-text="'Oficiais não foram encontrados'"
                      :rules="[v => !!v || 'O campo Instrutor é obrigatório']"
                      item-text="nome"
                      item-value="nome"
                      label="Instrutor"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.segunda.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Permanencia Manha"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.segunda.permanenciaTarde"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
                      label="Permanencia Tarde"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-text-field
                      v-model="escala.segunda.comandanteGuarda"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.segunda.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="step = 2"
                    >
                      Continuar
                    </v-btn>

                    <v-btn
                      color="error"
                      to="/escalas"
                    >
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
            <!--02-->
            <v-stepper-items>
              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastro2"
                    v-model="valid"
                    lazy-validation
                  >
                    <!--Campos do Formulário-->
                    <v-autocomplete
                      v-model="escala.terca.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Permanencia Manha"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.terca.permanenciaTarde"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
                      label="Permanencia Tarde"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-text-field
                      v-model="escala.terca.comandanteGuarda"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.terca.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="step = 3"
                    >
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 1"
                    >
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      to="/escalas"
                    >
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
            <!--03-->
            <v-stepper-items>
              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastro3"
                    v-model="valid"
                    lazy-validation
                  >
                    <!--Campos do Formulário-->
                    <v-autocomplete
                      v-model="escala.quarta.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Permanencia Manha"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quarta.permanenciaTarde"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
                      label="Permanencia Tarde"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-text-field
                      v-model="escala.quarta.comandanteGuarda"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quarta.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="step = 4"
                    >
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 2"
                    >
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      to="/escalas"
                    >
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
            <!--04-->
            <v-stepper-items>
              <v-stepper-content step="4">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastro4"
                    v-model="valid"
                    lazy-validation
                  >
                    <!--Campos do Formulário-->
                    <v-autocomplete
                      v-model="escala.quinta.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Permanencia Manha"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quinta.permanenciaTarde"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
                      label="Permanencia Tarde"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-text-field
                      v-model="escala.quinta.comandanteGuarda"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quinta.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="step = 5"
                    >
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 3"
                    >
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      to="/escalas"
                    >
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
            <!--05-->
            <v-stepper-items>
              <v-stepper-content step="5">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastro5"
                    v-model="valid"
                    lazy-validation
                  >
                    <!--Campos do Formulário-->
                    <v-autocomplete
                      v-model="escala.sexta.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Permanencia Manha"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sexta.permanenciaTarde"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
                      label="Permanencia Tarde"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-text-field
                      v-model="escala.sexta.comandanteGuarda"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sexta.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="step = 6"
                    >
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 4"
                    >
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      to="/escalas"
                    >
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
            <!--06-->
            <v-stepper-items>
              <v-stepper-content step="6">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastro6"
                    v-model="valid"
                    lazy-validation
                  >
                    <!--Campos do Formulário-->
                    <v-autocomplete
                      v-model="escala.sabado.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Permanencia Manha"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sabado.permanenciaTarde"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
                      label="Permanencia Tarde"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-text-field
                      v-model="escala.sabado.comandanteGuarda"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sabado.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="step = 7"
                    >
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 5"
                    >
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      to="/escalas"
                    >
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
            <!--07-->
            <v-stepper-items>
              <v-stepper-content step="7">
                <v-card
                  class="mb-12"
                  height="auto"
                >
                  <v-form
                    ref="formCadastro7"
                    v-model="valid"
                    lazy-validation
                  >
                    <!--Campos do Formulário-->
                    <v-autocomplete
                      v-model="escala.domingo.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Permanencia Manha"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.domingo.permanenciaTarde"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Tarde é obrigatório']"
                      label="Permanencia Tarde"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-text-field
                      v-model="escala.domingo.comandanteGuarda"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.domingo.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeAtirador"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="handleSubmit"
                    >
                      Cadastrar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 6"
                    >
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      to="/escalas"
                    >
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
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
      valid: true,
      escala: {
        numeroEscala: 0,
        instrutorSemana: '',
        segunda: {
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: [],
          dia: Date
        },
        terca: {
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: [],
          dia: Date
        },
        quarta: {
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: [],
          dia: Date
        },
        quinta: {
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: [],
          dia: Date
        },
        sexta: {
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: [],
          dia: Date
        },
        sabado: {
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: [],
          dia: Date
        },
        domingo: {
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: [],
          dia: Date
        }
      }
    }
  },
  computed: {
    ...mapState({
      atiradores: state => state.atiradores.all.items
    }),
    ...mapState({
      oficiais: state => state.oficiais.all.items
    })
  },
  created () {
    this.getAllAtiradores()
    this.getAllOficiais()
  },
  methods: {
    ...mapActions('escalas', {
      register: 'register'
    }),
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll'
    }),
    ...mapActions('oficiais', {
      getAllOficiais: 'getAll'
    }),
    handleSubmit () {
      if (this.$refs.formCadastro1.validate()) {
        console.log('Escala a ser cadastrada: ' + JSON.stringify(this.escala))
        this.register(this.escala).then(
          this.$refs.formCadastro1.reset(),
          this.$refs.formCadastro2.reset(),
          this.$refs.formCadastro3.reset(),
          this.$refs.formCadastro4.reset(),
          this.$refs.formCadastro5.reset(),
          this.$refs.formCadastro6.reset(),
          this.$refs.formCadastro7.reset()
        )
      }
    }
  }
}
</script>
