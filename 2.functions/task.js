// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for(let i = 0; i<arr.length; i++)
   {if (min > arr[i]){
      min = arr[i];}
    if (max < arr[i]){
	  max = arr[i];}
	  
    sum = sum + arr[i];}
   
	let avg = sum/arr.length;
	avg = avg.toFixed(2);

  return { min: Number(min), max: Number(max), avg: Number(avg) };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i<arr.length; i++){
  sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker2) {
  
  let sum = 0;
  let max = worker2(arrOfArr[0]);
for (let i = 0; i<arrOfArr.length; i++){
	
  let sum = worker2(arrOfArr[i]);
  if(max<sum){
	  max = sum;
  }
  
}return max;
}

// Задание 3
function worker2(arr) {
	let minim = arr[0];
	let maxim = arr[0];
	
  for (let i = 0; i<arr.length; i++){
	 if(minim>arr[i]){
		 minim = arr[i];
	 } 
	 if(maxim<arr[i]){
		 maxim = arr[i];
	 }
  } 
  
  sum = Math.abs(maxim-minim);
  return sum;
  
}
