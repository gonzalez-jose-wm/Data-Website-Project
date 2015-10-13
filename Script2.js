/**
 * Created by session1 on 10/13/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Education', '2005-2008',],
        ['Collge graduate', 12],
        ['Some college', 22],
        ['High School', 33],
        ['Less than high school', 12],

    ]);

    var options = {
        title: 'Men',
        chartArea: {width: '50%'},
        hAxis: {
            title: ' Percent',
            minValue: 0
        },
        vAxis: {
            title: 'Obesity In School'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

    chart.draw(data, options);
}