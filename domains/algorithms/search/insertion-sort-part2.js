/**
In Insertion Sort Part 1, you sorted one element into an array. Using the same approach repeatedly, can you sort an entire unsorted array?

Guideline: You already can place an element into a sorted array. How can you use that code to build up a sorted array, one element at a time? Note that in the first step, when you consider an element with just the first element - that is already "sorted" since there's nothing to its left that is smaller.

In this challenge, don't print every time you move an element. Instead, print the array after each iteration of the insertion-sort, i.e., whenever the next element is placed at its correct position.

Since the array composed of just the first element is already "sorted", begin printing from the second element and on.
**/

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var size = parseInt(lines.splice(0,1)[0]);
    var nums = lines[0].split(' ').map(function(num){
            return parseInt(num);
        });
    
    
    for(var i = 1; i < size ; i++)
    {
        if(size > 1)
        {
            var pos = i;
            //swap until current number sorted
            while(pos > 0 && nums[pos] < nums[pos - 1])
            {
                var temp = nums[pos];
                nums[pos] = nums[pos - 1];
                nums[pos - 1] = temp;
                pos -= 1;
            }
            
            console.log(nums.join(' '));
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
