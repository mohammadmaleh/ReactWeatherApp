function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if ( typeof a === 'number' && typeof b === 'number' ){
      resolve(a+b)
    }
    else {
      reject('a and b needs to be numbers')
    }
  })
}
addPromise(1,null).then(function(sum){
  console.log('succuess: '+ sum)
},function(err){
  console.log('error: ',err)
})
