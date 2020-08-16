import * as Ccharts from './covidchart.js';

Ccharts.plotTheChart();

async function getData() {
    const response = await fetch('total_cases.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    // const rows = data.split(/\n/);

    table.forEach(row => {
        const columns = row.split(',');
        const date = columns[0];
        Ccharts.xlabels.push(date);
        const covidcases = columns[1];
        Ccharts.yCovidCases.push(parseFloat(covidcases));
        console.log(date, covidcases);
    });
}

export { getData }