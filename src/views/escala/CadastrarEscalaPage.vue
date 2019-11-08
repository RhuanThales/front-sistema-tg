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
                    <v-text-field
                      v-model="escala.segunda.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
                    />
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
                      item-value="nomeGuerra"
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
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-autocomplete
                      v-model="escala.segunda.comandanteGuarda"
                      :items="monitores"
                      :no-data-text="'Monitores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.segunda.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <v-select
                      v-model="escala.segunda.tipoEscala"
                      :items="escalaOptions"
                      label="Tipo"
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="selecionarData(escala.segunda.dia, 'Terça-Feira')"
                    >
                      <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                      Continuar
                    </v-btn>

                    <v-btn
                      color="error"
                      @click="modalCancelar = true"
                    >
                      <v-icon left>mdi-close-circle</v-icon>
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
                    <v-text-field
                      v-model="escala.terca.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
                      disabled
                    />
                    <v-autocomplete
                      v-model="escala.terca.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
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
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-autocomplete
                      v-model="escala.terca.comandanteGuarda"
                      :items="monitores"
                      :no-data-text="'Monitores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.terca.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <v-select
                      v-model="escala.terca.tipoEscala"
                      :items="escalaOptions"
                      label="Tipo"
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="selecionarData(escala.terca.dia, 'Quarta-Feira')"
                    >
                      <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 1"
                    >
                      <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="modalCancelar = true"
                    >
                      <v-icon left>mdi-close-circle</v-icon>
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
                    <v-text-field
                      v-model="escala.quarta.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
                      disabled
                    />
                    <v-autocomplete
                      v-model="escala.quarta.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
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
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quarta.comandanteGuarda"
                      :items="monitores"
                      :no-data-text="'Monitores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quarta.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <v-select
                      v-model="escala.quarta.tipoEscala"
                      :items="escalaOptions"
                      label="Tipo"
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="selecionarData(escala.quarta.dia, 'Quinta-Feira')"
                    >
                      <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 2"
                    >
                      <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="modalCancelar = true"
                    >
                      <v-icon left>mdi-close-circle</v-icon>
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
                    <v-text-field
                      v-model="escala.quinta.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
                      disabled
                    />
                    <v-autocomplete
                      v-model="escala.quinta.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
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
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quinta.comandanteGuarda"
                      :items="monitores"
                      :no-data-text="'Monitores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.quinta.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <v-select
                      v-model="escala.quinta.tipoEscala"
                      :items="escalaOptions"
                      label="Tipo"
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="selecionarData(escala.quinta.dia, 'Sexta-Feira')"
                    >
                      <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 3"
                    >
                      <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="modalCancelar = true"
                    >
                      <v-icon left>mdi-close-circle</v-icon>
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
                    <v-text-field
                      v-model="escala.sexta.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
                      disabled
                    />
                    <v-autocomplete
                      v-model="escala.sexta.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
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
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sexta.comandanteGuarda"
                      :items="monitores"
                      :no-data-text="'Monitores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sexta.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <v-select
                      v-model="escala.sexta.tipoEscala"
                      :items="escalaOptions"
                      label="Tipo"
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="selecionarData(escala.sexta.dia, 'Sabado')"
                    >
                      <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 4"
                    >
                      <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="modalCancelar = true"
                    >
                      <v-icon left>mdi-close-circle</v-icon>
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
                    <v-text-field
                      v-model="escala.sabado.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
                      disabled
                    />
                    <v-autocomplete
                      v-model="escala.sabado.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
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
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sabado.comandanteGuarda"
                      :items="monitores"
                      :no-data-text="'Monitores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.sabado.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <v-select
                      v-model="escala.sabado.tipoEscala"
                      :items="escalaOptions"
                      label="Tipo"
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="selecionarData(escala.sabado.dia, 'Domingo')"
                    >
                      <v-icon left>mdi-arrow-right-bold-circle</v-icon>
                      Continuar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 5"
                    >
                      <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="modalCancelar = true"
                    >
                      <v-icon left>mdi-close-circle</v-icon>
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
                    <v-text-field
                      v-model="escala.domingo.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
                      disabled
                    />
                    <v-autocomplete
                      v-model="escala.domingo.permanenciaManha"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Permanencia Manha é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
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
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      required
                    />
                    <v-autocomplete
                      v-model="escala.domingo.comandanteGuarda"
                      :items="monitores"
                      :no-data-text="'Monitores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Comandante é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      label="Comandante"
                      required
                    />
                    <v-autocomplete
                      v-model="escala.domingo.guardas"
                      :items="atiradores"
                      :no-data-text="'Atiradores não foram encontrados'"
                      :rules="[v => !!v || 'O campo Guardas é obrigatório']"
                      item-text="nomeGuerra"
                      item-value="nomeGuerra"
                      chips
                      small-chips
                      multiple
                      label="Guardas"
                      required
                    />
                    <v-select
                      v-model="escala.domingo.tipoEscala"
                      :items="escalaOptions"
                      label="Tipo"
                    />
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="handleSubmit"
                    >
                      <v-icon left>mdi-check-circle</v-icon>
                      Cadastrar
                    </v-btn>
                    <v-btn
                      :disabled="!valid"
                      color="warning"
                      class="mr-4"
                      @click="step = 6"
                    >
                      <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                      Voltar
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="modalCancelar = true"
                    >
                      <v-icon left>mdi-close-circle</v-icon>
                      Cancelar
                    </v-btn>
                  </v-form>
                </v-card>
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
            Deseja realmente cancelar o cadastro?
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"/>

            <v-btn
              text
              to="/escalas"
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
      modalCancelar: false,
      escala: {
        numeroEscala: 0,
        instrutorSemana: '',
        segunda: {
          dia: Date,
          tipoEscala: '',
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: []
        },
        terca: {
          dia: Date,
          tipoEscala: '',
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: []
        },
        quarta: {
          dia: Date,
          tipoEscala: '',
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: []
        },
        quinta: {
          dia: Date,
          tipoEscala: '',
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: []
        },
        sexta: {
          dia: Date,
          tipoEscala: '',
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: []
        },
        sabado: {
          dia: Date,
          tipoEscala: '',
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: []
        },
        domingo: {
          dia: Date,
          tipoEscala: '',
          permanenciaManha: [],
          permanenciaTarde: [],
          comandanteGuarda: '',
          guardas: []
        }
      },
      escalaOptions: [
        'Preta',
        'Vermelha'
      ]
    }
  },
  computed: {
    ...mapState({
      atiradores: state => state.atiradores.all.items
    }),
    ...mapState({
      monitores: state => state.atiradores.monitores.items
    }),
    ...mapState({
      oficiais: state => state.oficiais.all.items
    })
  },
  created () {
    this.getAllAtiradores()
    this.getAllMonitores()
    this.getAllOficiais()
  },
  methods: {
    ...mapActions('escalas', {
      register: 'register'
    }),
    ...mapActions('atiradores', {
      getAllAtiradores: 'getAll',
      getAllMonitores: 'getMonitores'
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
    },
    selecionarData (data, nomeDia) {
      if (nomeDia === 'Terça-Feira') {
        this.step = 2

        // eslint-disable-next-line one-var
        let d = new Date(data),
          month = '' + (d.getMonth() + 1),
          day = '' + (d.getDate() + 2),
          year = d.getFullYear()
        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        this.escala.terca.dia = [year, month, day].join('-')
      } else if (nomeDia === 'Quarta-Feira') {
        this.step = 3

        // eslint-disable-next-line one-var
        let d = new Date(data),
          month = '' + (d.getMonth() + 1),
          day = '' + (d.getDate() + 2),
          year = d.getFullYear()
        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        this.escala.quarta.dia = [year, month, day].join('-')
      } else if (nomeDia === 'Quinta-Feira') {
        this.step = 4

        // eslint-disable-next-line one-var
        let d = new Date(data),
          month = '' + (d.getMonth() + 1),
          day = '' + (d.getDate() + 2),
          year = d.getFullYear()
        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        this.escala.quinta.dia = [year, month, day].join('-')
      } else if (nomeDia === 'Sexta-Feira') {
        this.step = 5

        // eslint-disable-next-line one-var
        let d = new Date(data),
          month = '' + (d.getMonth() + 1),
          day = '' + (d.getDate() + 2),
          year = d.getFullYear()
        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        this.escala.sexta.dia = [year, month, day].join('-')
      } else if (nomeDia === 'Sabado') {
        this.step = 6

        // eslint-disable-next-line one-var
        let d = new Date(data),
          month = '' + (d.getMonth() + 1),
          day = '' + (d.getDate() + 2),
          year = d.getFullYear()
        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        this.escala.sabado.dia = [year, month, day].join('-')
      } else if (nomeDia === 'Domingo') {
        this.step = 7

        // eslint-disable-next-line one-var
        let d = new Date(data),
          month = '' + (d.getMonth() + 1),
          day = '' + (d.getDate() + 2),
          year = d.getFullYear()
        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        this.escala.domingo.dia = [year, month, day].join('-')
      }
    }
  }
}
</script>
