<template>
  <div class="mt-3">
    <v-btn dark color="indigo"
           @click="asyncIncrement( {by:50, duration:1500} )"
    >Increment
    </v-btn>
    <v-btn class="ml-2" dark color="pink" @click="decrementCounterValue">Decrement</v-btn>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import * as types from '@/store/types'

export default {
  name: "appCounter",
  methods: {
    ...mapMutations({
      incrementCounterValue: types.INCREMENT_COUNTER_VALUE,
      decrementCounterValue: types.DECREMENT_COUNTER_VALUE
    }),
    ...mapActions({
      asyncIncrement: types.ASYNC_INCREMENT
    })
  }

}
</script>

<style scoped>

</style>
