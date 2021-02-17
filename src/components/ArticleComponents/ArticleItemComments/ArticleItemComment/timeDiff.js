const getTimeStamp = (dateOfCreate) => {
  let creationTime = new Date(dateOfCreate).getTime();
  let actualTime = new Date().getTime();
  let timeDiff = Math.abs(creationTime - actualTime);
  let resultTime, timeUnit;
  //YEARS
  if (timeDiff > 31536000000) {
    resultTime = parseInt(timeDiff / 31536000000, 10);
    timeUnit = "years";
    // MONTHS
  } else if (timeDiff > 2592000000) {
    resultTime = parseInt(timeDiff / 2592000000, 10);
    timeUnit = "months";
  } // WEEKS
  else if (timeDiff > 604800000) {
    resultTime = parseInt(timeDiff / 604800000, 10);
    timeUnit = "weeks";
  } // DAYS
  else if (timeDiff > 86400000) {
    resultTime = parseInt(timeDiff / 86400000, 10);
    timeUnit = "days";
  } // HOURS
  else if (timeDiff > 3600000) {
    resultTime = parseInt(timeDiff / 3600000, 10);
    timeUnit = "hours";
  } // MINUTES
  else if (timeDiff > 60000) {
    resultTime = parseInt(timeDiff / 60000, 10);
    timeUnit = "minutes";
  } // SECONDS
  else {
    resultTime = parseInt(timeDiff / 1000, 10);
    timeUnit = "seconds";
  }
  let result = `${resultTime} ${timeUnit}`;
  return `${result} ago`;
};

export { getTimeStamp };
