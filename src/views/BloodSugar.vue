<template>
  <v-card class="mx-auto" max-width="40rem">
    <v-toolbar flat>
      <v-row>
        <v-col>
          <v-toolbar-title>
            Blood sugar levels
          </v-toolbar-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-btn text color="#c00000" @click="delete_measurement()">
                  <v-icon>mdi-delete</v-icon>
                  <span>Delete all data</span>
                </v-btn>
              </v-list-item>
            </v-list>
            
          </v-menu>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="submit()">
        <v-row align="baseline">
          <v-col>
            <v-text-field v-model.number="bloodSugarLevel" label="Blood sugar level" suffix="mmol/L" />
          </v-col>
          <v-col cols="auto">
            <v-select
              :items="states"
              v-model="state"
              label="State"/>
          </v-col>
          <v-col cols="auto">
            <v-btn type="submit" :disabled="!valid" :loading="submitting">Register</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>

    <v-card-text>
      <FastingBloogSugar :points="fastingPoints" />
    </v-card-text>
    <v-card-text>
      <FedBloogSugar :points="fedPoints" />
    </v-card-text>
  </v-card>
</template>

<script>

import FastingBloogSugar from '@/components/FastingBloogSugar.vue'
import FedBloogSugar from '@/components/FedBloogSugar.vue'

export default {
  name: 'BloodSugar',
  components: {
    FastingBloogSugar,
    FedBloogSugar
  },
  data(){
    return {
      bloodSugarLevel: 0,
      submitting: false,
      fasted: false,
      points: [],
      state: null,
      states: ['fasting', 'fed', 'random']
      
    }
  },
  mounted(){
    this.get_data()
  },
  methods: {
    async submit(){
      this.submitting = true
      try {
        const route = '/measurements/bloodsugar'
        const body = { bloodSugarLevel: this.bloodSugarLevel }

        // Tag usage not fully decided yet
        const params = { tags: `state:${this.state}`}

        await this.axios.post(route, body, { params })
        this.get_data()
      } catch (error) {
        console.error(error)
      }
      finally {
        this.submitting = false
      }
    },
    async get_data() {
      this.loading = true
      try {
        const route = '/measurements/bloodsugar'
        const {data} = await this.axios.get(route)
        this.points = data
      } catch (error) {
        console.error(error)
      }
      finally {
        this.loading = false
      }
    },
    async delete_measurement(){
      if(!confirm('Delete all data?')) return
      try {
        const route = '/measurements/bloodsugar'
        await this.axios.delete(route)
        this.get_data()
      } catch (error) {
        console.error(error)
      }

    },

  },
  computed: {
    fastingPoints(){
      return this.points.filter(p => p.state === 'fasting')
    },
    fedPoints(){
      return this.points.filter(p => p.state === 'fed')
    },
    valid() {
      return !!this.state
    }
  }
}
</script>
