/**
Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Input Format

The first line contains an integer, , denoting the size of the array. 
The second line contains  space-separated integers describing an array of numbers .

Output Format

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array.
A decimal representing of the fraction of negative numbers in the array.
A decimal representing of the fraction of zeroes in the array.

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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    //my code starts here//
    var numPositive = 0;
    var numNegative = 0;
    var numZero = 0;
    
    //count # of positives, negatives, zeros in given array
    for(var i = 0; i < n; i++)
    {
        if(arr[i] > 0)
            numPositive += 1;
        else if(arr[i] < 0)
            numNegative += 1;
        else
            numZero += 1;
    }
    
    //calculate and output percentages of each
    console.log((numPositive / n).toFixed(6));
    console.log((numNegative / n).toFixed(6));
    console.log((numZero / n).toFixed(6));
}
