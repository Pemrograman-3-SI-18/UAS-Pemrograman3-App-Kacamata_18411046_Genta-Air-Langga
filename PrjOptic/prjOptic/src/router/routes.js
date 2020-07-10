
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [{ path: '', component: () => import('pages/admin/home/DataKacaMata.vue') },
      { path: 'inputdatakacamata', component: () => import('pages/admin/home/InputDataKacaMata.vue') },
      { path: '/editdatakacamata/:id', component: () => import('pages/admin/home/EditDataKacamata.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') },
      { path: 'datatransaksimember', component: () => import('pages/admin/transaksi/DataTransaksiMember.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      auth: true
    },
    children: [{ path: '', component: () => import('pages/pembeli/DataKacaMata/DataKacaMata.vue') },
      { path: 'keranjang', component: () => import('pages/pembeli/fitur/Keranjang.vue') },
      { path: 'datatransaksi', component: () => import('pages/pembeli/transaksi/DataTransaksi.vue') },
      { path: 'panduan', component: () => import('pages/pembeli/fitur/Panduan.vue') },
      { path: 'rating', component: () => import('pages/pembeli/fitur/Rating.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [{ path: '/auth/login', component: () => import('pages/users/member/login.vue') },
      { path: '/registrasi', component: () => import('pages/users/member/registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
