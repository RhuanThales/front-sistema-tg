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
        <div id="botaoImprimir">
          <v-btn
            color="primary"
            @click="imprimir"
          >
            <v-icon left>mdi-printer</v-icon>
            Imprimir
          </v-btn>
        </div>
        <!---->
        <div class="printing">
          <img
            src="../../../public/img/logo-tg.png"
            alt="Logo"
            class="logo-tiroGuerra"
          >
          <h6 style="text-align:center">MINISTÉRIO DA DEFESA</h6>
          <h6 style="text-align:center">EXÉRCITO BRASILEIRO</h6>
          <h6 style="text-align:center">TIRO DE GUERRA 04-013 - PATOS DE MINAS - MG</h6>

          <h4 style="text-align:center">DECLARAÇÃO</h4>

          <p>
            DECLARO para os devidos fins que o Atirador {{ nomeAtirador }},
            esteve de serviço de escala, no período das 07:50 h do dia {{ dataInicio.dia }} de {{ dataInicio.mes }} às 08:00 h do dia {{ dataFim.dia }} de
            {{ dataFim.mes }} de 2018.
          </p>
          <p>
            Patos de Minas-MG, {{ data.dia }} de {{ data.mes }} de {{ data.ano }}.
          </p>
          <p>
            {{ nomeOficial }} - Subtenente
          </p>
          <p>
            Chefe da Instrução do Tiro de Guerra 04-013
          </p>
          <div>
            <br>
            <p>Rua Vereador João Pacheco, 260, Bairro Santo Antônio – Patos de Minas-MG - CEP 38700-551 Tel: (34) 3822-9782</p>
          </div>
        </div>
        <!---->
        <div id="botaoVoltar">
          <v-btn
            color="error"
            @click="voltar"
          >
            Voltar
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      data: {
        dia: '',
        mes: '',
        ano: ''
      },
      dataInicio: {
        dia: '00',
        mes: 'mes aqui'
      },
      dataFim: {
        dia: '00',
        mes: 'mes aqui'
      },
      nomeOficial: '***********************',
      nomeAtirador: '***********************',
      btnImprimir: true,
      submitted: false,
      cssText: `
        .printing {
          font-family: 'Open Sans', sans-serif;
          width: 900px;
          text-align: center;
        }
        .printing ul {
          padding-left: 3em;
          text-align: left;
        }
        .logo-tiroGuerra{
          width: 50px;
          margin: auto;
          display: block;
        }
      `
    }
  },
  computed: {
  },
  mounted () {
    const { Printd } = window.printd
    this.d = new Printd()
    const { contentWindow } = this.d.getIFrame()
    contentWindow.addEventListener('beforeprint', () =>
      console.log('before print event!')
    )
    contentWindow.addEventListener('afterprint', () =>
      console.log('after print event!')
    )
  },
  created () {
    this.pegarData()
    this.pegarNomeAtirador()
    this.pegarNomeOficial()
  },
  methods: {
    imprimir () {
      document.getElementById('botaoImprimir').remove()
      document.getElementById('botaoVoltar').remove()
      this.d.print(this.$el, [this.cssText])
      this.$router.push('/atiradores')
    },
    pegarNomeAtirador () {
      let nomeTemp = localStorage.getItem('nomeAtirador')
      this.nomeAtirador = nomeTemp
    },
    pegarNomeOficial () {
      let info = JSON.parse(localStorage.getItem('usuario'))
      this.nomeOficial = info.value.chefeInstrucao
    },
    pegarData () {
      let d = new Date()

      let month = '' + (d.getMonth() + 1)
      let day = '' + (d.getDate())
      let year = d.getFullYear()

      if (month.length < 2) {
        month = '0' + month
      }
      if (day.length < 2) {
        day = '0' + day
      }

      this.data.dia = day
      this.data.mes = month
      this.data.ano = year
    },
    voltar () {
      this.$router.push('/atiradores')
    }
  }
}
</script>

<style>
.printing {
  font-family: 'Open Sans', sans-serif;
  max-width: 800px;
  border: solid 1px #ccc;
  text-align: center;
  margin: 2em auto;
}
.printing ul {
  padding-left: 3em;
  text-align: left;
}
.logo-tiroGuerra {
  padding-top: 15px;
  width: 50px;
  margin: auto;
  display: block;
}
#botaoImprimir{
  padding: 15px;
}
</style>
