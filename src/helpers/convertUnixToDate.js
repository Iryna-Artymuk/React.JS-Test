export function convertUnixToDate(unix) {
  // Convert the Unix timestamp to milliseconds by multiplying by 1000
  let milliseconds = unix * 1000;
  // Create a new Date object using the milliseconds value
  let date = new Date(milliseconds);
  // Get the day and the month from the date object
  let day = date.getDate();
  let month = date.getMonth() + 1; // Months are zero-based, so add 1
  // Add a leading zero to the day if it has one digit
  if (month < 10) {
    month = '0' + month;
  }
  // Return the date in the format of DD.MM
  return `${day}.${month}`;
}
