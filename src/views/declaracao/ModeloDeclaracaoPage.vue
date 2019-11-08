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
          <h6 style="text-align:center">TIRO DE GUERRA 04-013 - PATOS DE MINAS</h6>
          <hr>
          <h4 style="text-align:center">Modelo de Declaração</h4>
          <hr>
          <div>
            <br>
            <p>_____________________________________________________________</p>
            <p>JAILSON GOMES DE LIMA S.Ten</p>
            <p>Ch Instr TG 04-013</p>
          </div>
        </div>
        <!---->
        <div id="botaoVoltar">
          <v-btn
            color="error"
            @click="voltar"
          >
            <v-icon left>mdi-arrow-left-bold-circle</v-icon>
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
  },
  methods: {
    imprimir () {
      document.getElementById('botaoImprimir').remove()
      document.getElementById('botaoVoltar').remove()
      this.d.print(this.$el, [this.cssText])
      this.$router.push('/')
    },
    voltar () {
      this.$router.push('/')
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
