/*var d = '1436029892';
const time =[];
time[1] = d;

fetch('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps='+time[1]+'&units=miles')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {

    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].id + ' Latitude:' + data[i].latitude + ' Longtitude:' + data[i].longitude;
      mainContainer.appendChild(div);
    }
  }*/