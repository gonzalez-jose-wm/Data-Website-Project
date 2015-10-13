google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Education', '2005-2008',],
        ['Collge graduate', 23.4],
        ['Some college', 38.4],
        ['High School', 39.8],
        ['Less than high school', 42.1],

    ]);

    var options = {
        title: 'Women',
        chartArea: {width: '50%'},
        hAxis: {
            title: ' Percent',
            minValue: 0
        },
        vAxis: {
            title: 'Obesity In School'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
alert("Welcome!")