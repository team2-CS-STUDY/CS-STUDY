
# 함수형 프로그래밍


### 함수형 프로그래밍이란?


## **KEY CONCEPT**

$$ 데이터와/ 실행의/ 완전한/분리 -(순수함수, 불변성, 멱등성, 참조투명성) $$
 


_**FUNCTION()**_

1.  프로토타입을 설명하면서, `자바스크립트에서 모든 것은 객체다` 라는 얘기를 한 적이 있습니다. 그리고 함수도 마찬가지로 객체임을 확인했습니다. 할당된 변수를 단순히 실행하는 input/output의 과정이 아닌, `실행가능한/ **객체**()` 라는 것입니다.

2.  우리는 `변수를 할당`할 수 있고, `다른 함수를 인자로 전달받을 수 있으며`, `다른 함수의 결과로서 리턴`될 수 있는 객체를 일급객체(First Class Object/Citizen)이라고 칭합니다.

$$FUNCTIONS /ARE /DATA$$

3.  1에서 `실행가능한/ **객체**()` 로 객체를 강조한 이유는, 우리는 단순히 함수를 통해 특정한 행동을 취하기만 하는 것이 아닌(`실행가능한`), 일반적인 값(자료형)과 같이 전달될 수 있으며, 다른 타입으로 가능한 모든 것들이 함수를 통해서도 가능하다는 의미입니다. 그렇기 때문에 자바스크립트는 프로토타입을 기반으로한 객체지향 프로그래밍만이 아닌 함수가 함수를 반환하고, 각각의 데이터 처리과정을 담당하는 함수들을 통해 하나의 결과물을 만들어내는 `함수형 프로그래밍` 또한 가능하게 됩니다.

### 불변성 (Immutablility)

- 데이터 변경이 필요한 경우, 원본 데이터 구조를 변경하지 않고 그 데이터의 복사본을 만들어 변경 후 작업한다. 

#####  데이터 변환방법

- 불변성을 지키기 위해 기존 데이터의 복사본을 만들어주는 도구들이 필요하다.
- Javascript - ```Array.map```, ```Array.reduce```  ``` ...(spread operator)```



### 순수함수(Pure functions)

- 순수함수 : 동일 **INPUT** = 동일 **OUTPUT**

 - 완전한 순수함수란 가능한가?
	 - 불가능 . DOM조작, API연동, 심지어 console.log까지도 함수 외부의 window객체를 참조하기 때문. 부작용이 없는 프로그래밍이란 사실상 불가능합니다. 따라서 함수형 프로그래밍의 목적은 변수로부터 실행을 분리해 **부작용을 최소화** 하는 것이 목적이라고 할 수 있습니다.

### 참조투명성(Referential transparency)

- 모든 프로그램에 대해 어떤 표현식(expression) e를 모두 그 표현식의 결과로 치환해도 프로그램에 아무 영향이 없다면 그 표현식 e는 참조에 투명하다(referentially transparent). (어려운 말)

- `function a(num1, num2) {
 return num1 + num2;
}`
`function b(num) {
 return num * 2;
}`
	
- 다음에서 2번의 예제(7)는 a(3,4)의 결과값입니다. 두 예제 모두 동일한 결과를 반환해야 합니다. (쉬운 말)  
- 1. `b(a(3, 4));` 
- 2. `b(7); `

### 멱등성(Idempotence)
- **첫 번째 수행을 한 뒤 여러 차례 적용해도 결과를 변경시키지 않는 작업 또는 기능의 속성**을 뜻함. 즉, 멱등한 작업의 결과는 한 번 수행하든 여러 번 수행하든 같습니다. 


 ### 커링(Currying)
 
 여러개의 인수를 받는 함수를 하나의 인수를 받는 함수로 쪼개는 것을 커링이라고 합니다. 함수를 쪼갬으로 **재사용성**을 높입니다.
```
function multiply(a, b) {
 return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4); // 8

const multiplyByTen = multiply.bind(this, 10);
multiplyByTen(6); // 60
```
 

### 합수 합성(Composition)

#### Pipe and Compose
함수를 합성하는 두 가지 방식, 동일한 개념이지만 읽는 방향만 다릅니다. ( **compose()**  - RTL  오른쪽 => 왼쪽 , **pipe()** - LTR 왼쪽 => 오른쪽)

```
// COMPOSE function - fn2가 먼저 실행, RTL
const compose = (fn1, fn2) => data => fn1(fn2(data));

// PIPE function - fn1이 먼저 실행, LTR
const pipe = (fn1, fn2) => data => fn2(fn1(data));

// 함수 1 - 3을 곱하는함수
const multiplyBy3 = num => num * 3;

// 함수 2 - 절댓값 치환 함수
const makePositive = num => Math.abs(num);

// COMPOSE를 통해 함수를 조합 - fn2가 먼저실행, makePositive가 먼저 실행
const absoluteAndMultiplyBy3 = compose(multiplyBy3, makePositive);

// PIPE를 통해 함수를 조합 - fn1, multiplyBy3이 먼저 실행
const multiplyBy3AndAbsolute = pipe(multiplyBy3, makePositive);

//결과는 같습니다.
composeFn(-50); // 150
pipeFn(-50); // 150

// 요약
// fn1(fn2(fn3(50))) 이를 다음과 같이 compose와 pipe는 작성하게 됩니다. (3-2-1은 동일)
// compose(fn1, fn2, fn3)(50) - RTL
// pipe(fn3, fn2, fn1)(50) - LTR

똑같으면 PIPE는 왜 있는건가요?
코드는 위에서 아래로, 독서는 왼쪽에서 오른쪽으로 읽는 건 매우 자연스럽습니다. 이 말은 곧 PIPE를 사용하면 절차지향적으로 코드를 읽을 수 있다는 얘기입니다(LTR).

커링과 함수 합성을 왜 하나요?
이 모든 함수들의 일련의 과정들 속에서 개별적으로 log로 기록될 수 있다는 점이 큽니다. 에러를 찾아내기 쉽겠죠?
```

### 함수형 프로그래밍을 구현하는 방법

- 규칙
  - 모든 데이터는 변경이 불가능 해야한다. ( 불변성 )
  - 함수는 순수 함수로 만든다. 인자를 적어도 하나 이상 받게 만들고, 데이터나 다른 함수를 반환해야한다. ( 순수함수 )
  - 루프보다는 재귀를 사용한다. ( 변수를 줄임으로 오류를 줄임 + 직관적 )
  
```
재귀
function sum(x) {
  if(x === 100) return x;
  else return x + sum(x + 1);
}

sum(0)

x라는 하나의 변수만을 사용
```

```
반복
let sum = 0;
for(let i = 0; i <= 100; i++) {
  sum += i;
}

sum,i라는 두 개의 변수를 사용
```

- 구현 목록 (시계만들기 // 다른 분이 만든거 가져왔음다)
  - [명령형](https://codesandbox.io/s/p31lpm0q5x)
  - [함수형](https://codesandbox.io/s/7wqn2j3wmq)


##  요약

함수형 프로그래밍 : 순수함수, 참조투명성, 불변성, 멱등성 결국 모두 같은 말을 하고 있습니다. 
동일 **INPUT** = 동일 **OUTPUT**을 목적으로 하지만 이는 불가능하며, **부작용을 최소화** 하는 것이 목적입니다.
