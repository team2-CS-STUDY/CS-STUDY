// 내 풀이
function solution(array) {
    return array.join().replaceAll(',','').split('').filter(n => parseInt(n) === 7).length
}

// 인상깊은 다른 사람 풀이
function solution(array) {
    return array.join("").match(/7/g)?.length || 0;
}
