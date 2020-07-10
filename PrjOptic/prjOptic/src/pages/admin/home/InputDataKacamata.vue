<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-yellow-2 q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Kaca mata</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            label="Kode Kaca Mata"
            lazy-rules
            color="teal"
            v-model="form.kodeKacamata"
            :rules="[
           val => val !== null && val !== '' || 'Kode Kaca Mata Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="poll"/>
            </template>
          </q-input>
          <q-input
            label="Merk Kaca Mata"
            lazy-rules
            color="teal"
            v-model="form.merkKacamata"
            :rules="[
           val => val !== null && val !== '' || 'Merk Kaca Mata Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="text_fields"/>
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
              <q-icon name="visibility"/>
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
              <q-icon name="adjust"/>
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
              <q-icon name="color_lens"/>
            </template>
          </q-input>
          <q-input
            label="Harga Kaca Mata"
            lazy-rules
            color="teal"
            v-model="form.hargaKacamata"
            :rules="[
           val => val !== null && val !== '' || 'Harga Kaca Mata Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="monetization_on"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
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
              type="submit"
              label="Tambah Ke Data Kaca Mata"
              style="height: 50px"
              color="dark"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        merkKacamata: null,
        kodeKacamata: null,
        typeLensa: null,
        jenisFrame: null,
        warnaFrame: null,
        hargaKacamata: null
      },
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
      formData.append('merkKacamata', this.form.merkKacamata)
      formData.append('kodeKacamata', this.form.kodeKacamata)
      formData.append('typeLensa', this.form.typeLensa)
      formData.append('jenisFrame', this.form.jenisFrame)
      formData.append('warnaFrame', this.form.warnaFrame)
      formData.append('hargaKacamata', this.form.hargaKacamata)
      this.$axios.post('/kacamata/input', formData)
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
    }
  }
}
</script>

<style scoped>

</style>
