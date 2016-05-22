function processData(input) {
    //Enter your code here
    var leftIndex = 0, rightIndex;
    var numChanged = 0;
    
    var lines = (input.split('\n'));
    
    //extract number size and max number of alterations from input
    var n = lines[0].split(' ')[0];
    var k = lines[0].split(' ')[1];
    
    //extract the number itself
    var num = lines[1].split('');
    
    rightIndex = num.length - 1;
    
    //make the number a palindrome
    while(leftIndex < rightIndex && numChanged <= k)
    {
        if(num[leftIndex] != num[rightIndex])
        {
            
            if( parseInt(num[leftIndex]) > parseInt(num[rightIndex]) )
                num[rightIndex] = num[leftIndex];
            else
                num[leftIndex] = num[rightIndex];
        }
        
        leftIndex += 1;
        rightIndex -= 1;
    }
    
    console.log(num.join(''));
   
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
