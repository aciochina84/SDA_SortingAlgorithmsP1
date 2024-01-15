function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function partition(arr, l, h) {
    const pivot = arr[l];
    let i = l;
    let j = h;
    do {
        do { i++; } while (arr[i] <= pivot);
        do { j--; } while (arr[j] > pivot);
        if (i < j)
            swap(arr, i, j);
    } while (i < j);

    swap(arr, l, j);
    return j;
}

function quickSort(arr, l, h) {
    if (l < h) {
        j = partition(arr, l, h);
        quickSort(arr, l, j);
        quickSort(arr, j + 1, h);
    }
}


var maxInt = Math.pow(2, 53) - 1;

const arr = [5, 7, 6, 9, 4, 8, 1, 2, 3];
quickSort(arr, 0, arr.length);
console.log("Array after applying Quick Sort: " + arr);