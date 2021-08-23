/*
Selection sort: 
Sorts an array by repeatedly finding the smallest element 
and moving it to the current index of the array; 
when the end is reached, the array is sorted. 

E.g.
12 3 45 17 7 42
3 12 45 17 7 42 
3 7 45 17 12 42 
3 7 12 17 45 42 
3 7 12 17 42 45
*/

function selectionSort(arr) {

    let len = arr.length; 
    let found = false;
    let i, j, minValue, indexOfMinValue; 

    // loop through unsorted array 
    for (i = 0; i < len; i++) {

        // save the current value of arr[i]
        minValue = arr[i]; 

        // loop from current position + 1 of i to the end of same array, looking for the smallest element
        for (j = i + 1; j < len; j++) {

            // check if current value is less than min, if so, change min to current value in array
            if (arr[j] < minValue) {
                minValue = arr[j]; 
                indexOfMinValue = j;
                found = true;
            }
        }

        if (found) {
            // found the next minimum element in array; swap current value of arr[i] with the newly found value in arr[indexOfMinValue]
            let temp = arr[i]; 
            arr[i] = minValue;
            arr[indexOfMinValue] = temp; 
            // reset found to false 
            found = false; 
        } 
    }
}

function printArray(arr) {
    let i = 0;
    let len = arr.length; 
    while (i < len) {
        console.log(arr[i]); 
        i++;
    }
}

let arr = [12, 3, 45, 17, 7, 42];
selectionSort(arr);
printArray(arr);