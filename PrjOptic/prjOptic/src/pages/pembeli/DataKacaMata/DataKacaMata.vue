<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md" v-for="(kacamata, i) in data" :key="i">
          <q-card flat class="bg-yellow-5 text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
               merkKacamata : {{ kacamata.merkKacamata }}
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 90%; max-width: 70%" placeholder-src="statics/kacamata.jpg" src="statics/kacamata.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
              Harga : Rp. {{ kacamata.hargaKacamata}}
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn unelevated color="dark" icon="add_shopping_cart" no-caps label="Tambah ke Keranjang Optic" to="/pembeli/keranjang"></q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>

</template>

<script>
export default {
  name: 'DataKacaMata',
  data () {
    return {
      dta: null
    }
  },
  methods: {
    getDataKacamata () {
      this.$axios.get('/kacamata/datakacamata')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getDataKacamata()
  }
}
</script>

<style scoped>

</style>
