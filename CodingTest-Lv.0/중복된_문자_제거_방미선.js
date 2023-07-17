// 중복된 문자 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript#

// 나의 풀이
function solution(my_string) {
  var answer = [];

  for (var i = 0; i < my_string.length; i++) {
    var char = my_string[i];
    if (answer.indexOf(char) === -1) {
      answer.push(char);
    }
  }

  return answer.join("");
}

// 다른 풀이
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
