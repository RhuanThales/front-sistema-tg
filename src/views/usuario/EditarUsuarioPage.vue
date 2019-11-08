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
          title="Informe os dados abaixo"
        >
          <v-form
            ref="formCadastro"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="usuario.nome"
              :rules="nomeRules"
              label="Nome"
              required
            />
            <v-text-field
              v-model="usuario.login"
              :rules="loginRules"
              label="Login"
              required
            />
            <v-text-field
              v-model="usuario.senha"
              :append-icon="show4 ? 'mdi-eye-off' : 'mdi-eye-outline'"
              :rules="[rules.required, rules.min]"
              :type="show4 ? 'text' : 'password'"
              clearable
              label="Senha"
              color="primary"
              required
              @click:append="show4 = !show4"
            />
            <v-switch
              v-model="usuario.perfilSuper"
              label="Perfil Super"
            />

            <v-btn
              :disabled="!valid"
              color="indigo darken-4"
              class="mr-4"
              @click="handleSubmit"
            >
              <v-icon left>mdi-check-circle</v-icon>
              Editar
            </v-btn>

            <v-btn
              color="red darken-4"
              class="mr-4"
              to="/usuarios"
            >
              <v-icon left>mdi-close-circle</v-icon>
              Cancelar
            </v-btn>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      show4: false,
      password: 'Password',
      valid: true,
      usuario: {
        id: this.$store.state.editUsuario.usuarioEdit.id,
        nome: this.$store.state.editUsuario.usuarioEdit.nome,
        login: this.$store.state.editUsuario.usuarioEdit.login,
        senha: this.$store.state.editUsuario.usuarioEdit.senha,
        perfilSuper: this.$store.state.editUsuario.usuarioEdit.perfilSuper
      },
      nomeRules: [
        v => !!v || 'O campo Nome é obrigatório'
      ],
      loginRules: [
        v => !!v || 'O campo Login é obrigatório'
      ],
      rules: {
        required: v => !!v || 'O campo Senha é obrigatório.',
        min: v => (v && v.length >= 8) || 'Mínimo de 8 caracteres'
      },
      checkbox: false
    }
  },
  computed: {},
  created () {},
  methods: {
    ...mapActions('editUsuario', {
      update: 'update'
    }),
    handleSubmit () {
      if (this.$refs.formCadastro.validate()) {
        console.log('Usuario a ser editado: ' + JSON.stringify(this.usuario))
        this.update(this.usuario)
        this.$refs.formCadastro.reset()
      }
    }
  }
}
</script>
