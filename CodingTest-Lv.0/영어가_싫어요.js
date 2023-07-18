## 문제 설명

영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열  `numbers`가 매개변수로 주어질 때,  `numbers`를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

----------

##### 제한사항

-   `numbers`는 소문자로만 구성되어 있습니다.
-   `numbers`는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
-   1 ≤  `numbers`의 길이 ≤ 50
-   "zero"는  `numbers`의 맨 앞에 올 수 없습니다.

----------

##### 입출력 예

"onetwothreefourfivesixseveneightnine"
123456789

"onefourzerosixseven"
14067

//나의 풀이
```
function solution(numbers) {   
            return parseInt(numbers.replaceAll('zero',0).replaceAll('one',1).replaceAll('two',2).replaceAll('three',3).replaceAll('four',4).replaceAll('five',5).replaceAll('six',6).replaceAll('seven',7).replaceAll('eight',8).replaceAll('nine',9))
    }
```
//다른 사람의 풀이
```
function solution(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v];
    });

    return Number(num);
}

//영어로 표기된 것을  숫자로 바꾼다 .
//numbers를 계속 지워서 result 배열에 push(splice사용)
//정규표현식
```
