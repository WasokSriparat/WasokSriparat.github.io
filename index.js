import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
          const firebaseConfig = {
               apiKey: "AIzaSyCb2ttZFA7GxBg7CCIGIQKFKWl6fsECr5w",
               authDomain: "miniprojectlog-fa43c.firebaseapp.com",
               databaseURL: "https://miniprojectlog-fa43c-default-rtdb.asia-southeast1.firebasedatabase.app",
               projectId: "miniprojectlog-fa43c",
               storageBucket: "miniprojectlog-fa43c.appspot.com",
               messagingSenderId: "1098765106234",
               appId: "1:1098765106234:web:41efbbb2dad2052e1fc903"
          };
          const app = initializeApp(firebaseConfig);

          import { getDatabase, ref, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

          const db = getDatabase();
          let showTime = document.getElementById('show_time');
          let addBtn = document.getElementById('add_btn');
          let removeBtn = document.getElementById('remove_btn');
          let motorOnBtn = document.getElementById('motor_on_btn');
          let motorOffBtn = document.getElementById('motor_off_btn');
          let pumpOnBtn = document.getElementById('pump_on_btn');
          let pumpOffBtn = document.getElementById('pump_off_btn');
          let resetOnBtn = document.getElementById('reset_on_btn');
          let resetOffBtn = document.getElementById('reset_off_btn');
          function getTime() {
               const dbRef = ref(db);
               get(child(dbRef, 'count_time')).then((snapshot) => {
                    if (snapshot.exists()) {
                         showTime.value = snapshot.val();
                    } else {
                         alert("NO DATA !!!");
                    }
               }).catch((error) => {
                    console.log(error);
               })
          }
          function getMotor() {
            const dbRef = ref(db);
            get(child(dbRef, 'motor')).then((snapshot) => {
                 if (snapshot.exists()) {
                      let motor = snapshot.val();
                      if(motor == "ON"){
                        motorOnBtn.classList.add("btn-success");
                        motorOnBtn.classList.remove("btn-outline-success");
                        motorOffBtn.classList.add("btn-outline-danger");
                        motorOffBtn.classList.remove("btn-danger");
                      }else if(motor == "OFF"){
                        motorOnBtn.classList.add("btn-outline-success");
                        motorOnBtn.classList.remove("btn-success");
                        motorOffBtn.classList.add("btn-danger");
                        motorOffBtn.classList.remove("btn-outline-danger");
                      }
                 } else {
                      alert("NO DATA !!!");
                 }
            }).catch((error) => {
                 console.log(error);
            })
         }
         function getPump() {
            const dbRef = ref(db);
            get(child(dbRef, 'pump')).then((snapshot) => {
                 if (snapshot.exists()) {
                      let pump = snapshot.val();
                      if(pump == "ON"){
                        pumpOnBtn.classList.add("btn-success");
                        pumpOnBtn.classList.remove("btn-outline-success");
                        pumpOffBtn.classList.add("btn-outline-danger");
                        pumpOffBtn.classList.remove("btn-danger");
                      }else if(pump == "OFF"){
                        pumpOnBtn.classList.add("btn-outline-success");
                        pumpOnBtn.classList.remove("btn-success");
                        pumpOffBtn.classList.add("btn-danger");
                        pumpOffBtn.classList.remove("btn-outline-danger");
                      }
                 } else {
                      alert("NO DATA !!!");
                 }
            }).catch((error) => {
                 console.log(error);
            })
         }
         function getReset() {
               const dbRef = ref(db);
               get(child(dbRef, 'reset')).then((snapshot) => {
                    if (snapshot.exists()) {
                         let reset = snapshot.val();
                         if(reset == "ON"){
                         resetOnBtn.classList.add("btn-outline-primary");
                         resetOnBtn.classList.remove("btn-primary");
                         }else if(reset == "OFF"){
                         resetOnBtn.classList.add("btn-primary");
                         resetOnBtn.classList.remove("btn-outline-primary");
                         }
                    } else {
                         alert("NO DATA !!!");
                    }
               }).catch((error) => {
                    console.log(error);
               })
          }
          function liveUpdate() {
               setInterval(() => {
                    getTime();
                    getMotor();
                    getPump();
                    getReset();
               }, 1000)
          }

          function updateSetTime(time_value) {
               update(ref(db), {
                    set_time:time_value
               }).then(() => {
                    getTime();
               }).catch((error)=>{
                    console.log(error);
               })
          }

          function addTime(){
               const dbRef = ref(db);
               var time = 0;
               get(child(dbRef, 'set_time')).then((snapshot) => {
                    if (snapshot.exists()) {
                         time = snapshot.val() + 60000;
                         if(time > 300000){
                              time = 300000;
                         }
                         updateSetTime(time);
                    } else {
                         alert("NO DATA !!!");
                    }
               }).catch((error) => {
                    console.log(error);
               })
          }

          function removeTime(){
               const dbRef = ref(db);
               var time = 0;
               get(child(dbRef, 'set_time')).then((snapshot) => {
                    if (snapshot.exists()) {
                         time = snapshot.val() - 60000;
                         if(time < 60000){
                              time = 60000;
                         }
                         updateSetTime(time);
                    } else {
                         alert("NO DATA !!!");
                    }
               }).catch((error) => {
                    console.log(error);
               })
          }
          function motorOn() {
               update(ref(db), {
                    motor:"ON"
               }).then(() => {
                getMotor();
               }).catch((error)=>{
                    console.log(error);
               })
          }
          function motorOff() {
            update(ref(db), {
                 motor:"OFF"
            }).then(() => {
                getMotor();
            }).catch((error)=>{
                 console.log(error);
            })
          }

          function pumpOn() {
            update(ref(db), {
                 pump:"ON"
            }).then(() => {
                 getPump();
            }).catch((error)=>{
                 console.log(error);
            })
         }
         function pumpOff() {
            update(ref(db), {
              pump:"OFF"
            }).then(() => {
              getPump();
            }).catch((error)=>{
              console.log(error);
            })
          }
          function reset() {
               update(ref(db), {
                 reset:"ON"
               }).then(() => {
                 getReset();
               }).catch((error)=>{
                 console.log(error);
               })
          }
          
          document.addEventListener('DOMContentLoaded', liveUpdate);
          addBtn.addEventListener('click', addTime);
          removeBtn.addEventListener('click', removeTime);
          motorOnBtn.addEventListener('click', motorOn);
          motorOffBtn.addEventListener('click',motorOff);
          pumpOnBtn.addEventListener('click', pumpOn);
          pumpOffBtn.addEventListener('click',pumpOff);
          resetOnBtn.addEventListener('click',reset);