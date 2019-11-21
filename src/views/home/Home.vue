<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      align-center
      column
    >
      <v-container
        grid-list-md
        text-xs-center
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            xl12
            lg12
            md12
            sm12
            xs12
          >
            <!---->
            <v-card
              dark
              style="background-image: url('./img/camuflado.jpg');background-repeat:no-repeat; background-size:100%;"
            >
              <v-card-text>
                <v-list-item-title
                  class="subtitle-1"
                  style="color: white; text-align: center;"
                >
                  Bem vindo
                </v-list-item-title>
                <v-list-item-title
                  class="subtitle-2"
                  style="color: white; text-align: center;"
                >
                  {{ nomeUsuario }}
                </v-list-item-title>
              </v-card-text>
            </v-card>
            <v-container
              grid-list-md
              text-xs-center
            >
              <v-layout
                row
                wrap
              >
                <v-flex xs12>
                  <v-card
                    dark
                    color="primary"
                  >
                    <v-card-text class="px-0">
                      <div class="text-xs-center">
                        <div class="font-weight-black">Gráfico Exemplo 01</div>
                      </div>
                    </v-card-text>
                  </v-card>
                  <chartist
                    :data="grafico1.data"
                    :options="grafico1.options"
                    :plugins="grafico1.plugins"
                    :responsive-options="grafico1.responsiveOptions"
                    type="Pie"
                  />
                </v-flex>
              </v-layout>
            </v-container>
            <!---->
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Legend from 'chartist-plugin-legend'
import Tooltip from 'chartist-plugin-tooltip'

export default {
  data () {
    return {
      show: false,
      nomeUsuario: '',
      idUsuario: '',
      grafico1: {
        data: {
          labels: ['A', 'B', 'C', 'D', 'E', 'F'],
          series: ['5', '10', '15', '20', '25', '45']
        },
        options: {
          donut: true,
          donutWidth: 70,
          chartPadding: 30,
          showLabel: false,
          width: '500px',
          height: '500px',
          plugins: [
            Legend(),
            Tooltip()
          ]
        },
        responsiveOptions: [
          ['screen and (max-width: 600px)', {
            width: '200px',
            height: '200px',
            chartPadding: 5,
            plugins: [
              Legend(),
              Tooltip()
            ]
          }],
          ['screen and (min-width: 601px) and (max-width: 1400px)', {
            width: '300px',
            height: '300px',
            chartPadding: 5,
            plugins: [
              Legend(),
              Tooltip()
            ]
          }]
        ]
      }
    }
  },
  computed: {
    ...mapState({
      account: state => state.account
    })
  },
  created () {
    this.NomeDoUsuario()
    this.getUsuarioStorage()
    localStorage.removeItem('nomeAtirador')
  },
  methods: {
    getUsuarioStorage () {
      let usuario = JSON.parse(localStorage.getItem('usuario'))
      this.usuario = usuario.value
    },
    NomeDoUsuario () {
      if (
        this.account !== null ||
        this.account.user !== null ||
        this.account !== '' ||
        this.account.user !== ''
      ) {
        this.account.user = JSON.parse(localStorage.getItem('usuario'))
        this.nomeUsuario = this.account.user.value.nome
      }
    },
    grafico () {
      try {
        // this.grafico1.data.labels = this.unidades[0].labels
        // this.grafico1.data.series = this.unidades[0].series
      } catch (e) {}
    }
  }
}
</script>
