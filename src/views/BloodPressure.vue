<template>
  <v-card class="mx-auto" max-width="40rem">
    <v-card-title>
      Blood pressure
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit()">
        <v-row align="baseline">
          <v-col>
            <v-text-field v-model.number="systolic" label="Systolic" suffix="mmHg"/>
          </v-col>
          <v-col cols="auto">/</v-col>

          <v-col>
            <v-text-field v-model.number="diastolic" label="Diastolic" suffix="mmHg"/>
          </v-col>
          <v-col cols="auto">
            <v-btn type="submit" :loading="loading" :disabled="!valid">Register</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>

    <v-card-text>
      <BloodPressureChart :points="points"/>
      </v-card-text>
  
      <v-snackbar :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text dark v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import BloodPressureChart from '@/components/BloodPressureChart.vue'
export default {
  name: 'Energy',
  components: {
    BloodPressureChart
  },
  data(){
    return {
      systolic: 0,
      diastolic: 0,
      loading: false,
      points: [],
      snackbar: {
        show: false,
        text: null,
        color: 'green',
      },
    }
  },
  mounted(){
    this.get_data()
  },
  methods: {
    async submit(){
      this.loading = true
      try {
        const route = '/measurements/bloodpressure'
        const body = { systolic: this.systolic, diastolic: this.diastolic }
        await this.axios.post(route, body)
        this.snackbar.text = 'Measurement registered'
        this.snackbar.color = 'green'
        this.snackbar.show = true
        this.get_data()
      } catch (error) {
        console.error(error)
        this.snackbar.text = 'Registration failed'
        this.snackbar.color = 'red'
        this.snackbar.show = true
      }
      finally {
        this.loading = false
      }
      
    },
    async get_data() {
      this.loading = true
      try {
        const route = '/measurements/bloodpressure'
        const { data } = await this.axios.get(route)
        this.points = data
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
  },
  computed: {
    valid(){
      return this.systolic && this.diastolic
    }
  }
}
</script>
