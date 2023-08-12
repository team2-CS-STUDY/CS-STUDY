### 내 풀이

[문제설명](https://school.programmers.co.kr/learn/courses/30/lessons/120907)
```
function solution(quiz) {
    return quiz.map(q => {
        const [expression, result] = q.split(' = ')
        if (expression.includes('+')) {
            const [first, second] = expression.split(' + ')
            return Number(first) + Number(second) === Number(result) ? 'O' : 'X'
        } else {
            const [first, second] = expression.split(' - ')
            return Number(first) - Number(second) === Number(result) ? 'O' : 'X'
        }
    })
}
```

### 다른 사람 풀이
- 비슷하지만 eval() 함수를 활용  
[eval()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)

```
function solution(quiz) {
    var answer = quiz.map(item=> {
        const [left,right] = item.split("=");
        return eval(left) == right ? "O" : "X";        
    });
    return answer;
}
```
