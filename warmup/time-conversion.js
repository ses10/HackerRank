/**
Given a time in AM/PM format, convert it to military (24-hour) time.
**/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var time = readLine();
    
/////////////// my code starts here ////////////////////   
    var period = time.substring(time.length - 2);
    var militaryTime = '';
    var hour;
    
    //compute hour for military time format
    if(period === 'PM' && time.substring(0,2) === '12')
        hour = '12'
    else if(period === 'PM')
        hour = (parseInt(time.substring(0,2)) + 12).toString();
    else if(period === 'AM' && time.substring(0,2) === '12')
        hour = '00';
    else
        hour = time.substring(0,2);
    
    //add leading zeros to hour
    hour = '0' + hour;
    hour = hour.slice(-2);

    militaryTime += hour + time.substring(2, 8);
    
    console.log(militaryTime);
}