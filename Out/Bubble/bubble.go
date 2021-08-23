package main

import "fmt"

type t struct {
	slice []int
}

func (t *t) bubble() {

	didSwap := false
	// didSwap := true
	i := 0
	for {

		// if previous > current
		if t.slice[i] > t.slice[i+1] {
			// swap
			temp := t.slice[i]
			t.slice[i] = t.slice[i+1]
			t.slice[i+1] = temp
			didSwap = true
		}

		// end of slice is reached
		if i+2 == len(t.slice) {
			fmt.Println(t.slice)
			// if there were swaps, continue
			if didSwap {
				i = 0
				didSwap = false
				continue
			} else {
				// else sorting complete
				break
			}
		}

		i += 1
	}

}

func main() {
	t := t{[]int{12, 3, 45, 17, 7, 42}}
	fmt.Println(t.slice)
	t.bubble()
}
