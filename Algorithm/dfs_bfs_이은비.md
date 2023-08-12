# DFS
DFS란 Depth First Search의 약자로 깊이 우선 탐색으로 그래프 순회 방식의 일종으로 `스택` 자료구조를 사용한 탐색 알고리즘 이다.  
`깊이`를 우선적으로 탐색하는 알고리즘으로 루트 노드를 시작으로 다음 분기로 넘어가기 전에 해당 분기를 완전하게 탐색한다.  

가장 깊은 노드까지 도달하였을 때 탐색한 경로를 역추적하여 되돌아나오기 위해 스택을 사용한다.  
이미 방문한 노드를 다시 방문하지 않기 위해 방문한 노드를 따로 저장 해야한다.  (=`방문처리`)

## 동작순서
1. 루트 노드를 스택에 넣고 방문처리 한다.
2. 스택 최상단 노드의 인접 노드 중 방문하지 않은 노드 하나를 스택에 넣고 방문처리 한다. 만약 모두 방문한 경우 스택을 pop 한다.
3. 2를 더이상 수행할 수 없을 때 까지 반복한다.

visit 배열 = 노드의 방문 여부를 체크
stack = 노드의 방문 차례를 기록

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwD2xz%2Fbtq0n9Lbj4W%2FO4MCmeOXUp0ttIBvJ5udK1%2Fimg.png)

**탐색 순서는 아래와 같다**  
1 -> 2 -> 5 -> 10 -> 6 -> 3 -> 7 -> 4 -> 8 -> 9  

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbSgEGJ%2Fbtq0qzWBE58%2FsGOhR4AQ9PM92odkk2cfE0%2Fimg.png)

## 스택을 이용한 구현 JS

```js
const graph = {
  1: [2, 3, 4],
  2: [1, 5, 6],
  3: [1, 7],
  4: [1, 8, 9],
  5: [2, 10],
  6: [2],
  7: [3],
  8: [4],
  9: [4],
  10: [5]
};

const dfs = (graph, startNode) => {
  let visited = []; // 탐색한 노드를 담기 위한 배열 생성
  let stack = []; // 탐색을 위한 스택 배열 생성

  stack.push(startNode); // 탐색 시작

  while (stack.length > 0) {
    // 스택이 비워질 때까지 반복
    let node = stack.pop(); // 스택의 가장 마지막 노드를 뽑는다
    console.log('node', node);
    if (!visited.includes(node)) {
      // 그 노드를 탐색한 적이 없다면!!
      visited.push(node); // 탐색 배열에 추가
      stack = [...stack, ...graph[node].reverse()]; // 해당 노드의 자식 노드들을 스택에 담는다.
      console.log('visited', visited);
      console.log('stack', stack);
    }
  }

  return visited;
};

console.log(dfs(graph, 1));
```

# BFS
BFS란 Breadth First Search의 약자로 너비 우선 탐색을 말하며  `큐`  자료구조를 사용한 탐색 알고리즘이다.  
같은 레벨 즉, 인접한 노드들을 먼저 탐색하는 방식이다. 

## 동작순서

1. 루트 노드를 시작으로 인접한 노드들부터 차례대로 방문한다.

visit 배열 = 노드의 방문 여부를 체크
queue = 노드의 방문 차례를 기록

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeyT2ug%2Fbtq0qAuqoKn%2FVATbKC9svPfJutMNmp2DAk%2Fimg.png)

**탐색 순서는 아래와 같다**  
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 


![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyrTRg%2Fbtq0u5UvBMA%2Fz1y4WewXjg4Z3j7PyliWcK%2Fimg.png)

**Queue**
큐는 먼저 들어온 요소가 먼저 나가는 FIFO 형식이다.  

## Queue를 이용한 구현 JS

```
const bfs = (graph, startNode) => {
  let visited = []; // 탐색한 노드를 담기 위한 배열 생성
  let queue = []; // 탐색을 위한 큐 배열 생성

  queue.push(startNode); // 탐색 시작

  while (queue.length > 0) {
    // 큐가 비워질 때까지 반복
    let node = queue.shift(); // 큐의 첫번째 노드를 뽑는다
    console.log('node', node);
    if (!visited.includes(node)) {
      // 그 노드를 탐색한 적이 없다면!!
      visited.push(node); // 탐색 배열에 추가
      queue = [...queue, ...graph[node]]; // 해당 노드와 같은 레벨에 있는 노드들을 담는다
      // console.log('visited', visited);
      console.log('queue', queue);
    }
  }

  return visited;
};

console.log(bfs(graph, 1));
```

## 특징

- 출발 노드부터 목표 노드까지의 최단 길이 경로를 보장하기 때문에 최단 경로, 임의의 경로를 찾고 싶을 때 주로 너비 우선 탐색 방법을 사용한다.
- 경로가 매우 길 경우 탐색 가지가 증가하여 메모리를 많이 잡아먹는다.
