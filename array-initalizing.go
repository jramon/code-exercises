// Initalizing arrays in Golang:

//  Fixed-size array (length is part of the type):
var arr [3]int // [0 0 0]
arr := [3]int{1, 2, 3} // [1 2 3]
Slice with a specific length (dynamic size):

arr := make([]int, 3) // [0 0 0]
Slice with values using a loop:

arr := make([]int, 3)
for i := range arr {
    arr[i] = i + 1 // [1 2 3]
}

// 2D slice (like a 2D array):
building := make([][]string, 3)
for i := range building {
    building[i] = make([]string, 3)
}

// Go arrays are fixed-size, while slices are more flexible and used more often.
// Which style do you think you’ll use most as you start with Go?