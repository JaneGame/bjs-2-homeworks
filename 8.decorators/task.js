//Задача 1
function cachingDecoratorNew(func) {
  const cache = [];
  function cashing(...args){
    let hash = args;
    if (hash in cache) {            
      console.log("Из кэша: "+ cache[hash]); 
      return "Из кэша: " + cache[hash];       
    } else {let result = func(...args);
      if (cache.length>=5){
        cache.shift()
      }           
       cache[hash] = result;            
       console.log("Вычисляем: " + result); 
       return "Вычисляем: " + result;       
      }
    }
    return cashing;
  }

//Задача 2
function debounceDecoratorNew(func, ms) {
  let allImmediate;
  let flag = false;
  return function wrapper(...args) {
    if (!flag) {
      func.apply(this, args);  
    }
  flag = true;
	clearTimeout(allImmediate);
    allImmediate = setTimeout(() => {
	    flag = false;
    }, ms);
  };
}

//Задача 3
function debounceDecorator2(func, ms) {
  let allImmediate;
  let flag = false;
  wrapper.count = 0;
  function wrapper(...args) {
  wrapper.count ++;
    if (!flag) {
      func.apply(this, args);  
    }
  flag = true;
	clearTimeout(allImmediate);
    allImmediate = setTimeout(() => {
	  flag = false;
    }, ms);  
  };
  return wrapper;  
}

