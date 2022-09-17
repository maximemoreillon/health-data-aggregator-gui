<template>
  <v-card class="mx-auto" max-width="40rem">
    <v-card-title>
      Blood sugar level
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submit()">
        
      </v-form>
      <v-row align="baseline">
        <v-col>
          <v-text-field v-model.number="bloodSugarlevel" label="Blood sugar level" suffix="UNIT" />
        </v-col>
        <v-col cols="auto">
          <v-btn>Submit</v-btn>
        </v-col>
      </v-row>
      
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'BloodSugar',
  data(){
    return {
      bloodSugarlevel: 0
    }
  }
}
</script>
