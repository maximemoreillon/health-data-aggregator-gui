<template>
  <v-card class="mx-auto" max-width="40rem">
    <v-card-title>
      Blood pressure
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit()">
        <v-row align="baseline">
          <v-col>
            <v-text-field v-model.number="bloodPressure" label="Blood pressure" />
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
  name: 'Energy',
  data(){
    return {
      bloodPressure: 0,
      loading: false,
    }
  },
  methods: {
    async submit(){
      this.loading = true
      try {
        const route = '/measurements/bloodpressure'
        const body = { bloodPressure: this.bloodPressure }
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
