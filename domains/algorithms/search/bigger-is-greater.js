/**
Given a word w, rearrange the letters of w to construct another word s in such a way that s is lexicographically greater than w. In case of multiple possible answers, find the lexicographically smallest one among them.
**/

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var numCases = parseInt(lines.splice(0,1)[0]);
    
        
    //loop through each case
    for(var i = 0; i < numCases; i++)
    {
        var curString = lines[i].split('');
        var suffix = 0;
        var pivot;
        
        //find the longest nonincreasing suffix
        for(var c = curString.length - 1; c > 0; c--)
        {
            if(curString[c] > curString[c - 1])
            {
                suffix = c;
                break;
            }
        }
        
        pivot = suffix - 1;
        
        if(pivot != -1)
        {
            var smallest;
            
            //swap pivot with smallest element in suffix greater than pivot
            for(var j = curString.length - 1; j >= suffix; j--)
            {
                if(curString[j] > curString[pivot])
                {    
                    smallest = j;
                    break;
                }
            }
            var temp = curString[pivot];
            curString[pivot] = curString[smallest];
            curString[smallest] = temp;
            
            //reverse suffix
            var suf = curString.splice(suffix).reverse();
            console.log(curString.concat(suf).join(''));
            
        }
        else
            console.log('no answer');
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
