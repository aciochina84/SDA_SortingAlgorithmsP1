function mergeSort(arr1, l, h) {
  if (l < h) {
    let mid = Math.floor((l + h) / 2);
    mergeSort(arr1, l, mid);
    mergeSort(arr1, mid + 1, h);
    merge(arr1, l, mid, h);
  }
}

function merge(arr1, l, mid, h) {
  const arr2 = new Array(20).fill(0);
  let i = l;
  let j = mid + 1;
  let k = l;

  while (i <= mid && j <= h) {
    if (arr1[i] < arr1[j]) {
      arr2[k++] = arr1[i++];
    } else {
      arr2[k++] = arr1[j++];
    }
  }

  for (; i <= mid; i++) {
    arr2[k++] = arr1[i];
  }

  for (; j <= h; j++) {
    arr2[k++] = arr1[j];
  }
  
  for (let i = l; i <= h; i++) {
    arr1[i] = arr2[i];
  }
}

const arr1 = [6, 2, 7, 8, 1, 3, 9, 4];
mergeSort(arr1, 0, arr1.length - 1);
console.log(arr1);
