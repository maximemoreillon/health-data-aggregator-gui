<template>
  <v-card class="mx-auto" max-width="40rem" :loading="loading">
    <v-card-title>
      Energy
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit()">
        <v-row>
          <v-col cols="auto" class="ma-5">
            <v-slider
            v-model="energy"
            vertical
            :tick-labels="tickLabels"
            :max="tickLabels.length -1" />
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn type="submit" :loading="submitting">Submit</v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-form>
      
    </v-card-text>

    <v-card-text>
      <EnergyChart :points="points"/>
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

import EnergyChart from '@/components/EnergyChart.vue'

export default {
  name: 'Energy',
  components: {
    EnergyChart
  },
  data(){
    return {
      route: '/measurements/energy',
      energy: 0,
      loading: false,
      submitting: false,
      points: [],

      tickLabels: [
        'Bedridden',
        'Inability to perform physical activities',
        'Low physical performance',
        'Average physical performance',
        'Above average physical performance',
        'Abundant energy'
      ],
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
      this.submitting = true
      try {
        const body = { energy: this.energyPercent }
        await this.axios.post(this.route, body)

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
        this.submitting = false
      }
      
    },
    async get_data() {
      this.loading = true
      try {
        const { data } = await this.axios.get(this.route)
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
    energyPercent(){
      return 100 * this.energy / (this.tickLabels.length -1)
    }
  }
}
</script>
