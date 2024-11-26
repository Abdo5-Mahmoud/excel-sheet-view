export const getDateFromSerial = (serial) => {
  const date = new Date(); // Month is 0-indexed, so January is 0
  const daysOffset = serial - 2; // Adjust for Excel's leap year bug (Excel treats 1900 as a leap year)

  date.setDate(date.getDate() + daysOffset); // Add the number of days to the base date

  console.log(date);
  return date;
};

