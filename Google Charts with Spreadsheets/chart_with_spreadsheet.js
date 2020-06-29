google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initialize);
function initialize() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1uC3r4GBb4lXdOGnycUoPRvZtxdFH0im2vuWItQ68oOQ/edit#gid=0', opts);
  query.setQuery('select B, sum(C), sum(D) group by B');
  query.send(handleQueryResponse);
}
function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, { height: 750 });
}
