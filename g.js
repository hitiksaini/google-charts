google.load('visualization', '1.1', {packages: ['geochart']});
// google.charts.load('current', {
//        'packages':['geochart'],
//        // Note: you will need to get a mapsApiKey for your project.
//        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//        'mapsApiKey': 'AIzaSyCA1XePBKtK-84bTLQRdKfGQfFEvzbBbsk'
//      });
// function drawMarkersMap() {
//  var data = google.visualization.arrayToDataTable([
//    ['City',  'Population', 'Area'],
//    ['Los Angeles',     2761477,    1285.31]
//  ]);

 function drawVisualization() {
   var data = new google.visualization.DataTable();
   // var data = google.visualization.arrayToDataTable([
     //   ['State Code', 'State', 'Population'],
     //   ['IN-UT', 'Uttarakhand', 10116752],
     //   //rest of states
     // ]);


   data.addColumn('string', 'Country');
   data.addColumn('number', 'Popularity');
   data.addRow(["US-CA", 10000]);

   var options = {
     // domain: "IN-UT"
        width: 1000,
        height: 500,
           region: 'US', // India
           // displayMode: 'markers', //If you want to highlight some cities
           resolution: 'metros', //If you want to display provinces in India
           colorAxis: {colors: ['blue']} //If you want specific color for your markers (cities)
         };

   var geochart = new google.visualization.GeoChart(
       document.getElementById('visualization'));
   geochart.draw(data, options);
 }


google.setOnLoadCallback(drawVisualization);





// var data = new google.visualization.DataTable();
// 		data.addColumn('string',  'State', 'State');
//         data.addColumn('number', 'Area Percentage', 'Area Percentage');
// 		data.addColumn({type:'string', role:'tooltip', 'p': {'html': true}});
// 		data.addRows([
// 			['Maharashtra',  11, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 			['Kerala',  1, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 			['Punjab', 10, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 			['Rajasthan',  10, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 			['Uttar Pradesh',  7, 'Balance: 1342720534.59997, fffff: 1342720544.59997']
// 		]);
//
// 		var val = [0, 5, 10, 20, 30, 50];
//
// 		var options = {
// 			tooltip: {isHtml: true},
// 			backgroundColor: '#81d4fa',
// 			region: 'IN',
// 			domain: 'IN',
// 			displayMode: 'markers', //auto is zonecolor
// 			datalessRegionColor: '#a6a6a6',
// 			colorAxis: {colors: ['red', 'yellow', 'violet', 'pink', 'blue', 'green'], values: val1}
// 		};
//
// 		var chart = new google.visualization.GeoChart(document.getElementById('mapDiv'));
// 		chart.draw(data, options);
//
// 		google.visualization.events.addListener(chart4, 'regionClick', function(eventData) {
// 			var selectedItem = eventData.region;
//
// 			if (selectedItem) {
// 				var data = new google.visualization.DataTable();
// 				data.addColumn('string',  'City', 'City');
// 				data.addColumn('number', 'perc', 'perc');
// 				data.addColumn({type:'string', role:'tooltip', 'p': {'html': true}});
// 				data.addRows([
// 					['Amravati',  11, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 					['Aurangabad',  1, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 					['Jalna', 10, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 					['Kolhapur',  10, 'Balance: 1342720534.59997, fffff: 1342720544.59997'],
// 					['Nagpur',  7, 'Balance: 1342720534.59997, fffff: 1342720544.59997']
// 				]);
//
// 				var val = [0, 3, 10, 25, 35, 55];
//
// 				options['region'] = selectedItem;
// 				options['resolution'] = 'metros';
// 				options['displayMode'] = 'markers';
// 				options['colorAxis'] = {colors: ['red', 'yellow', 'violet', 'pink', 'blue', 'green'], values: val};
//
// 				chart.draw(data, options);
// 			}
// 		});
