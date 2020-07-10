<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        color="primary"
        card-class="bg-amber-4 text-dark"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="dark" :disable="loading" label="Tambah Data Kaca Mata" to="/admin/inputdatakacamata" />

          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodeKacamata" :props="props">
              {{ props.row.kodeKacamata }}
            </q-td>
            <q-td key="merkKacamata" :props="props">{{ props.row.merkKacamata }}</q-td>
            <q-td key="typeLensa" :props="props">{{ props.row.typeLensa }}</q-td>
            <q-td key="jenisFrame" :props="props">{{ props.row.jenisFrame }}</q-td>
            <q-td key="warnaFrame" :props="props">{{ props.row.warnaFrame }}</q-td>
            <q-td key="hargaKacamata" :props="props">{{ props.row.hargaKacamata }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 40px; height: 40px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodeKacamata)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataKacamata(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:5050/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodeKacamata',
          required: true,
          label: 'Kode Kaca Mata',
          align: 'left',
          field: row => row.kodeKacamata,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'merkKacamata', align: 'center', label: 'Merk  Kaca Mata', field: 'merkKacamata', sortable: true },
        { name: 'typeLensa', align: 'center', label: 'Type Lensa', field: 'typeLensa', sortable: true },
        { name: 'jenisFrame', label: 'Jenis Frame', align: 'center', field: 'jenisFrame' },
        { name: 'warnaFrame', label: 'Warna Frame', align: 'center', field: 'warnaFrame' },
        { name: 'hargaKacamata', label: 'Harga Kaca Mata', align: 'center', field: 'hargakacamata' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataKacamata () {
      this.$axios.get('/kacamata/datakacamata')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataKacamata (id) {
      this.$axios.delete('/kacamata/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataKacamata()
        })
    },
    edit (kodeKacamata) {
      this.$router.push('/editdatakacamata/' + kodeKacamata)
    }
  },
  mounted () {
    this.getDataKacamata()
  }
}
</script>
