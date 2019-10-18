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
        <!-- {{ escala }} -->
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
          <h4 style="text-align:center">Escala de Serviço nº 0{{ escala.numeroEscala }}/2019 </h4>
          <hr>
          <h6 style="text-align:center;">Segunda-Feira {{ escala.segunda.dia }}</h6>
          <hr>
          <div>
            <table>
              <tr>
                <th>Instrutor do Dia</th>
                <td>{{ escala.instrutorSemana }}</td>
              </tr>
              <tr
                v-for="item in escala.segunda.permanenciaManha"
                :key="item.id"
              >
                <th>Permanência manhã - 5h (8:00 às 13:00 h)</th>
                <td>{{ item }}</td>
              </tr>
              <tr>
                <th>Comandante da Guarda Noturna - 12h (17:50 às 8:00 h)</th>
                <td>{{ escala.segunda.comandanteGuarda }}</td>
              </tr>
              <tr>
                <th>Guarda - 12h (17:50 às 8:00 h)</th>
                <div
                  v-for="item in escala.segunda.guardas"
                  :key="item.id"
                >
                  <td>{{ item }}</td>
                </div>
              </tr>
            </table>
          </div>
          <h6 style="text-align:center;">Terça-Feira {{ escala.terca.dia }}</h6>
          <hr>
          <h6 style="text-align:center;">Quarta-Feira {{ escala.quarta.dia }}</h6>
          <hr>
          <h6 style="text-align:center;">Quinta-Feira {{ escala.quinta.dia }}</h6>
          <hr>
          <h6 style="text-align:center;">Sexta-Feira {{ escala.sexta.dia }}</h6>
          <hr>
          <h6 style="text-align:center;">Sábado {{ escala.sabado.dia }}</h6>
          <hr>
          <h6 style="text-align:center;">Domingo {{ escala.domingo.dia }}</h6>
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
      },
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
      this.$router.push('/escalas')
    },
    voltar () {
      this.$router.push('/escalas')
    },
    formatarData (date) {
      if (date === '0001-01-01T00:00:00Z') {
        return '01/01/0000'
      }
      // eslint-disable-next-line one-var
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear()
      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day
      return [day, month, year].join('-')
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
/* table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
  text-align: left;
} */
</style>
