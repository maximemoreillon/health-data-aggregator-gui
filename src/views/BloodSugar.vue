<template>
  <v-card class="mx-auto" max-width="40rem">
    <v-card-title>
      Blood sugar level
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit()">
        <v-row align="baseline">
          <v-col>
            <v-text-field v-model.number="bloodSugarLevel" label="Blood sugar level" suffix="UNIT" />
          </v-col>
          <v-col cols="auto">
            <v-btn type="submit" :loading="loading">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
      
      
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'BloodSugar',
  data(){
    return {
      bloodSugarLevel: 0,
      loading: false,
    }
  },
  methods: {
    async submit(){
      this.loading = true
      try {
        const route = '/measurements/bloodsugar'
        const body = { bloodSugarLevel: this.bloodSugarLevel }
        await this.axios.post(route, body)
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
      
    }
  }
}
</script>
