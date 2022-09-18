<template>
    
    <apexchart type="line" :options="options" :series="series"></apexchart>

</template>

<script>

export default {
    name: 'FastingBloodSugar',
    props: {
        points: Array,
    },
    data() {
        return {
            options: {
                chart: {

                },
                title: {
                    text: 'Fasting blood sugar levels'
                },
                xaxis: {
                    type: 'datetime',
                    title: {
                        text: 'Time'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Level [mmol/L]'
                    }
                },
                annotations: {
                    yaxis: [
                        {
                            y: 5.6,
                            borderColor: '#c00000',
                            label: {
                                borderColor: '#c00000',
                                style: {
                                    color: '#fff',
                                    background: '#c00000'
                                },
                                text: 'Prediabetes'
                            }
                        }
                    ]
                }
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
                { name: 'Fasting', data: this.mapData(this.points) },
            ]
        }
    }
}
</script>
