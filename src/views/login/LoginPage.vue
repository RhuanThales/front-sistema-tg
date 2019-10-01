<template>
  <v-container
    grid-list-xl
    text-xs-center
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm5
        md4
        offset-sm4
      >
        <v-card
          elevation-24
          style="padding: 10px; border: 1px; border-radius: 50px;"
          class="caixaLogin"
        >
          <v-card-text >
            <v-img
              :src="logo"
              height="100"
              contain
            />
            <v-list-item-title
              class="subtitle-1"
              style="color: black; text-align: center;"
            >
              Tiro de Guerra 04-013
            </v-list-item-title>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="email"
                :rules="loginRules"
                clearable
                label="Login"
                type="text"
                color="primary"
                required
              />
              <v-text-field
                v-model="senha"
                :append-icon="show4 ? 'mdi-eye-off' : 'mdi-eye-outline'"
                :rules="senhaRules"
                :type="show4 ? 'text' : 'password'"
                clearable
                label="Senha"
                color="primary"
                required
                @click:append="show4 = !show4"
              />
            </v-form>
            <div class="text-center">
              <v-btn
                :disabled="!valid"
                color="primary"
                @click="validate"
              >Entrar</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <div v-if="account.state.mensagem == 'Error'">
      <v-flex
        xs12
        sm5
        md4
        offset-sm4
      >
        <v-alert
          :value="true"
          type="error"
        >
          Login ou senha inválidos.
        </v-alert>
      </v-flex>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      logo: './img/logo-tg.png',
      email: '',
      show4: false,
      password: 'Password',
      loginRules: [
        v => !!v || 'Informe o seu login!'
      ],
      senha: '',
      senhaRules: [
        v => !!v || 'Informe o sua senha!'
      ],
      valid: true
    }
  },
  computed: {
    ...mapState('account', ['status']),
    ...mapState({
      account: state => state.account
    })
  },
  created () {
    this.logout()
    if (this.account.state.mensagem !== '') {
      this.account.state.mensagem = ''
    }
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        const { email, senha } = this
        if (email && senha) {
          this.login({ email, senha })
        }
      }
    }
  }
}
</script>
