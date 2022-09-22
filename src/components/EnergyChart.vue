<template>
    
    <apexchart type="line" :options="options" :series="series"></apexchart>

</template>

<script>

export default {
    name: 'EnergyChart',
    props: {
        points: Array,
    },
    data() {
        return {
            options: {
                chart: {

                },
                title: {
                    text: 'Energy'
                },
                xaxis: {
                    type: 'datetime',
                    title: {
                        text: 'Time'
                    }
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    title: {
                        text: 'Level [%]'
                    }
                },
                
            },
        }
    },

    methods: {
        
        mapData(points) {
            return points.map(({ _time, _value }) => ({
                x: new Date(_time).getTime(),
                y: _value,
            }))
        }
    },
    computed: {
        series() {
            return [
                { name: 'Energy', data: this.mapData(this.points) },
            ]
        }
    }
}
</script>
