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
    
    var a0_temp = readLine().split(' ');
    var b0_temp = readLine().split(' ');

 /////////////// my code starts here ////////////////////   
 
    var alicePoints = 0; 
    var bobPoints = 0;
    
    //parse scores into integer array
    var aliceScores = a0_temp.map(function(num){
        return parseInt(num);
    });
    var bobScores = b0_temp.map(function(num){
        return parseInt(num);
    });

    //compare scores
    for(var i = 0; i < aliceScores.length; i++)
    {
        if(aliceScores[i] > bobScores[i])
            alicePoints += 1;
        else if(aliceScores[i] < bobScores[i])
            bobPoints += 1;
    }
    
    console.log(alicePoints + ' ' + bobPoints);
    
}
