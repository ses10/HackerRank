/**
Sunny and Johnny together have M dollars they want to spend on ice cream. The parlor offers N flavors, and they want to choose two flavors so that they end up spending the whole amount.

You are given the cost of these flavors. The cost of the ith flavor is denoted by Ci. You have to display the indices of the two flavors whose sum is M.
**/

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var numCases = parseInt(lines.splice(0,1)[0]);
    
    //loop through each case
    for(var count = 0, j = 0; count < numCases; count++, j+=3)
    {
        var dollars = parseInt(lines[j]);
        var numFlavors = parseInt(lines[j+1]);
        var flavors = lines[j+2].split(' ').map(function(num){
            return parseInt(num);
        });
        
        //find 2 flavors whos sum == dollars
        outer:
        for(var i = 0; i < numFlavors; i++)
        {
            for(var k = i+1; k < numFlavors; k++)
            {
                if(flavors[i] + flavors[k] == dollars)
                {   
                    console.log((i+1) + ' ' + (k+1));
                    break outer;
                }
            }
        }
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
