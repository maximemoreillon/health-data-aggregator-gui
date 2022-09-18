<template>
    <div>
        <apexchart type="line" :options="systolicOptions" :series="systolicSeries"></apexchart>
        <apexchart type="line" :options="diastolicOptions" :series="diastolicSeries"></apexchart>

    </div>


</template>

<script>

export default {
    name: 'BloodPressureChart',
    props: {
        points: Array,
    },
    data() {
        return {
            baseOptions: {
                
                xaxis: {
                    type: 'datetime',
                    title: {
                        text: 'Time'
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
        systolicOptions() {
            return {
                ...this.baseOptions,
                chart: {
                    id: 'systolic',
                    group: 'bloodPressure',
                },
                title: {
                    text: 'Systolic'
                },
                yaxis: {
                    min: 80,
                    max: 170,
                    title: {
                        text: 'mmHg'
                    }
                },
                annotations: {
                    yaxis: [

                        {
                            y: 0,
                            y2: 90,
                            borderColor: '#C00000',
                            fillColor: '#C0000044',

                        },
                        {
                            y: 90,
                            borderColor: '#c00000',
                            label: {
                                borderColor: '#c00000',
                                style: {
                                    color: '#fff',
                                    background: '#c00000'
                                },
                                text: 'Hypotension',
                            }
                        },
                        {
                            y: 140,
                            borderColor: '#c00000',
                            label: {
                                borderColor: '#c00000',
                                style: {
                                    color: '#fff',
                                    background: '#c00000'
                                },
                                text: 'Hypertension',
                            }
                        },
                        {
                            y: 140,
                            y2: 1000,
                            borderColor: '#C00000',
                            fillColor: '#C0000044',

                        },
  




                    ]
                }
            }

        },
        diastolicOptions() {
            return {
                ...this.baseOptions,
                chart: {
                    id: 'diastolic',
                    group: 'bloodPressure',
                },
                title: {
                    text: 'Diastolic'
                },
                yaxis: {
                    min: 20,
                    max: 140,
                    title: {
                        text: 'mmHg'
                    }
                },
                annotations: {
                    yaxis: [
                        {
                            y: 0,
                            y2: 60,
                            borderColor: '#C00000',
                            fillColor: '#C0000044',

                        },
                        {
                            y: 60,
                            borderColor: '#c00000',
                            label: {
                                borderColor: '#c00000',
                                style: {
                                    color: '#fff',
                                    background: '#c00000'
                                },
                                text: 'Hypotension',
                            }
                        },
                        {
                            y: 90,
                            borderColor: '#c00000',
                            label: {
                                borderColor: '#c00000',
                                style: {
                                    color: '#fff',
                                    background: '#c00000'
                                },
                                text: 'Hypertension',
                            }
                        },
                        {
                            y: 90,
                            y2: 1000,
                            borderColor: '#C00000',
                            fillColor: '#C0000044',

                        },
                        




                    ]
                }

            }

        },
        systolicSeries() {
            const systolicPoints = this.points.filter(p => p._field === 'systolic')
            return [
                { name: 'Systolic', data: this.mapData(systolicPoints) },
            ]
        },
        diastolicSeries() {
            const diastolicPoints = this.points.filter(p => p._field === 'diastolic')
            return [
                { name: 'Diastolic', data: this.mapData(diastolicPoints) },
            ]
        }
    }
}
</script>
