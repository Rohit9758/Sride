/*
Function to validate the date.
@param {string} date 
*/
const validateDate = date => {
  try {
    if (date === null || date === "" || date === undefined) {
      return null;
    }
    let regex_date = /^(((0[1-9]|[12]\d|3[01])[-](0[13578]|1[02])[-]((19|[2-9]\d)\d{2})\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|((0[1-9]|[12]\d|30)[-](0[13456789]|1[012])[-]((19|[2-9]\d)\d{2})\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|((0[1-9]|1\d|2[0-8])[-](02)[-]((19|[2-9]\d)\d{2})\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|((29)[-](02)[-]((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])))$/;
    if (!regex_date.test(date)) {
      return false;
    }
    return date;
  } catch (Exception) {
    console.log(Exception);
  }
}

const IsPrime = number =>{
   numRoot = Math.sqrt(number);
   for(i=2; i <= numRoot; i++) 
   {
      if(number%i == 0)
          return false;
   } 
   return true;
} 

exports.validateDate = validateDate
exports.IsPrime = IsPrime