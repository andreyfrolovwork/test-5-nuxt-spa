function makeIterator(len){
  let array = []

  for(let i = 0; i < len; i++){
    array.push(i)
  }
  //debugger
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {done: true};
    }
  }
}
export default makeIterator
