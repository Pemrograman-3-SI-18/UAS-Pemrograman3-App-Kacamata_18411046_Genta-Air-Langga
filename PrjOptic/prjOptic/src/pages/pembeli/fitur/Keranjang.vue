<template>
  <q-page>
    <div class="q-pa-md">
      <div class="justify-center">
        <div class="col-md-6 col-xs-10 q-pa-md">
          <q-card flat class="bg-dark text-bold justify-center">
            <q-card-section>
              <div class="text-white">
                Keranjang Optic
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-dark text-white">
            <q-card-section>
              <div class="text-h6">
                Tipe Kacamata : Dior Frame Bulat Silver
                *(Lensa putih)
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 90%; max-width: 70%" placeholder-src="statics/kacamata.jpg" src="statics/kacamata.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp.350000
                <div>
                  <q-btn rounded flat icon="check_circle_outline" label="Cek Out Barang" unelevated no-caps color="white"></q-btn>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-dark text-white">
            <q-card-section>
              <div class="text-h6">
                Tipe Kacamata :Dior Frame Bulat Hitam
                *(Lensa Photocromic)
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 90%; max-width: 70%" placeholder-src="statics/kacamata2.jpg" src="statics/kacamata2.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp.950000
                <div>
                  <q-btn rounded flat icon="check_circle_outline" label="Cek Out Barang" unelevated no-caps color="white"></q-btn>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Keranjang'
}
</script>

<style scoped>

</style>
