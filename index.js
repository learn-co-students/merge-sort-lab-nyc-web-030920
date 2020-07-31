function findMinAndRemoveSorted(arr) {
    let min = arr[0];
    arr.map(num => {
        return min = Math.min(min, num)
    })
    let index = arr.indexOf(min);
    arr.splice(index, 1)
    return min
}

findMinAndRemoveSorted([1, 2, 3, 4, 5]);

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        } else {
            result.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    
    return result
}

// merge([5, 2, 4, 8], [1, 3, 6, 7, 9]);
// [ 4,2,3,7,6,9,1]
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2); //3
    let left = mergeSort(arr.slice(0, mid)); // [4,2,3] // [4]  [2,3] // [2] , [3]
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left,right)
}

mergeSort([4,2,3,7,6,9,1]);