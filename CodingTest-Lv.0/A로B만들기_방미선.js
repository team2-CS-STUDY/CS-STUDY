// A로 B만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120886

// 나의 풀이
function solution(before, after) {
  const sortedBefore = before.split("").sort().join("");
  const sortedAfter = after.split("").sort().join("");

  return sortedBefore === sortedAfter ? 1 : 0;
}

// 다른 풀이
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
