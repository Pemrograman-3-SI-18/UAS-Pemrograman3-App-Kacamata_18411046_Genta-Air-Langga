<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-yellow-4 text-blue-grey-6">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="absolute-center">
          <div class="text-dark">
            <div class="text-weight-bold">
              <marquee direction="right" scrollamount="3" align="center" >
                <q-avatar size="50px">
                  <img  placeholder-src="statics/cover.png" src="statics/cover.png">
                </q-avatar>
                Assalamualaikum Admin Genta Air Langga
                <q-avatar size="50px">
                  <img  placeholder-src="statics/emoji.png" src="statics/emoji.png">
                </q-avatar>
              </marquee>
            </div>
          </div>
        </q-toolbar-title>

        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;" color="dark">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">ADMIN</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="dark" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">{{ dataUser.userName }}</div>
                  <div>{{ dataUser.namaLengkap }}</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img placeholder-src="statics/cover.png" src="statics/cover.png">
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="dark"
                  label="logout"
                  unelevated
                  @click="keluar()"
                  size="sm"
                  v-close-popup>
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
              Optic Genta (apps penjualan Kaca Mata)
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="150px" class="q-mb-md">
                <img placeholder-src="statics/amir.jpg" src="statics/amir.jpg">
              </q-avatar>
              <div class="text-weight-bold">{{ dataUser.userName }}</div>
              <div>{{ dataUser.namaLengkap }}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Master kaca Mata
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/admin">
            <q-item-section avatar>
              <q-icon name="folder_shared" color="dark" />
            </q-item-section>
            <q-item-section>
              Data Kaca Mata
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/admin/inputdatakacamata">
            <q-item-section avatar>
              <q-icon name="input" color="dark" />
            </q-item-section>
            <q-item-section>
              Input Data Kaca Mata
            </q-item-section>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Transaksi Optic Genta
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/admin/datatransaksi">
            <q-item-section avatar>
              <q-icon name="monetization_on" color="dark" />
            </q-item-section>
            <q-item-section>
              Data Transaksi
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/admin/datatransaksimember">
            <q-item-section avatar>
              <q-icon name="face" color="dark"/>
            </q-item-section>
            <q-item-section>
              Data Member
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
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
