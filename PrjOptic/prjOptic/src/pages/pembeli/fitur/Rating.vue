<template>
  <div class="q-pa-md">
    <span class="text-weight-bold">Berikan Rating Untuk Optic Genta</span>
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="orange"
        icon="star_border"
        icon-selected="star_border"
      />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      ratingModel: 1
    }
  }
}

</script>

<style scoped>

</style>
