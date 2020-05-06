// The very first step- Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);  //and then make a fn of same name +pass data to it

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it, and this fn can be customised by us
      function drawChart() {

        // Create the data table.   here we give 'data'(the one is to be plotted)
        var data = new google.visualization.DataTable();

// A DataTable is a two-dimensional table with rows and columns, where each column has a datatype, an optional ID, and an optional label.
       data.addColumn('string', 'Element');
       data.addColumn('number', 'Percentage');

       //here we added two col in our chart data and spcified that element corresponds to a "STRING" whereas Percentage a "NUMBER"/int

       //now once a col is made we add data to those col. and put it in rows in the order- ['element'(col:1),'Percentage'(col:2)],
       data.addRows([
         ['Nitrogen', 0.78],
         ['Oxygen', 0.21],
         ['Other', 0.01]
       ]);

        // Set chart options   //this is optional basically it is for styling of the chart but whenever we use it we pass it along with data variable
        var options = {'title':'Congratulations you just made your first Google Chart ! 🤞 Want the chart to load data from a spreadsheet? contact@hitik9045saini@gmail.com',
                       'width':800,
                       'height':600};

        // draw our chart, passing in some options(customised)
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));    //getElementsById is a JS fn which triggers a spcefic HTML element
        //with a ID of "anything_you_name"   //the same id should be passed into a element with id attribute set to it.
        chart.draw(data, options);   //this draws the chart
        //if you are customising the chart write:   chart.draw(data, null);
      }
//NOTE: THERE IS A DIFF PROCESS IF YOU WANT MULTIPLE CHARTS TO BE DRAWN.
//CONTACT IF YOU NEED HELP 👍
