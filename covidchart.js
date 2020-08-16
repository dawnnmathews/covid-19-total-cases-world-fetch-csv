import * as CSVData from './script.js';

const xlabels = [];
const yCovidCases = [];

async function plotTheChart(){
    await CSVData.getData();
    const ctx = document.getElementById('covidchart').getContext('2d');
    const covidChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Covid 19 Cases in the World',
            data: yCovidCases,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }
});
}


export { xlabels, yCovidCases, plotTheChart };