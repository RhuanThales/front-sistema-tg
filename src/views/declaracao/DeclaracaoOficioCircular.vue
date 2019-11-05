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
          <h6 style="text-align:center">RUA VEREADOR JOÃO PACHECO, 260 – SANTO ANTONIO – PATOS DE MINAS (MG) – CEP 38700-000</h6>
          <h6 style="text-align:center">FONE (34) 3822-9782 – E-mail: tg04013@yahoo.com.br</h6>

          <h4 style="text-align:left; padding-left: 15px;">Ofício nº S/N (CIRCULAR) - TG 04-013</h4>

          <p style="text-align:right; padding-right: 15px;">
            Patos de Minas-MG, {{ data.dia }} de {{ data.mes }} de {{ data.ano }}.
          </p>

          <p style="text-align:left; padding-left: 15px;">
            Ao Sr(a) Empregador(a), Diretor(a):
          </p>
          <p style="text-align:left; padding-left: 15px;">
            Assunto: Serviço Militar Inicial
          </p>
          <p style="text-align:left; padding-left: 15px;">
            1. O Tiro de Guerra (TG) é um Órgão de Formação da Reserva (OFR) onde o jovem
            convocado presta o Serviço Militar Inicial (obrigatório), conforme preceito constitucional e Lei
            do Serviço Militar, de modo a atender à instrução militar, conciliando o trabalho e o estudo.
          </p>

          <p style="text-align:left; padding-left: 15px;">
            2. As atividades do TG 04-013 iniciaram em 1º de março e terminarão em 30 de novembro
            de {{ data.ano }}. O atirador matriculado neste OFR terá um regime de trabalho de 2 (duas) horas diárias,
            de segunda-feira a sábado, de 6 às 8 horas. Haverá outras situações de emprego do atirador, em
            outros períodos, como serviço, instrução noturna e atividades diversas.
          </p>
          <p style="text-align:left; padding-left: 15px;">
            3. Dessa forma, informo a V. Sª. que o Sr {{ nomeAtirador }}, foi
            matriculado no TG 04-013, em 1º de março de {{ data.ano }}, se enquadrando a partir de então na rotina
            acima descrita.
          </p>
          <p style="text-align:left; padding-left: 15px;">
            4. Cabe ressaltar que, de acordo com a Lei do Serviço Militar, o convocado para
            prestação do Serviço Militar Obrigatório que faltar a suas atividades civis, por força das
            atividades militares, terá suas faltas abonadas para todos os efeitos. Caso seja necessária a
            comprovação da data e duração da atividade militar, V. Sª poderá solicitar a este OFR
            declaração.
          </p>
          <p style="text-align:left; padding-left: 15px;">
            5. Estamos certos de contar com a vossa colaboração e entendimento e a inteira
            disposição para maiores esclarecimentos e dúvidas.
          </p>

          <p style="text-align:left; padding-left: 15px;">
            Atenciosamente,
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
      nomeOficial: 'Judas Tadeu Tiburcio',
      nomeAtirador: 'Xesqueman da Silva Rodrigues',
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
  },
  methods: {
    imprimir () {
      document.getElementById('botaoImprimir').remove()
      document.getElementById('botaoVoltar').remove()
      this.d.print(this.$el, [this.cssText])
      this.$router.push('/')
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
