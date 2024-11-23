let timeOffset = 0 
// Get the select element for time zone selection
const tzSelect = document.getElementById('tz-select');

// Function to update the timezone based on user input
function updateTimezone() {
  const selectedTz = tzSelect.value;
  timeOffset = Number(selectedTz);
  // Update the timezone variable here
  console.log(`Selected Time Zone: ${selectedTz}`);
  console.log(`Time Offset: ${timeOffset}`);
}

// Add event listener to the time zone select element
document.getElementById('tz-select').addEventListener('change', updateTimezone);

