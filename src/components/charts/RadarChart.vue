<script>
    import {Radar} from "vue-chartjs";

    export default {
        name: "RadarChart",
        extends: Radar,
        mounted() {
            this.renderChart(
                {
                    labels: [
                        "Eating",
                        "Drinking",
                        "Sleeping",
                        "Designing",
                        "Coding",
                        "Cycling",
                        "Running"
                    ],
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "rgba(0, 216, 255, 0.2)",
                            borderColor: "rgba(0, 216, 255, 1)",
                            pointBackgroundColor: "rgba(0, 216, 255, 1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(0, 216, 255, 1)",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "rgba(255,99,132,0.2)",
                            borderColor: "rgba(255,99,132,1)",
                            pointBackgroundColor: "rgba(255,99,132,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(255,99,132,1)",
                            data: [28, 48, 40, 19, 96, 70, 90]
                        }
                    ]
                },
                {responsive: true, maintainAspectRatio: false}
            );
        }
    };
</script>

<style scoped>

</style>