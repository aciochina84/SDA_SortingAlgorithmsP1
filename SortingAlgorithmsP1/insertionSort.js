function insertionSort(arr) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        
            let tmp = arr[i];
            let j = i;
            while (tmp < arr[j - 1] && j >= 0) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = tmp;
        
    }
    return arr;
}

const array = [3, 4, 2, 5, 1, 0];

console.log(array);
console.log(insertionSort(array));

// function insertionSort(arr) {
//     const length = array.length;
//     for (let i = 0; i < length - 1; i++) {
//         if (arr[i + 1] < arr[i]) {
//             let tmp = arr[i + 1];
//             let j = i;
//             while ( tmp < arr[j]) {
//                 arr[j + 1] = arr[j];
//                 j--;
//             }
//             arr[j + 1] = tmp;
//         }
//     }
//     return arr;
// }