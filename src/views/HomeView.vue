<template>
  <v-card max-width="50rem" class="mx-auto">
    <v-card-title>
      Health data aggregator
    </v-card-title>
    <v-card-text>
      <v-list dense nav>
        <v-list-item v-for="(item, index) in nav" :key="`nav_item_${index}`" :to="item.to" exact>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
      
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>

  export default {
    name: 'HomeView',
    components: {
    },
    data(){
      return {
        nav: [
          { title: 'Energy', to: { name: 'energy' }, icon: 'mdi-weight-lifter' },
          { title: 'Blood sugar levels', to: { name: 'bloodSugar' }, icon: 'mdi-diabetes' },
          { title: 'Blood pressure', to: { name: 'bloodPressure' }, icon: 'mdi-water' },
          { title: 'About', to: { name: 'about' }, icon: 'mdi-information-outline' },
        ]
      }
    }
  }
</script>
