package main

import (
	"fmt"
	"sync"
	"time"
)

// use waitgroups for the go routines
// waitgroups are part of the sync package
func printNumbers(name string, count int, wg * sync.WaitGroup) {

	defer wg.Done()

	for i := 0; i < count; i++ {
		fmt.Printf("%s: %d\n", name, i)
		time.Sleep(time.Millisecond * 100) // simulate some work
	}
}
func main() {
	fmt.Println("Hello from Go")
	
	var wg sync.WaitGroup
	// add the go routines to the waitgroup
	wg.Add(2)

	// point to the waitgroup with the & pointer
	go printNumbers("Goroutine1", 5, &wg)
	go printNumbers("Goroutine2", 5, &wg)

	// wait for routines to finish
	// time.Sleep(time.Second * 5)
	wg.Wait()
}