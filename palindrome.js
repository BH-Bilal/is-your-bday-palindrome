function reverseStr(str) {

    var listofChars = str.split("");
    var reverseListofChars = listofChars.reverse();
    var reverseStr = reverseListofChars.join("");
    return reverseStr;

}
// console.log(reverseStr('hello'));
function isPalindrome(str) {
    var reverse = reverseStr(str);
    return str = reverse;

}

function convertdatetoSTR(date) {
    var datestr = {
        day: '',
        month: '',
        year: ''
    };
    if (date.day < 10) {
        datestr.day = '0' + date.day;
    } else {
        datestr.day = date.day.toString();

    }
    if (date.month < 10) {
        datestr.month = '0' + date.month;
    } else {
        datestr.month = date.month.toString();

    }
    datestr.year = date.year.toString();
    return datestr;


}

function getalldateFormates(date) {
    var datestr = convertdatetoSTR(date);

    var ddmmyyyy = datestr.day + datestr.month + datestr.year;
    var mmddyyyy = datestr.month + datestr.day + datestr.year;
    var yyyymmdd = datestr.year + datestr.month + datestr.day;
    var ddmmyy = datestr.day + datestr.month + datestr.year.slice(-2);
    var mmddyy = datestr.month + datestr.day + datestr.year.slice(-2);
    var yymmdd = datestr.year.slice(-2) + datestr.month + datestr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

}

function checkpalindromeforallformats(date) {
    var listofpalindromes = getalldateFormates(date);

    var flag = false;
    for (var i = 0; i < listofpalindromes.length; i++) {
        if (isPalindrome(listofpalindromes[i])) {
            flag = true;
            break;
        }

    }
    return flag;



}
var date = {
    day: 01,
    month: 10,
    year: 1995,
};
console.log(checkpalindromeforallformats(date));