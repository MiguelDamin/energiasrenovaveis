document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive elements animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.info, .chart, section').forEach((el) => observer.observe(el));

    // Energy calculator
    const calculator = document.querySelector('.calculator');
    if (calculator) {
        calculator.addEventListener('submit', (e) => {
            e.preventDefault();
            const consumption = parseFloat(document.querySelector('#consumption').value);
            const solarSavings = (consumption * 0.85).toFixed(2);
            const windSavings = (consumption * 0.75).toFixed(2);
            
            document.querySelector('#results').innerHTML = `
                <div class="savings-result">
                    <h3>Economia Estimada Mensal:</h3>
                    <p>Energia Solar: R$ ${solarSavings}</p>
                    <p>Energia Eólica: R$ ${windSavings}</p>
                </div>
            `;
        });
    }
});