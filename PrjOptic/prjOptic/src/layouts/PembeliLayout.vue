<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-yellow-4 text-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="absolute-center">
          <div class="text-dark">
            <div class="text-weight-bold">
              <marquee direction="right" scrollamount="3" align="center" >
                <q-avatar size="50px">
                  <img  placeholder-src="statics/cover.png" src="statics/cover.png">
                </q-avatar>
                Welcome To Optic Genta
                "Marhaban Ya Ramadhan"
              </marquee>
            </div>
          </div>
        </q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">MEMBER</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">{{ dataUser.userName }}</div>
                  <div>{{ dataUser.namaLengkap }} </div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img  placeholder-src="statics/IMG20200131170858.jpg" src="statics/IMG20200131170858.jpg">
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="dark"
                  label="Logout"
                  unelevated
                 @click="keluar()"
                  size="sm"                  v-close-popup>
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-yellow-4 text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-yellow text-bold">
            <q-item-section>
              Optic Genta (Apps Penjualan Kaca Mata)
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="150px" class="q-mb-md">
                <img placeholder-src="statics/IMG20200131170858.jpg" src="statics/IMG20200131170858.jpg">
              </q-avatar>
              <div class="text-weight-bold">{{ dataUser.userName }}</div>
              <div>{{ dataUser.namaLengkap }}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Data Kacamata
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli">
            <q-item-section avatar>
              <q-icon name="remove_red_eye" color="dark"/>
            </q-item-section>
            <q-item-section>
              Kacamata DIOR
            </q-item-section>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Transaksi
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli/datatransaksi">
            <q-item-section avatar>
              <q-icon name="monetization_on"  color="dark" />
            </q-item-section>
            <q-item-section>
              Data Transaksi Member
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            ____________________________________
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli/keranjang">
            <q-item-section avatar>
              <q-icon name="add_shopping_cart"  color="dark" />
            </q-item-section>
            <q-item-section>
              Keranjang
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            ____________________________________
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli/panduan">
            <q-item-section avatar>
              <q-icon name="help"  color="dark" />
            </q-item-section>
            <q-item-section>
              Panduan Pemesanan
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            ____________________________________
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli/rating">
            <q-item-section avatar>
              <q-icon name="star"  color="dark" />
            </q-item-section>
            <q-item-section>
              Rating Apps Optic Genta
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'PembeliLayout',

  data () {
    return {
      left: false, dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('auth/login')
    }
  }
}
</script>
