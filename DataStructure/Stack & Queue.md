# Stack(스택) & Queue(큐)

### 스택과 큐는 일종의 규칙이며, ADT(추상 자료형, Abstract Data Type)에 속하는 자료구조이다. ADT는 자료구조의 한 형태이고, 자료구조의 방법이 코드로 정의 된 것이 아니라 그 구조의 행동 양식만 정의된 것을 뜻한다.

## Stack

- 스택은 데이터를 선형(Linear)으로 저장하는 자료구조로, `Last-In-First-Out (LIFO)` 방식을 따른다. 즉, 마지막에 삽입된 데이터가 먼저 삭제된다.

- 스택은 주로 함수 호출, 재귀 알고리즘, 브라우저의 뒤로/앞으로 버튼 등에서 사용된다.

### 기본 연산

- `Push` : 데이터 삽입, 스택에 항목을 추가한다.
- `Pop` : 데이터 삭제, 스택에서 최근에 추가된 항목을 제거한다.
- `Peek`/`Top` : 스택의 맨 위 데이터 확인/스택의 맨 위 데이터, 스택의 최상단 항목을 조회한다.
- `isEmpty` : 스택이 비어있는지 확인한다.
- `isFull` : 스택이 가득 찼는지 확인한다.

![regex](./images/stack.png)

### 예시

웹 브라우저에서 뒤로 가기 버튼을 누르면 방문한 페이지들이 스택에 쌓이게 되고, 앞으로 가기 버튼을 누르면 스택의 가장 위에 있는 페이지가 삭제되며 해당 페이지로 이동한다.

### JavaScript, 배열을 이용한 간단한 스택 구현

```
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
```

- class Stack : 스택 자료구조를 정의하기 위한 클래스.
- constructor() 메서드 : 스택 객체가 생성될 때 호출되며, 내부적으로 배열 \_arr을 초기화.
- push(item) : 스택에 데이터를 추가하는 메서드. 스택의 맨 위에 새로운 item을 삽입. 배열의 push() 메서드를 이용하여 데이터를 스택에 추가.
- pop() : 스택에서 데이터를 삭제하고 삭제한 데이터를 반환하는 메서드. 스택의 맨 위 데이터를 삭제하고 해당 데이터를 반환. 배열의 pop() 메서드를 이용하여 스택의 맨 위 데이터를 삭제하고 반환.
- peek() : 스택의 맨 위 데이터를 반환하는 메서드. 스택의 맨 위 데이터를 삭제하지 않고 반환만 한다. 배열의 인덱스를 이용하여 스택의 맨 위 데이터를 확인.
- 이후 const stack = new Stack();를 통해 Stack 클래스의 인스턴스인 stack 객체를 생성한다. 그리고 stack.push(1);, stack.push(2);, stack.push(3);를 통해 순서대로 1, 2, 3을 스택에 추가한다.
- 마지막으로 stack.pop();을 호출하여 스택의 맨 위 데이터인 3을 삭제하고 반환한다. 따라서 stack.pop();의 결과는 3이 된다.

## Queue

- 큐는 데이터를 선형적으로 저장하는 자료구조로, `First-In-First-Out (FIFO)` 방식을 따른다. 즉, 먼저 삽입된 데이터가 먼저 삭제된다.

- 큐는 주로 작업 대기열, 인터넷 패킷 처리 등에서 사용된다.

### 기본 연산

- `Enqueue` : 데이터 삽입, 큐에 항목을 추가한다.
- `Dequeue` : 데이터 삭제, 큐에 가장 먼저 추가된 항목을 제거한다.
- `Front` : 큐의 맨 앞에 있는 데이터, 큐의 첫 번째 항목을 조회한다.
- `Rear` : 큐의 맨 뒤에 있는 데이터, 큐의 마지막 항목을 조회한다.

![regex](./images/queue.png)

### 예시

인터넷 패킷을 처리하는 라우터의 경우, 도착한 패킷들이 큐에 쌓이게 되고, 라우터는 큐의 맨 앞에 있는 패킷을 처리하면서 패킷들을 순서대로 전달한다.

### JavaScript, 배열을 이용한 간단한 큐 구현

```
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
```

- class Queue : 큐 자료구조를 정의하기 위한 클래스.
- constructor() 메서드 : 큐 객체가 생성될 때 호출되며, 내부적으로 배열 \_arr을 초기화.
- enqueue(item) : 큐에 데이터를 추가하는 메서드. 큐의 맨 뒤에 새로운 item을 삽입.
- 배열의 push() 메서드를 이용하여 데이터를 큐에 추가.
- dequeue() : 큐에서 데이터를 삭제하고 삭제한 데이터를 반환하는 메서드. 큐의 맨 앞 데이터를 삭제하고 해당 데이터를 반환. 배열의 shift() 메서드를 이용하여 큐의 맨 앞 데이터를 삭제하고 반환.
- 이후 const queue = new Queue();를 통해 Queue 클래스의 인스턴스인 queue 객체를 생성. 그리고 queue.enqueue(1);, queue.enqueue(2);, queue.enqueue(3);를 통해 순서대로 1, 2, 3을 큐에 추가한다.
- 마지막으로 queue.dequeue();를 호출하여 큐의 맨 앞 데이터인 1을 삭제하고 반환한다. 따라서 queue.dequeue();의 결과는 1이 된다.
