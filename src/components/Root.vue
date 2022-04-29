<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>Vuex</h1>
            <app-result></app-result>
            <hr>
            <app-counter></app-counter>
            <v-card class="mt-3 px-2 py-3">
              <v-text-field v-model="dummyText"
                            label="two-binding in the vuex"></v-text-field>
              <p>result ==> {{ dummyText }}</p>
            </v-card>
            <v-card class="mt-3 px-2 py-3">
              <v-btn @click="logging('logging action is called.' )" dark color="green">
                show log
              </v-btn>
              |
              <v-btn @click="advancedLogging('advanced logging is called!')" color="red" dark>apply advanced logging
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppResult from "@/components/Result.vue";
import AppCounter from "@/components/Counter.vue";
import {mapMutations} from "vuex";
import * as types from "@/store/types"

export default {
  methods: {
    ...mapMutations({
      logging: types.LOGGING,
      advancedLogging: types.ADVANCED_LOGGING
    })
  },
  name: 'appRoot',
  components: {AppCounter, AppResult},
  computed: {
    dummyText: {
      get() {
        return this.$store.getters[types.GET_DUMMY_FIELDS];
      },
      set(value) {
        this.$store.commit(types.MUTATE_DUMMY_FIELDS, value)
      }
    },
  },
  data: () => ({}),
};
</script>
