package main

import "fmt"

type t struct {
	slice []int
}

func (t *t) selectionSort() {

	var minIndex int

	// loop through unsorted array
	for i := range t.slice {

		// save current index
		minIndex = i
		// loop from current position of i + 1 to end of array, finding the smallest element
		for j := i + 1; j < len(t.slice); j++ {
			// check if current index value of j is less than minIndex value
			if t.slice[j] < t.slice[minIndex] {
				minIndex = j
			}
		}

		// swap
		temp := t.slice[i]
		t.slice[i] = t.slice[minIndex]
		t.slice[minIndex] = temp
	}
}

func main() {
	t := t{[]int{12, 3, 45, 17, 7, 42}}
	t.selectionSort()

	fmt.Println(t.slice)
}
