// 나의 풀이
function solution(num, total) {
  const consNumber = [];
  let firstNumber = (total - ((num - 1) * num / 2)) / num;
  if(Number.isInteger(firstNumber)){
    for(let i = 0; i < num; i++){
      consNumber.push(firstNumber)
      firstNumber++;
    }
  }
  var answer = consNumber;
  return answer;
}

// 타인의 풀이를 보고 감명
function solution(num, total) {
  var min = Math.ceil(total/num - Math.floor(num/2));
  var max = Math.floor(total/num + Math.floor(num/2));

  return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}