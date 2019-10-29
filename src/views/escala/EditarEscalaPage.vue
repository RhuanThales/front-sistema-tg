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
                    <v-text-field
                      v-model="escala.terca.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
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
                    <v-text-field
                      v-model="escala.quarta.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
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
                    <v-text-field
                      v-model="escala.quinta.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
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
                    <v-text-field
                      v-model="escala.sexta.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
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
                    <v-text-field
                      v-model="escala.sabado.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
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
                    <v-text-field
                      v-model="escala.domingo.dia"
                      :rules="[v => !!v || 'O campo Data é obrigatório']"
                      label="Data"
                      type="date"
                      required
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
                    <!--Botões-->
                    <v-btn
                      :disabled="!valid"
                      color="indigo darken-4"
                      class="mr-4"
                      @click="handleSubmit"
                    >
                      Editar
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
        idEscala: this.$store.state.editEscala.escalaEdit.idEscala,
        numeroEscala: this.$store.state.editEscala.escalaEdit.numeroEscala,
        instrutorSemana: this.$store.state.editEscala.escalaEdit.instrutorSemana,
        segunda: {
          permanenciaManha: this.$store.state.editEscala.escalaEdit.segunda.permanenciaManha,
          permanenciaTarde: this.$store.state.editEscala.escalaEdit.segunda.permanenciaTarde,
          comandanteGuarda: this.$store.state.editEscala.escalaEdit.segunda.comandanteGuarda,
          guardas: this.$store.state.editEscala.escalaEdit.segunda.guardas,
          dia: this.formatarData(this.$store.state.editEscala.escalaEdit.segunda.dia)
        },
        terca: {
          permanenciaManha: this.$store.state.editEscala.escalaEdit.terca.permanenciaManha,
          permanenciaTarde: this.$store.state.editEscala.escalaEdit.terca.permanenciaTarde,
          comandanteGuarda: this.$store.state.editEscala.escalaEdit.terca.comandanteGuarda,
          guardas: this.$store.state.editEscala.escalaEdit.terca.guardas,
          dia: this.formatarData(this.$store.state.editEscala.escalaEdit.terca.dia)
        },
        quarta: {
          permanenciaManha: this.$store.state.editEscala.escalaEdit.quarta.permanenciaManha,
          permanenciaTarde: this.$store.state.editEscala.escalaEdit.quarta.permanenciaTarde,
          comandanteGuarda: this.$store.state.editEscala.escalaEdit.quarta.comandanteGuarda,
          guardas: this.$store.state.editEscala.escalaEdit.quarta.guardas,
          dia: this.formatarData(this.$store.state.editEscala.escalaEdit.quarta.dia)
        },
        quinta: {
          permanenciaManha: this.$store.state.editEscala.escalaEdit.quinta.permanenciaManha,
          permanenciaTarde: this.$store.state.editEscala.escalaEdit.quinta.permanenciaTarde,
          comandanteGuarda: this.$store.state.editEscala.escalaEdit.quinta.comandanteGuarda,
          guardas: this.$store.state.editEscala.escalaEdit.quinta.guardas,
          dia: this.formatarData(this.$store.state.editEscala.escalaEdit.quinta.dia)
        },
        sexta: {
          permanenciaManha: this.$store.state.editEscala.escalaEdit.sexta.permanenciaManha,
          permanenciaTarde: this.$store.state.editEscala.escalaEdit.sexta.permanenciaTarde,
          comandanteGuarda: this.$store.state.editEscala.escalaEdit.sexta.comandanteGuarda,
          guardas: this.$store.state.editEscala.escalaEdit.sexta.guardas,
          dia: this.formatarData(this.$store.state.editEscala.escalaEdit.sexta.dia)
        },
        sabado: {
          permanenciaManha: this.$store.state.editEscala.escalaEdit.sabado.permanenciaManha,
          permanenciaTarde: this.$store.state.editEscala.escalaEdit.sabado.permanenciaTarde,
          comandanteGuarda: this.$store.state.editEscala.escalaEdit.sabado.comandanteGuarda,
          guardas: this.$store.state.editEscala.escalaEdit.sabado.guardas,
          dia: this.formatarData(this.$store.state.editEscala.escalaEdit.sabado.dia)
        },
        domingo: {
          permanenciaManha: this.$store.state.editEscala.escalaEdit.domingo.permanenciaManha,
          permanenciaTarde: this.$store.state.editEscala.escalaEdit.domingo.permanenciaTarde,
          comandanteGuarda: this.$store.state.editEscala.escalaEdit.domingo.comandanteGuarda,
          guardas: this.$store.state.editEscala.escalaEdit.domingo.guardas,
          dia: this.formatarData(this.$store.state.editEscala.escalaEdit.domingo.dia)
        }
      }
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
    ...mapActions('editEscala', {
      update: 'update'
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
        console.log('Escala a ser editada: ' + JSON.stringify(this.escala))
        this.update(this.escala).then(
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
    }
  }
}
</script>
