let timeOffset = 0 
// Get the select element for time zone selection
const tzSelect = document.getElementById('tz-select');

// Add event listener to the time zone select element
document.getElementById('tz-select').addEventListener('change', updateTimezone);

// function to get current day of the month
function getCurrentDay() {
  const tempDay = new Date();
  return tempDay.getDate()
}

// Function to update the timezone based on user input
function updateTimezone() {
  const selectedTz = tzSelect.value;
  timeOffset = Number(selectedTz);
  // Update the timezone variable here
  displayData()
}

//Function to sort data by time zone and then write the sorted data to the tables on index.html
function displayData() {
  const dom = getCurrentDay();
  const todayTable = document.getElementById("timetableToday")
  const tomorrowTable = document.getElementById("timetableTomorrow")
  const twoDayTable = document.getElementById("timetable2Days")
  let t = timeOffset * -2
  //console.log(t);
  //console.log(48 + t)
  for (let i = 2; i< 50; i++) {
    if (t < 0) {
      todayTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) -3][48 + t];
      todayTable.rows[i].cells[2].innerHTML = SMFD[(dom *2) -2][48 + t];
      tomorrowTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) -1][48 + t];
      tomorrowTable.rows[i].cells[2].innerHTML = SMFD[(dom *2)][48 + t];
      twoDayTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) +1][48 + t];
      twoDayTable.rows[i].cells[2].innerHTML = SMFD[(dom *2) +2][48 + t];
    } else { if (t > 47) {
      todayTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) +1][t - 48];
      todayTable.rows[i].cells[2].innerHTML = SMFD[(dom *2) +2][t - 48];
      tomorrowTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) +3][t - 48];
      tomorrowTable.rows[i].cells[2].innerHTML = SMFD[(dom *2) +4][t - 48];
      twoDayTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) +5][t - 48];
      twoDayTable.rows[i].cells[2].innerHTML = SMFD[(dom *2) +6][t - 48];
    } else {
      todayTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) -1][t];
      todayTable.rows[i].cells[2].innerHTML = SMFD[(dom *2)][t];
      tomorrowTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) +1][t];
      tomorrowTable.rows[i].cells[2].innerHTML = SMFD[(dom *2) +2][t];
      twoDayTable.rows[i].cells[1].innerHTML = SMFD[(dom *2) +3][t];
      twoDayTable.rows[i].cells[2].innerHTML = SMFD[(dom *2) +4][t];
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



