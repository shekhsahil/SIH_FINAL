
const firebaseConfig = {
  apiKey: "AIzaSyAG9_-Ca9R9wBuoZy0mgKd4i4Ev_d1K69c",
  authDomain: "http://soilsense-bc90c.firebaseapp.com",
  databaseURL:
    "https://soilsense-bc90c-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "soilsense-bc90c",
  storageBucket: "http://soilsense-bc90c.appspot.com",
  messagingSenderId: "991801646349",
  appId: "1:991801646349:web:22a03d1cdb26831859e444",
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
var database = app.database();

function show() {
  //for system_1
  var system_1_flow_sensor = document.getElementById("s1fs");
  var system_1_soil_sensor_1 = document.getElementById("s1ss1");
  var system_1_soil_sensor_2 = document.getElementById("s1ss2");
  var system_1_valve_state = document.getElementById("vs1");

  //for system_2
  var system_2_flow_sensor = document.getElementById("s2fs");
  var system_2_soil_sensor_1 = document.getElementById("s2ss1");
  var system_2_soil_sensor_2 = document.getElementById("s2ss2");
  var system_2_valve_state = document.getElementById("vs2");
}



function get_data_from_firebase()
{
    var system_1=database.ref('System 1/'+Flow_sensor);

    system_1.on('value',function(snapshot){
        var data =snapshot.val();
        console.log(data);
    })
}
