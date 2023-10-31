function fibs(n){
    let list = [0];
    if (n <= 1) return list;
    let prev = 0;
    let next = 1;
    for(let i = 1; i < n; i++){
        let temp = prev + next;
        prev = next;
        next = temp;
        list.push(prev);
    }
    return list;
}

let list = fibs(8);
console.log(list);

// Assignment 1
function fibsRec(n){
    if (n <= 0) return [];
    else if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    let fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
}

let list2 = fibsRec(8);
console.log(list2);

// Assignment 2
function merge(l, mid, h){
    let i = l;
    let j = mid + 1;
    let temp = [];
    let k = 0;
    while(i <= mid && j <= h){
        if (arr[i] < arr[j]){
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= mid){
        temp[k++] = arr[i++];
    }
    while (j <= h){
        temp[k++] = arr[j++];
    }
    for(let i=0; i < k; i++){
        arr[l++] = temp[i];
    }
}

function mergeSort(l, h){
    if(l < h){
        let mid = parseInt((l + h) / 2);
        mergeSort(l, mid);
        mergeSort(mid+1, h);
        merge(l, mid, h);
    }
}

let arr = [15, 3, 7, 10, 6, 2, 9, 8, 1, 4];
mergeSort(0, arr.length - 1);
console.log(arr);