 google.charts.load('current', {
        'packages':['geochart', 'controls'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyCA1XePBKtK-84bTLQRdKfGQfFEvzbBbsk'
      });
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
  var opts = {sendMethod: 'auto'};
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1ZvpV0uLsxMz1isybvbscuaXV9Jq6ADitRw10niyTHz0/edit#gid=1857810258', opts);
  query.setQuery('select B, sum(C) group by B');
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }


  var data = response.getDataTable();
  var options = {
          region: 'IN', // Africa
          resolution: 'provinces',
          zoom: 3,
          colorAxis: {colors: ['#c1e7ff', '#7aa6c2', '#004c6d']},
          backgroundColor: '#FFFFFF',
          datalessRegionColor: '#FFFAFA',
          defaultColor: '#FFFFFF',
          width: 640,
          height: 480,
          forceIFrame:true
        };
  options['dataMode'] = 'regions';
  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data,options);
}
