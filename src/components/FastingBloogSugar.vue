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
                    min: 3,
                    max: 8,
                    title: {
                        text: 'Level [mmol/L]'
                    }
                },
                annotations: {
                    yaxis: [
                        {
                            y: 5.6,
                            borderColor: 'orange',
                            label: {
                                borderColor: 'orange',
                                style: {
                                    color: '#fff',
                                    background: 'orange'
                                },
                                text: 'Prediabetes'
                            }
                        },
                        {
                            y: 7,
                            borderColor: 'red',
                            label: {
                                borderColor: 'red',
                                style: {
                                    color: '#fff',
                                    background: 'red'
                                },
                                text: 'Diabetes'
                            }
                        },

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
