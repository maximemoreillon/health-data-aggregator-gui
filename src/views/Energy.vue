<template>
  <v-card class="mx-auto" max-width="40rem">
    <v-card-title>
      Energy
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit()">
        <v-row align="baseline">
          <v-col>
            <v-text-field v-model.number="energy" label="Energy" />
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
      energy: 0,
      loading: false,
    }
  },
  methods: {
    async submit(){
      this.loading = true
      try {
        const route = '/measurements/energy'
        const body = { energy: this.energy }
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
