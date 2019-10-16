<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    style="background-image: url('./img/camuflado.jpg');"
    app
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-layout
      class="fill-height"
      tag="v-list"
      column
    >
      <template >
        <div class="text-center">
          <v-avatar
            size="70"
            style="margin: 15px"
          >
            <img :src="logo">
          </v-avatar>
        </div>
      </template>
      <v-list
        dence
        nav
      >
        <v-list
          class="subtitle-1"
          style="text-align:center; font-weight: bold;color:white;"
        >
          Tiro de Guerra 04-013
        </v-list>
        <v-list-item-group color="light-green accent-3">
          <div
            v-for="(item, i) in links"
            :key="i"
          >
            <v-list-item
              :to="item.to"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"/>
              </v-list-item-icon>
              <v-list-item-content >
                <v-list-item-title
                  style="text-align:center; font-weight: bold;color:white;"
                  class="subtitle-2"
                  v-text="item.text"
                />
              </v-list-item-content>
            </v-list-item>
            <div v-show="item.divider == true">
              <v-divider/>
            </div>
          </div>
        </v-list-item-group>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    perfil: '',
    logo: './img/logo-tg.png',
    links: [
      {
        to: '/',
        icon: 'mdi-monitor',
        text: 'Home',
        divider: true
      },
      {
        to: '/usuarios',
        icon: 'mdi-star',
        text: 'Usuários'
      },
      {
        to: '/atiradores',
        icon: 'mdi-star',
        text: 'Atiradores'
      },
      {
        to: '/oficiais',
        icon: 'mdi-star',
        text: 'Oficiais'
      },
      {
        to: '/pelotoes',
        icon: 'mdi-star',
        text: 'Pelotões'
      },
      {
        to: '/escalas',
        icon: 'mdi-star',
        text: 'Escalas'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState({
      account: state => state.account
    }),
    ...mapState('app', ['color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  created () {
    this.getUsuarioStorage()
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    getUsuarioStorage () {
      let usuario = JSON.parse(localStorage.getItem('usuario'))
      this.usuario = usuario.value
    }
  }
}
</script>
