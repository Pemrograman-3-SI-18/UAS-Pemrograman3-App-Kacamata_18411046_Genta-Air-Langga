<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-yellow-4 text-black">
              <div class="row">
                <q-card-section class="text-blue-grey-14">
                  <div class="text-h4">Registrasi Optic Genta</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    > <q-input
                        filled
                        v-model="form.userName"
                        label="Username *"
                        hint="Username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Username tidak boleh kosong']"
                      />

                     <q-input
                    filled
                    v-model="form.namaLengkap"
                    label="Namalengkap *"
                    hint="Namalengkap"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Namalengkap tidak boleh kosong']"
                  />

                      <q-input
                        filled
                        v-model="form.email"
                        label="Email*"
                        hint="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Email tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.noTelp"
                        label="No Telp*"
                        hint="No Telp"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'No Telp tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        type="form.password"
                        v-model="form.password"
                        label="password *"
                        hint="password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Password tidak boleh kosong']"
                      />
                      <div>
                        <q-btn label="Registrasi" type="submit" color="dark"/>
                        <q-btn label="Login" to="/auth/login" color="dark" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'registrasi',
  data () {
    return {
      form: {
        namaLengkap: null,
        userName: null,
        email: null,
        noTelp: null,
        password: null,
        accept: false
      },
      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/registrasi', {
        userName: this.form.userName,
        namaLengkap: this.form.namaLengkap,
        email: this.form.email,
        noTelp: this.form.noTelp,
        role: '2',
        password: this.form.password
      })
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
            this.$router.push('/auth/login')
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
