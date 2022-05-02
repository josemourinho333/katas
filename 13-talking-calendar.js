const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const talkingCalendar = function(date) {
  
  const splitting = date.split('/');

  for (let i = 0; i < months.length; i++) {
    if (splitting[1] == i + 1) {
      let month = months[i];
      // console.log(month);
      if (splitting[2].slice(1) == 2) {
        if (splitting[2][0] == 2) {
          let grabDay = splitting[2];
          let day = grabDay.slice(1) + 'nd';
          return month + ' ' + day + ', ' + splitting[0];
        } else {
          let day = splitting[2] + 'nd';
          return month + ' ' + day + ', ' + splitting[0];
        }
      } else {
        let day = splitting[2] + 'th';
        return month + ' ' + day + ', ' + splitting[0];
      }
    }
  }
};

console.log(talkingCalendar("2017/12/22"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));