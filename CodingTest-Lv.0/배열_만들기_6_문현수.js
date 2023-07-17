//나의 풀이

function solution(arr) {
  const stk = [];
  for(let i = 0; i < arr.length; i++){
    if(stk.length === 0){
      stk.push(arr[i])
    }else if(stk.length > 0 && stk.at(-1) === arr[i]){
      stk.splice(stk.length - 1)
    }else if(stk.length > 0 && stk.at(-1) !== arr[i]){
      stk.push(arr[i])
    }
  }
  if(stk.length === 0){
      return [-1]
  }

  return stk;
}

// 타인의 풀이 중 감명

function solution(arr) {
    let stk = []
    arr.forEach((x,i)=>{
        if( x !== stk[stk.length - 1]){
            stk.push(x)
        }else{
            stk.splice(-1)
        }
        //console.log("배열 추가 삭제 진행과정 : ",stk)
    })

    if(stk.length == 0){
        stk = [-1]
    }
    return stk;
}
