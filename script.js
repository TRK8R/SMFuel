let timeOffset = 0;
let dpm = 0; 
// Get the select element for time zone selection
const tzSelect = document.getElementById('tz-select');

// Add event listener to the time zone select element
document.getElementById('tz-select').addEventListener('change', updateTimezone);

// function to get current day of the month
function getCurrentDay() {
  const tempDay = new Date();
  return tempDay.getDate()
}

//function to get current month
function getCurrentMonth() {
  const tempMonth = new Date()
  return tempMonth.getMonth()
}

//function to get current year
function getCurrentYear() {
  const tempYear = new Date()
  return tempYear.getFullYear()
}

// Function to update the timezone based on user input
function updateTimezone() {
  const selectedTz = tzSelect.value;
  timeOffset = Number(selectedTz);
  // Update the timezone variable here
  displayData()
}

// Function to set the maximum number of days for the current month
function maxDays() {
  const tMonth = getCurrentMonth() + 1
  switch (tMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dpm = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11: 
      dpm = 30;
      break;
    case 2:
      const Y = getCurrentYear()
      if (Y == 2028 || Y == 2032 || Y == 2036 || Y == 2040 || Y == 2044 || Y == 2048 || Y == 2052 || Y == 2056 || Y == 2060) {
        dpm = 29;
        break;
      } else if (Y < 2064){
        dpm = 28
        break;
      } else {
        alert("The current date is out of range!");
        fail; //undefined variable to stop all code execution
        break;
      }
  }
}

// function testDate(toTest) {
//   if (dpm = 0) {maxDays()};
//   if toTest < 32
// }

//function to adjust for end of month
function domOffset(d) {
  const dom = getCurrentDay();
  if(dpm == 0) {maxDays()};
  if(dom + d <= (dpm)) {
    return (dom * 2 + d);
  } else {
    // console.log("d: " + d);
    // console.log("dom: " + dom);
    // console.log("dpm: " + dpm);
    // console.log("returning: " + (((dom * 2) - (dpm * 2)) + d));
    return (((dpm * 2) - (dom * 2)) + d);
  }
}

