
function findMinAndRemoveSorted(sorted){
    return sorted.shift();
}

function findMinAndRemove(sorted1, sorted2){
    if(!sorted1.length){
        return findMinAndRemoveSorted(sorted2);
    }

    if(!sorted2.length){
        return findMinAndRemoveSorted(sorted1);
    }

    if(sorted1[0] <= sorted2[0]){
        return findMinAndRemoveSorted(sorted1);
    }
    else{
        return findMinAndRemoveSorted(sorted2);
    }
}

function merge(sorted1, sorted2) {
    const merged = [];

    console.log("merge", sorted1, sorted2);

    while(sorted1.length > 0 || sorted2.length > 0){
        merged.push(findMinAndRemove(sorted1, sorted2));
    }

    return merged;
}

function mergeSort(array){

    console.log("mergesort", array);

    if(array.length < 2){
        return array;
    }
    else{
        const mid = array.length/2;
        const firstHalf = array.slice(0, mid);
        const secondHalf = array.slice(mid, array.length);

        console.log("first/second", firstHalf, secondHalf);

        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}