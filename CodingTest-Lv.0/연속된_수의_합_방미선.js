// 나의 풀이1(오답)
function solution(num, total) {
  var answer = [];
  var start = Math.floor(total / num) - Math.floor(num / 2);

  for (var i = 0; i < num; i++) {
    answer.push(start + i);
  }

  return answer;
}

// 나의 풀이2(정답)
function solution(num, total) {
  var answer = [];
  var start = Math.floor(total / num) - Math.floor((num - 1) / 2);

  for (var i = 0; i < num; i++) {
    answer.push(start + i);
  }

  return answer;
}

// 다른 풀이
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