//Function to sort data by time zone and then write the sorted data to the tables on index.html
function displayData() {
  const dom = getCurrentDay();
  const todayTable = document.getElementById("timetableToday");
  const tomorrowTable = document.getElementById("timetableTomorrow");
  const twoDayTable = document.getElementById("timetable2Days");
  //tzSelect.value = selectedTz;
  let t = timeOffset * -2
  //console.log(t);
  //console.log(48 + t)
  for (let i = 2; i< 50; i++) {
    if (t < 0) {
      todayTable.rows[i].cells[1].innerHTML = SMFD[domOffset(-3)][48 + t];
      todayTable.rows[i].cells[2].innerHTML = SMFD[domOffset(-2)][48 + t];
      tomorrowTable.rows[i].cells[1].innerHTML = SMFD[domOffset(-1)][48 + t];
      tomorrowTable.rows[i].cells[2].innerHTML = SMFD[domOffset(0)][48 + t];
      twoDayTable.rows[i].cells[1].innerHTML = SMFD[domOffset(1)][48 + t];
      twoDayTable.rows[i].cells[2].innerHTML = SMFD[domOffset(2)][48 + t];
    } else { if (t > 47) {
      todayTable.rows[i].cells[1].innerHTML = SMFD[domOffset(1)][t - 48];
      todayTable.rows[i].cells[2].innerHTML = SMFD[domOffset(2)][t - 48];
      tomorrowTable.rows[i].cells[1].innerHTML = SMFD[domOffset(3)][t - 48];
      tomorrowTable.rows[i].cells[2].innerHTML = SMFD[domOffset(4)][t - 48];
      twoDayTable.rows[i].cells[1].innerHTML = SMFD[domOffset(5)][t - 48];
      twoDayTable.rows[i].cells[2].innerHTML = SMFD[domOffset(6)][t - 48];
    } else {
      todayTable.rows[i].cells[1].innerHTML = SMFD[domOffset(-1)][t];
      todayTable.rows[i].cells[2].innerHTML = SMFD[domOffset(0)][t];
      tomorrowTable.rows[i].cells[1].innerHTML = SMFD[domOffset(1)][t];
      tomorrowTable.rows[i].cells[2].innerHTML = SMFD[domOffset(2)][t];
      twoDayTable.rows[i].cells[1].innerHTML = SMFD[domOffset(3)][t];
      twoDayTable.rows[i].cells[2].innerHTML = SMFD[domOffset(4)][t];
    }};
    // Adding background and font color based on cell data
    if (todayTable.rows[i].cells[1].innerHTML < 499) {
      todayTable.rows[i].cells[1].style.background = "green";
      todayTable.rows[i].cells[1].style.color = "white";
    } else {if(todayTable.rows[i].cells[1].innerHTML < 659) {
      todayTable.rows[i].cells[1].style.background = "mediumblue";
      todayTable.rows[i].cells[1].style.color = "white";
    } else {if(todayTable.rows[i].cells[1].innerHTML < 859){
      todayTable.rows[i].cells[1].style.background = "yellow";
      todayTable.rows[i].cells[1].style.color = "black";
    } else {
      todayTable.rows[i].cells[1].style.background = "red";
      todayTable.rows[i].cells[1].style.color = "white";
    }}}
    if (todayTable.rows[i].cells[2].innerHTML < 10) {
        todayTable.rows[i].cells[2].style.background = "green";
        todayTable.rows[i].cells[2].style.color = "white";
      } else {if(todayTable.rows[i].cells[2].innerHTML < 15) {
        todayTable.rows[i].cells[2].style.background = "mediumblue";
        todayTable.rows[i].cells[2].style.color = "white";
      } else {if(todayTable.rows[i].cells[2].innerHTML < 20){
        todayTable.rows[i].cells[2].style.background = "yellow";
        todayTable.rows[i].cells[2].style.color = "black";
      } else {
        todayTable.rows[i].cells[2].style.background = "red";
        todayTable.rows[i].cells[2].style.color = "white";
      }}}

    

    if (tomorrowTable.rows[i].cells[1].innerHTML < 499) {
      tomorrowTable.rows[i].cells[1].style.background = "green";
      tomorrowTable.rows[i].cells[1].style.color = "white";
    } else {if(tomorrowTable.rows[i].cells[1].innerHTML < 659) {
      tomorrowTable.rows[i].cells[1].style.background = "mediumblue";
      tomorrowTable.rows[i].cells[1].style.color = "white";
    } else {if(tomorrowTable.rows[i].cells[1].innerHTML < 859){
      tomorrowTable.rows[i].cells[1].style.background = "yellow";
      tomorrowTable.rows[i].cells[1].style.color = "black";
    } else {
      tomorrowTable.rows[i].cells[1].style.background = "red";
      tomorrowTable.rows[i].cells[1].style.color = "white";
    }}}
    if (tomorrowTable.rows[i].cells[2].innerHTML < 10) {
        tomorrowTable.rows[i].cells[2].style.background = "green";
        tomorrowTable.rows[i].cells[2].style.color = "white";
      } else {if(tomorrowTable.rows[i].cells[2].innerHTML < 15) {
        tomorrowTable.rows[i].cells[2].style.background = "mediumblue";
        tomorrowTable.rows[i].cells[2].style.color = "white";
      } else {if(tomorrowTable.rows[i].cells[2].innerHTML < 20){
        tomorrowTable.rows[i].cells[2].style.background = "yellow";
        tomorrowTable.rows[i].cells[2].style.color = "black";
      } else {
        tomorrowTable.rows[i].cells[2].style.background = "red";
        tomorrowTable.rows[i].cells[2].style.color = "white";
      }}}

    

    if (twoDayTable.rows[i].cells[1].innerHTML < 499) {
      twoDayTable.rows[i].cells[1].style.background = "green";
      twoDayTable.rows[i].cells[1].style.color = "white";
    } else {if(twoDayTable.rows[i].cells[1].innerHTML < 659) {
      twoDayTable.rows[i].cells[1].style.background = "mediumblue";
      twoDayTable.rows[i].cells[1].style.color = "white";
    } else {if(twoDayTable.rows[i].cells[1].innerHTML < 859){
      twoDayTable.rows[i].cells[1].style.background = "yellow";
      twoDayTable.rows[i].cells[1].style.color = "black";
    } else {
      twoDayTable.rows[i].cells[1].style.background = "red";
      twoDayTable.rows[i].cells[1].style.color = "white";
    }}}
    if (twoDayTable.rows[i].cells[2].innerHTML < 10) {
        twoDayTable.rows[i].cells[2].style.background = "green";
        twoDayTable.rows[i].cells[2].style.color = "white";
      } else {if(twoDayTable.rows[i].cells[2].innerHTML < 15) {
        twoDayTable.rows[i].cells[2].style.background = "mediumblue";
        twoDayTable.rows[i].cells[2].style.color = "white";
      } else {if(twoDayTable.rows[i].cells[2].innerHTML < 20){
        twoDayTable.rows[i].cells[2].style.background = "yellow";
        twoDayTable.rows[i].cells[2].style.color = "black";
      } else {
        twoDayTable.rows[i].cells[2].style.background = "red";
        twoDayTable.rows[i].cells[2].style.color = "white";
      }}}
      t = t +1
  }
 
}

// function to test dpm and dom loading
// function dpmtest() {
//   const dom = getCurrentDay();
//   console.log("dom: " + dom);
//   console.log("dpm: " + dpm);
//   console.log("Month: " + getCurrentMonth())
// }

function init() {
  updateTimezone();
  displayData();
}



