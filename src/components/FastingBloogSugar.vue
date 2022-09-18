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
                            y: 0,
                            y2: 4,
                            borderColor: '#C00000',
                            fillColor: '#C0000022',
                            label: {
                                borderColor: '#C00000',
                                style: {
                                    color: '#fff',
                                    background: '#C00000'
                                },
                                text: 'Hypoglycemia'
                            }
                        },
                        {
                            y: 5.6,
                            borderColor: '#c0c000',
                            label: {
                                borderColor: '#c0c000',
                                style: {
                                    color: '#fff',
                                    background: '#c0c000'
                                },
                                text: 'Prediabetes',
                                // textAnchor: 'start'
                            }
                        },
                        {
                            y: 5.6,
                            y2: 7,
                            borderColor: '#c0c000',
                            fillColor: '#c0c00022',
                        },
                        {
                            y: 7,
                            borderColor: 'C00000',
                            label: {
                                borderColor: '#C00000',
                                style: {
                                    color: '#fff',
                                    background: '#C00000'
                                },
                                text: 'Diabetes',
                            }
                        },
                        {
                            y: 7,
                            y2: 1000,
                            borderColor: '#C00000',
                            fillColor: '#C0000044',

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
