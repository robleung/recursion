function fibs(num) {
  let f0 = 0;
  let f1 = 1;
  let arr = [f0, f1];
  if (num < 2) {
    return [f0];
  }
  if (num < 3) {
    return arr;
  }
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}
function fibsRec(num) {
  if (num < 2) return [0];
  if (num < 3) return [0, 1];
  let arr = fibsRec(num - 1);
  return [...arr, arr[num - 3] + arr[num - 2]];
}

console.log(fibs(8));
console.log("----------- Recursive Fibonacci----------");
console.log(fibsRec(8));

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function mergeSort(arr) {
  const mid = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
console.log("----------- Recursive Merge Sort----------");
console.log(mergeSort([105]));
console.log("----------- Recursive Merge Sort----------");
console.log(mergeSort([10, 7, 8, 9, 1, 5]));
