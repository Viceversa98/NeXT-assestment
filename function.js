

function myFunction() 
{  
  document.getElementById("demo").innerHTML = String(document.getElementById("isstime").value);
  var myDate = String(document.getElementById("isstime").value);
  let d = document.getElementById("isstime").value;
  document.getElementById("demo").innerHTML = (d * 1);

      }  

      function toTimestamp(){
        strDate = String(document.getElementById("isstime").value);
        var datum = Date.parse(strDate);
        var d = datum/1000;
        document.getElementById("demo").innerHTML = d;
        const time = [];
        time[6] = d ;
        for (let j = 0; j < 6; j++) {
          time[j] = (d-600);
        }
        for (let j = 0; j < 6; j++) {
          time[j+7] = (d+600);
        }
        for(var i = 0; i<time.length;i++){

        fetch('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps='+time[i]+'&units=miles')
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        appendData(data);
        })
        .catch(function (err) {
        console.log(err);
        div.innerHTML ='Sorry the time is not recorded';
        });
        }
     }

     

      function appendData(data) {
       var count = 0;
      var mainContainer = document.getElementById("myData2");
      for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML =count+'. '+'Name: ' + data[i].name + ' ' + data[i].id + ' Latitude:' + data[i].latitude + ' Longtitude:' + data[i].longitude;
        mainContainer.appendChild(div);
       count+= 1;
      }
    }
    
  
