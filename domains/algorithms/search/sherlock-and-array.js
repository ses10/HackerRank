/**
Watson gives Sherlock an array A of length N. Then he asks him to determine if there exists an element in the array such that the sum of the elements on its left is equal to the sum of the elements on its right. If there are no elements to the left/right, then the sum is considered to be zero. 
Formally, find an i, such that, A1 + A2...Ai-1 = Ai+1 + Ai+2...An.
**/

function processData(input) {
    
    //Enter your code here
  
    var lines = input.split('\n');
    var numCases = parseInt(lines.splice(0,1)[0]);
    
    //loop through each case pair of arraySize and int array
    for(var count = 0, j = 0; count < numCases; count++, j+=2)
    {
        var numFound = false;
        
        //parse current array size and array to integers
        var numFound = false;
        var size = parseInt(lines[j]);
        var nums = lines[j+1].split(' ').map(function(num){
            return parseInt(num);
        });
        var prefixSum = nums;
        
        //find prefix sum of current case
        for(var i = 1; i < size; i++)
        {
            prefixSum[i] = prefixSum[i] + prefixSum[i - 1];
        }

        //find element in nums whose left sum == right sum
        for(var i = 0; i < size; i++)
        {
            var leftSum = 0; 
            var rightSum = 0;
            
            //calculate leftSum
            if(i != 0)
                leftSum = prefixSum[i - 1]
               
            //calculate rightSum
            if(i != size - 1)
                rightSum = prefixSum[size - 1] - prefixSum[i];
            
            if(leftSum == rightSum)
            {
                numFound = true;
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
