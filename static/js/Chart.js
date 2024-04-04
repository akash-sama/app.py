<script>
document.getElementById('analyzeBtn').addEventListener('click', function() {
    // Assuming you have item.Class and item.Percentage variables available
    // You might need to adjust this part based on how you're passing data from Flask to JS
    var data = {
        datasets: [{
            data: [item.Percentage, 100 - item.Percentage], // Assuming item.Percentage is the portion you want to display
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
        }],
        labels: [
            item.Class,
            'Others'
        ]
    };

    var ctx = document.getElementById('pieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Show the chart container
    document.getElementById('chartContainer').style.display = 'block';
});
</script>
