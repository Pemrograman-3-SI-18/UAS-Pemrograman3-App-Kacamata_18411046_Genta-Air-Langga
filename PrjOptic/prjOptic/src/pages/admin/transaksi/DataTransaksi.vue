<template>
  <q-page>
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
          <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-dark">Data Transaksi Optic Genta</span>
      </span>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
        { name: 'merkkacamata', align: 'center', label: 'Merk Kaca Mata', field: 'merkkacamata', sortable: true },
        { name: 'hargakacamata', label: 'Harga Kaca Mata', align: 'center', field: 'hargakacamata' },
        { name: 'jumlahbeli', label: 'Jumlah Beli', align: 'center', field: 'jumlahbeli' },
        { name: 'total', label: 'Total', align: 'center', field: 'total' }
      ],
      data: [
        {
          id: 1,
          kodetransaksi: 'GAL001',
          namapembeli: 'Gilang Air Langga',
          merkkacamata: 'Dior',
          hargakacamata: '350000',
          jumlahbeli: 1,
          total: '350000'
        },
        {
          id: 2,
          kodetransaksi: 'GAL002',
          namapembeli: 'Ara',
          merkkacamata: 'Dior',
          hargakacamata: '950000',
          jumlahbeli: 1,
          total: '950000'
        },
        {
          id: 3,
          kodetransaksi: 'GAL003',
          namapembeli: 'Syahira',
          merkkacamata: 'Dior',
          hargakacamata: '850000',
          jumlahbeli: 1,
          total: '850000'
        }
      ]

    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
