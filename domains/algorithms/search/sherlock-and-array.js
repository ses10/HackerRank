function processData(input) {
    
    //Enter your code here
  
    var lines = input.split('\n');
    var numCases = parseInt(lines.splice(0,1)[0]);
    
    //loop through each case pair of arraySize and int array
    for(var count = 0, j = 0; count < numCases; count++, j+=2)
    {
        var numFound = false;
        
        //parse current array size and array to integers
        var size = parseInt(lines[j]);
        var nums = lines[j+1].split(' ').map(function(num){
            return parseInt(num);
        });
        
        //find element in nums whose left sum == right sum
        for(var i = 0; i < size; i++)
        {
            var left = nums.slice(0,i);
            var right = nums.slice(i+1);
            var leftSum = 0;
            var rightSum = 0;
            
            for(var x = 0; x < left.length; x++)
            { leftSum += left[x]; } 
            
            for(var x = 0; x < right.length; x++)
            { rightSum += right[x]; }
            
            if(leftSum == rightSum)
            {
                numFound = true;
                break;
            }
        } 
        
        if(numFound)
            console.log("YES");
        else
            console.log("NO");
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
