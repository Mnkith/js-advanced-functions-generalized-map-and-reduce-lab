function map(sourceArray, fun){
  const ary = []
  sourceArray.forEach( int => ary.push(fun(int)) )
  return ary
}

function reduce(sourceArray, fun, sp){
  if(sp){
    for (let i = 0; i < sourceArray.length; i++){
    sp = fun(sourceArray[i], sp)  
  }
  } else {
    sp = sourceArray[0]
    for (let i = 1; i < sourceArray.length; i++){
    sp = fun(sourceArray[i], sp)
  }
  }
  return sp
}

