// 내 풀이
function solution(num, total) {
    var half = parseInt(total / num)
    var first = num % 2 === 0 ? half - (num / 2 - 1) : half - parseInt(num / 2)
    return Array(num).fill().map((_, index) => first + index)
}

// 다른사람 풀이
function solution(num, total) {
  // 초기 값을 구하는 과정
  // total / num 으로 연속 되는 숫자의 중간 값을 구한다.
  // 구한 중간 값에서 num / 2의 내림을 해서 구한 자릿수 값을 빼고
  // 그 값을 올림으로 해서 초기 값을 구한다.

  // ex) num = 4 / total = 14
  // total / num = 3.5
  // num / 2 = 2
  // 3.5 - 2 = 1.5를 올림 처리해서 초기 값은 2
  const min = Math.ceil(total / num - Math.floor(num / 2));

  // Array.from() 메서드를 이용해 구해둔 초기값 부터
  // num의 길이 만큼 해서 답을 구한다.
  return Array.from({ length: num }, (_, i) => i + min);
}
