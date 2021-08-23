package main

import "fmt"

type t struct {
	slice []int
}

func (t *t) bubble() {

	didSwap := false
	i := 1
	for {

		// if prev > curr
		if t.slice[i-1] > t.slice[i] {
			// swap
			temp := t.slice[i]
			t.slice[i] = t.slice[i-1]
			t.slice[i-1] = temp
			didSwap = true
		}

		// end of slice is reached
		if i+1 == len(t.slice) {
			// if there were swaps, continue
			if didSwap {
				i = 1
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
	t.bubble()
	fmt.Println(t.slice)
}
