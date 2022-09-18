<template>
    
    <apexchart type="line" :options="options" :series="series"></apexchart>

</template>

<script>

export default {
    name: 'FedBloodSugar',
    props: {
        points: Array,
    },
    data() {
        return {
            options: {
                chart: {

                },
                title: {
                    text: 'Fed blood sugar levels'
                },
                xaxis: {
                    type: 'datetime',
                    title: {
                        text: 'Time'
                    }
                },
                yaxis: {
                    min: 3,
                    max: 15,
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
                            y: 7.8,
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
                            y: 7.8,
                            y2: 11,
                            borderColor: '#c0c000',
                            fillColor: '#c0c00022',
                        },
                        {
                            y: 11,
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
                            y: 11,
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
                { name: 'Fed', data: this.mapData(this.points) },
            ]
        }
    }
}
</script>
