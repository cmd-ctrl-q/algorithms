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
    let i, j, minIndex;

    // loop through unsorted array 
    for (i = 0; i < len; i++) {

        // save the current index 
        minIndex = i; 

        // loop from current position + 1 of i to the end of same array, looking for the smallest element
        for (j = i + 1; j < len; j++) {

            // check if value of current index is less than value of minIndex, 
            if (arr[j] < arr[minIndex]) {
                // found smaller value in current index j; change the index of the minimum value 
                minIndex = j;
            }
        }

        // swap 
        let temp = arr[i]; 
        arr[i] = arr[minIndex];
        arr[minIndex] = temp; 
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