<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Kaca Mata</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Kacamata"
            lazy-rules
            color="teal"
            v-model="form.kodeKacamata"
            :rules="[
           val => val !== null && val !== '' || 'Kode Kacamata Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Merk Kacamata"
            lazy-rules
            color="teal"
            v-model="form.merkKacamata"
            :rules="[
           val => val !== null && val !== '' || 'Merk Kacamata Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Type Lensa"
            lazy-rules
            color="teal"
            v-model="form.typeLensa"
            :rules="[
           val => val !== null && val !== '' || 'Type Lensa Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="Jenis Frame"
            lazy-rules
            color="teal"
            v-model="form.jenisFrame"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Frame Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Warna Frame"
            lazy-rules
            color="teal"
            v-model="form.warnaFrame"
            :rules="[
           val => val !== null && val !== '' || 'Warna Frame Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-input
            label="Harga Kacamata"
            lazy-rules
            color="teal"
            v-model="form.hargaKacamata"
            :rules="[
           val => val !== null && val !== '' || 'Harga Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gangtiGambar" label="Ganti Gambar ?" />
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            v-if="gangtiGambar == true"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Ubah Data Kacamata"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'EditDataKacamata',
  data () {
    return {
      gangtiGambar: false,
      baseUrl: 'http://localhost:5050/gambar/',
      form: {
        merkKacamata: null,
        kodeKacamata: null,
        typeLensa: null,
        jenisFrame: null,
        warnaFrame: null,
        hargaKacamata: null
      },
      id: null,
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('kodeKacamata', this.form.kodeKacamata)
      formData.append('merkKacamata', this.form.merkKacamata)
      formData.append('typeLensa', this.form.typeLensa)
      formData.append('jenisFrame', this.form.jenisFrame)
      formData.append('warnaFrame', this.form.warnaFrame)
      formData.append('hargaKacamata', this.form.hargaKacamata)
      this.$axios.put('/kacamata/ubah/' + this.id, formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/admin')
          }
        })
    },
    getDataKacamataById () {
      this.$axios.get('/kacamata/datakacamata/' + this.$route.params.id)
        .then((res) => {
          this.data = res.data.data
          this.form.kodeKacamata = this.data.kodeKacamata
          this.form.merkKacamata = this.data.merkKacamata
          this.form.typeLensa = this.data.typeLensa
          this.form.jenisFrame = this.data.jenisFrame
          this.form.warnaFrame = this.data.warnaFrame
          this.form.hargaKacamata = this.data.hargaKacamata
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataKacamataById()
  }
}
</script>

<style scoped>

</style>
