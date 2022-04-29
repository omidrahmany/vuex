<template>
  <div>
    <p>Counter is: {{ myDoubledCounter }}</p>
    <hr>
    <p>Number of clicks: {{ myStringCounter }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import * as types from "@/store/types"

export default {
  name: "appResult",
  computed: {
    ...mapGetters({
      myDoubledCounter: types.DOUBLE_COUNTER,
      myStringCounter: types.STRING_COUNTER
    }),
    ourOwn() {
      console.log("this is just for test.");
      return 'test to see if this method works!'
    }
  },
  data: () => {
    return { }
  }


}
</script>

<style scoped>

</style>
