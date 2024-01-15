// Selection Sort
function selectionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let minElem = arr[i];
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (minElem > arr[j]) {
                minElem = arr[j];
                minIndex = j;
            }
        }
        let tmp = arr[i];
        arr[i] = minElem;
        arr[minIndex] = tmp;
    }
}

const arr = [3, 2, 6, 1, 4, 5];
console.log(arr);
selectionSort(arr);
console.log(arr);
