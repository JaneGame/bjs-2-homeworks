function cachingDecoratorNew(func) {
  const cashe = [];
  function cashing(...arg){
    let idx = cashe.findIndex((item)=>item == func(...arg));
    if (idx == -1){
      cashe.push(func(...arg))
      console.log("Вычисляем: " + func(...arg));
      return "Вычисляем: " + func(...arg); 
    } else {

    }
    if (cashe.length>5){
      cashe.shift()
    }
      console.log("Из кэша: " + cashe[idx]);
      return "Из кэша: " + cashe[idx];
  }
  return cashing;
}


function debounceDecoratorNew(func, ms) {
  let allImmediate
  return function(...massage){
    if (isNaN(ms)){
      allImmediate = setTimeout(() => {
        func(...massage);     
      })  
    }
    allImmediate = setTimeout(() => {
      func(...massage);
      clearTimeout(allImmediate);     
    }, ms)      
}}

function debounceDecorator2(func) {
  function wrapper(...massage) {
    wrapper.history.push(massage);
    return func.call(this, ...massage);    
  }    
  wrapper.history = []; 
  return wrapper;

}
