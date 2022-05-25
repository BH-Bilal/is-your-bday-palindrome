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
        year: '',
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

function isleapyear(year) {
    if (year % 400) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;

    }
    return false;
}

function getnextdate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysinmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2) {
        //check for leapyear
        if (isleapyear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {
        if (day > daysinmonth[month - 1]) {
            day = 1;
            month++;

        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year,
    };

}

function getnextpalindromedate(date) {
    var ctr = 0;
    var nextdate = getnextdate(date);

    while (1) {
        ctr++;
        var isPalindrome = checkpalindromeforallformats(nextdate);
        if (isPalindrome) {
            break;

        }
        nextdate = getnextdate(nextdate);
    }
    return [ctr, nextdate];


}

function getPreviousDate(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day === 0) {
        month--;

        if (month === 0) {
            month = 12;
            day = 31;
            year--;
        } else if (month === 2) {
            if (isLeapYear(year)) {
                day = 29;
            } else {
                day = 28;
            }
        } else {
            day = daysInMonth[month - 1];
        }
    }

    return {
        day: day,
        month: month,
        year: year
    }
}

function getPreviousPalindromeDate(date) {
    var ctr = 0;
    var nextdate = getPreviousDate(date);

    while (1) {
        ctr--;
        var isPalindrome = checkpalindromeforallformats(nextdate);
        if (isPalindrome) {
            break;

        }
        nextdate = getPreviousDate(nextdate);
    }
    return [ctr, nextdate];




}

var dateinput = document.querySelector("#bday");
var showbtnref = document.querySelector("#show");
var resultref = document.querySelector("#output");

function clickhandler() {

    var bdaydate = dateinput.value;
    if (bdaydate !== '') {
        var listofdate = bdaydate.split('');
        var date = {
            day: Number(listofdate[2]),
            month: Number(listofdate[1]),
            year: Number(listofdate[0]),
        };
        var isPalindrome = checkpalindromeforallformats(date);
        if (!isPalindrome) {
            const [ctr1, nextDate] = getNextPalindromeDate(date);
            const [ctr2, prevDate] = getPreviousPalindromeDate(date);

            if (ctr1 > ctr2) {
                resultref.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days.`;
            } else {
                resultref.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
            }

        } else {
            resultref.innerText = 'Yay! Your birthday is palindrome!';
        }
    }
}
showbtnref.addEventListener('click', clickhandler);