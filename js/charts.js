document.addEventListener('DOMContentLoaded', () => {
    // Efficiency comparison chart
    const efficiencyCtx = document.getElementById('efficiencyChart');
    if (efficiencyCtx) {
        new Chart(efficiencyCtx, {
            type: 'bar',
            data: {
                labels: ['Energia Solar', 'Energia Eólica'],
                datasets: [{
                    label: 'Eficiência Média (%)',
                    data: [20, 45],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(54, 162, 235, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // Cost comparison chart
    const costCtx = document.getElementById('costChart');
    if (costCtx) {
        new Chart(costCtx, {
            type: 'line',
            data: {
                labels: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'],
                datasets: [{
                    label: 'Retorno Solar',
                    data: [0, 25, 50, 75, 100],
                    borderColor: 'rgba(255, 159, 64, 1)',
                    fill: false
                }, {
                    label: 'Retorno Eólico',
                    data: [0, 20, 45, 70, 90],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    fill: false
                }]
            },
            options: {
                responsive: true
            }
        });
    }
});