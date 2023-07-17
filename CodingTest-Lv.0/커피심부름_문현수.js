// 나의 풀이

function solution(order) {
  const a = order.filter(x => x.includes('cafelatte'))
  const aTotalPrice = a.length * 5000
  
  const b = order.filter(x => !x.includes('cafelatte'))
  const bTotalPrice = b.length * 4500
  
  var answer = aTotalPrice + bTotalPrice;
  return answer;
}

// 타인의 풀이 중 감명
const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0)
