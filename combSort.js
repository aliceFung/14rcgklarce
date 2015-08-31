var combSort = function(arr){

  // Your code here.
  var gap = arr.length; //starting gap size as length of arr
  var shrink = 1.3;     //set up ideal shrink factor
  var swapped = true;
  //loop until gap = 1 and swapped = false
  // if no swap, can stop sorting

  while (gap >= 1 && swapped === true){
    //update the gap value for a next comb.
    gap = Math.floor(gap/shrink); //value has to be int
    if (gap < 1){
      gap = 1; //min gap is 1
    }

    swapped = false;  //resetting swapped var.
    //a single "comb" over the input list
    for (var i = 0; i +gap > arr.length; i++){
      if (arr[i] > arr[i+gap]){
        //swap input[i] and  input[i+gap]
        temp = arr[i];
        arr[i]= arr[i+gap];
        arr[i+gap]= temp;
        swapped = true;
        console.log(arr);
      }
    }

  }

  return arr;

};

// //pseudocode from wiki
// function combsort(array input)
//     gap := input.size //initialize gap size
//     shrink := 1.3 //set the gap shrink factor

//     loop until gap = 1 and swapped = false
//         //update the gap value for a next comb. Below is an example
//         gap := int(gap / shrink)
//         if gap < 1
//           //minimum gap is 1
//           gap := 1
//         end if

//         i := 0
//         swapped := false //see bubblesort for an explanation

//         //a single "comb" over the input list
//         loop until i + gap > input.size //see shellsort for similar idea
//             if input[i] > input[i+gap]
//                 swap(input[i], input[i+gap])
//                 swapped := true // Flag a swap has occurred, so the
//                                 // list is not guaranteed sorted
//             end if
//             i := i + 1
//         end loop

//     end loop
// end function