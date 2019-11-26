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
          title="Informações do Atirador"
        >
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Nome Completo:
                    </strong>
                    {{ atiradorInfo.nomeAtirador }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      CR:
                    </strong>
                    {{ atiradorInfo.cr }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Nome de Guerra:
                    </strong>
                    {{ atiradorInfo.nomeGuerra }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Número:
                    </strong>
                    {{ atiradorInfo.numeroAtirador }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Pelotão:
                    </strong>
                    {{ atiradorInfo.numeroPelotao }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Função:
                    </strong>
                    {{ atiradorInfo.funcao }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Naturalidade CR:
                    </strong>
                    {{ atiradorInfo.naturalidadeCR }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Voluntário:
                    </strong>
                    <div
                      v-if="atiradorInfo.voluntaio === true"
                      style="display: inline-block !important"
                    >
                      Sim
                    </div>
                    <div
                      v-else
                      style="display: inline-block !important"
                    >
                      Não
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Data Nascimento:
                    </strong>
                    {{ atiradorInfo.dataNascimento }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      CPF:
                    </strong>
                    {{ atiradorInfo.cpf }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      RG:
                    </strong>
                    {{ atiradorInfo.registroGeral.numeroRg }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Orgão Emissor:
                    </strong>
                    {{ atiradorInfo.registroGeral.orgaoEmissor }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Titulo de Eleitor:
                    </strong>
                    {{ atiradorInfo.tituloEleitor.numeroTitulo }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Zona Eleitoral:
                    </strong>
                    {{ atiradorInfo.tituloEleitor.zonaTitulo }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Naturalidade:
                    </strong>
                    {{ atiradorInfo.naturalidade }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Pai:
                    </strong>
                    {{ atiradorInfo.nomePai }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Mãe:
                    </strong>
                    {{ atiradorInfo.nomeMae }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Telefone Pessoal:
                    </strong>
                    {{ atiradorInfo.telefone }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Telefone do Pai:
                    </strong>
                    {{ atiradorInfo.telefonePai }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Telefone da Mãe:
                    </strong>
                    {{ atiradorInfo.telefoneMae }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Endereço:
                    </strong>
                    {{ atiradorInfo.endereco.logradouro }}
                    {{ atiradorInfo.endereco.bairro }}
                    nº {{ atiradorInfo.endereco.numeroEndereco }}
                    {{ atiradorInfo.endereco.cidade }}
                    {{ atiradorInfo.endereco.estado }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Religião:
                    </strong>
                    {{ atiradorInfo.religiao }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong
                      class="tertiary--text"
                      style="font-size: 16px !important"
                    >
                      Escolaridade:
                    </strong>
                    {{ atiradorInfo.escolaridade }}
                  </td>
                </tr>
                <!--Botões da página-->
                <tr>
                  <td>
                    <v-btn
                      color="indigo darken-4"
                      @click="getAtiradorEditar(atiradorInfo)"
                    >
                      <v-icon left>mdi-pencil-circle</v-icon>
                      Editar
                    </v-btn>

                    <v-btn
                      color="red darken-4"
                      @click="openModalDelete(atiradorInfo.nomeGuerra, atiradorInfo.idAtirador)"
                    >
                      <v-icon left>mdi-delete-circle</v-icon>
                      Excluir
                    </v-btn>

                    <v-btn
                      color="indigo darken-4"
                      @click="getAtiradorFrequencia()"
                    >
                      <v-icon left>mdi-check-circle</v-icon>
                      Frequências
                    </v-btn>

                    <v-btn
                      color="green darken-4"
                      @click="abrirModalDeclaracao()"
                    >
                      <v-icon left>mdi-file-document</v-icon>
                      Declarações
                    </v-btn>

                    <v-btn
                      color="warning"
                      to="/atiradores"
                    >
                      <v-icon left>mdi-arrow-left-bold-circle</v-icon>
                      Voltar
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </material-card>
        <!--Modal de confirmar exclusão de Atirador-->
        <v-dialog
          v-model="modalDelete"
          max-width="350"
        >
          <v-card>
            <v-card-title class="headline">Deseja realmente excluir o atirador?</v-card-title>

            <v-card-text style="font-weight: bold;">
              O Atirador {{ nomeAtirador }} será excluido permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="indigo darken-4"
                text
                @click="deletarAtirador(idAtirador)"
              >
                Confirmar
              </v-btn>

              <v-btn
                color="red darken-4"
                text
                @click="modalDelete = false"
              >
                Cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--Modal de selecionar tipo de declaração-->
        <v-dialog
          v-model="modalSelectDeclaracao"
          max-width="500"
        >
          <v-card>
            <v-card-title class="headline">Selecione qual tipo de Declaração deseja:</v-card-title>

            <v-card-text style="font-weight: bold;">
              <v-form
                ref="formDeclaracao"
                v-model="valid"
                lazy-validation
              >
                <v-select
                  v-model="tipoDeclaracao"
                  :items="declaracaoOptions"
                  :rules="[v => !!v || 'É obrigatório informar este campo!']"
                  label="Declaração"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                :disabled="!valid"
                color="indigo darken-4"
                text
                @click="selecionarDeclaracao()"
              >
                Confirmar
              </v-btn>

              <v-btn
                color="red darken-4"
                text
                @click="modalSelectDeclaracao = false"
              >
                Cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      valid: true,
      modalDelete: false,
      modalSelectDeclaracao: false,
      tipoDeclaracao: '',
      idAtirador: '',
      nomeAtirador: '',
      atiradorInfo: {
        idAtirador: this.$store.state.editAtirador.atiradorEdit.idAtirador,
        cr: this.$store.state.editAtirador.atiradorEdit.cr,
        nomeAtirador: this.$store.state.editAtirador.atiradorEdit.nomeAtirador,
        numeroPelotao: this.$store.state.editAtirador.atiradorEdit.numeroPelotao,
        nomeGuerra: this.$store.state.editAtirador.atiradorEdit.nomeGuerra,
        numeroAtirador: this.$store.state.editAtirador.atiradorEdit.numeroAtirador,
        religiao: this.$store.state.editAtirador.atiradorEdit.religiao,
        escolaridade: this.$store.state.editAtirador.atiradorEdit.escolaridade,
        volutario: this.$store.state.editAtirador.atiradorEdit.volutario,
        dataNascimento: this.formatarData(this.$store.state.editAtirador.atiradorEdit.dataNascimento),
        naturalidade: this.$store.state.editAtirador.atiradorEdit.naturalidade,
        naturalidadeCR: this.$store.state.editAtirador.atiradorEdit.naturalidadeCR,
        nomePai: this.$store.state.editAtirador.atiradorEdit.nomePai,
        nomeMae: this.$store.state.editAtirador.atiradorEdit.nomeMae,
        endereco: {
          logradouro: this.$store.state.editAtirador.atiradorEdit.endereco.logradouro,
          bairro: this.$store.state.editAtirador.atiradorEdit.endereco.bairro,
          numeroEndereco: this.$store.state.editAtirador.atiradorEdit.endereco.numeroEndereco,
          cep: this.$store.state.editAtirador.atiradorEdit.endereco.cep,
          cidade: this.$store.state.editAtirador.atiradorEdit.endereco.cidade,
          estado: this.$store.state.editAtirador.atiradorEdit.endereco.estado
        },
        telefone: this.$store.state.editAtirador.atiradorEdit.telefone,
        telefonePai: this.$store.state.editAtirador.atiradorEdit.telefonePai,
        telefoneMae: this.$store.state.editAtirador.atiradorEdit.telefoneMae,
        registroGeral: {
          orgaoEmissor: this.$store.state.editAtirador.atiradorEdit.registroGeral.orgaoEmissor,
          numeroRg: this.$store.state.editAtirador.atiradorEdit.registroGeral.numeroRg
        },
        cpf: this.$store.state.editAtirador.atiradorEdit.cpf,
        tituloEleitor: {
          zonaTitulo: this.$store.state.editAtirador.atiradorEdit.tituloEleitor.zonaTitulo,
          numeroTitulo: this.$store.state.editAtirador.atiradorEdit.tituloEleitor.numeroTitulo
        },
        funcao: this.$store.state.editAtirador.atiradorEdit.funcao,
        statusAtirador: this.$store.state.editAtirador.atiradorEdit.statusAtirador,
        pontosJustificados: this.$store.state.editAtirador.atiradorEdit.pontosJustificados,
        pontosNaoJustificados: this.$store.state.editAtirador.atiradorEdit.pontosNaoJustificados,
        totalPontos: this.$store.state.editAtirador.atiradorEdit.totalPontos,
        horasCfc: this.$store.state.editAtirador.atiradorEdit.horasCfc,
        horasInstrucao: this.$store.state.editAtirador.atiradorEdit.horasInstrucao,
        horasExtras: this.$store.state.editAtirador.atiradorEdit.horasExtras,
        horasServico: this.$store.state.editAtirador.atiradorEdit.horasServico,
        totalHoras: this.$store.state.editAtirador.atiradorEdit.totalHoras,
        totalDias: this.$store.state.editAtirador.atiradorEdit.totalDias
      },
      declaracaoOptions: [
        'Declaração de Prestação de Serviço Militar',
        'Declaração de Prestação Serviço Permanencia',
        'Declaração de Prestação Serviço 24 Horas',
        'Declaração de Prestação Serviço Noturno',
        'Declaração de Prestação Serviço para Faculdade',
        'Oficio Circular Empregado/Empregador'
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    ...mapActions('atiradores', {
      deleteAtirador: 'delete'
    }),
    ...mapActions('editAtirador', {
      getAtiradorEditar: 'getAtiradorEdit'
    }),
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
    },
    openModalDelete (nome, id) {
      console.log('Atirador => ' + nome)
      this.nomeAtirador = nome
      this.idAtirador = id
      this.modalDelete = true
    },
    deletarAtirador (id) {
      this.deleteAtirador(id)
      this.modalDelete = false
      this.$router.push('/atiradores')
    },
    abrirModalDeclaracao () {
      console.log('Atirador => ' + JSON.stringify(this.atiradorInfo.nomeAtirador))
      localStorage.setItem('nomeAtirador', this.atiradorInfo.nomeAtirador)
      this.modalSelectDeclaracao = true
    },
    getAtiradorFrequencia () {
      localStorage.setItem('crAtirador', this.atiradorInfo.cr)
      this.$router.push('/frequenciasAtirador')
    },
    selecionarDeclaracao () {
      console.log('Tipo Declaração => ' + this.tipoDeclaracao)
      if (this.$refs.formDeclaracao.validate()) {
        if (this.tipoDeclaracao === 'Declaração de Prestação de Serviço Militar') {
          this.$router.push('/prestacaoServico')
        } else if (this.tipoDeclaracao === 'Declaração de Prestação Serviço Permanencia') {
          this.$router.push('/servicoPermanencia')
        } else if (this.tipoDeclaracao === 'Declaração de Prestação Serviço 24 Horas') {
          this.$router.push('/servico24Horas')
        } else if (this.tipoDeclaracao === 'Declaração de Prestação Serviço Noturno') {
          this.$router.push('/servicoNoturno')
        } else if (this.tipoDeclaracao === 'Declaração de Prestação Serviço para Faculdade') {
          this.$router.push('/servicoFaculdade')
        } else if (this.tipoDeclaracao === 'Oficio Circular Empregado/Empregador') {
          this.$router.push('/oficioCircular')
        }
      }
    }
  }
}
</script>
