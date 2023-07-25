# 이진 탐색 트리(BST: binary search tree)

## 트리

트리는 계층적인 구조를 표현할 때 사용할 수 있는 자료구조이다.

![image](https://github.com/EungBug/eungbug.github.io/assets/108085046/1183753f-d92c-4160-9baa-3e2b5d77f378)  

- 노드 : 동그라미, 개별 데이터 단위
- 루트 노드 : 부모가 없는 최상위 노드
- 단말 노드 : 자식이 없는 노드
- 크기 : 트리에 포함된 모든 노드의 개수
- 간선 : 노드와 노드를 이어주는 선  
- 높이 : 루트노드 ~ 단말 노드까지의 가장 긴 경로의 간선 수
- 깊이 : 루트 노드로부터의 거리
- 레벨 : 트리의 특정 깊이를 가지는 노드의 집합

트리의 크기가 N일 때, 전체 간선의 개수는 N-1개 이다.

## 이진 탐색 트리란?

이진트리는 모든 노드의 자식 노드가 최대 2개의 노드만을 가진 트리를 말한다.  
이진 탐색이 동작할 수 있도록 고안된 효율적인 탐색이 가능한 자료구조의 일종을 이진 탐색 트리라고 한다.  

이진 탐색 트리는 부모 노드보다 왼쪽 자식 노드가 작고 부모 노드보다 오른쪽 자식 노드가 더 크다는 특징이 있다.

## 이진 탐색 트리 데이터 조회

![image](https://github.com/EungBug/eungbug.github.io/assets/108085046/1ad41e25-d894-4a0e-b0ca-e0db5d945792)

1. 루트 노드부터 방문하여 탐색을 진행한다. > 루트 노드보다 찾고자 하는 값이 작은 경우 왼쪽, 큰 경우 오른쪽으로 이동
2. 현재 노드와 값을 비교 한다. > 현재 노드보다 찾고자 하는 값이 작은 경우 왼쪽, 큰 경우 오른쪽으로 이동
3. 현재 노드와 값을 비교 한다. > 원소를 찾은 경우 탐색을 종료한다.

## 트리의 순회

트리 자료구조에 포함된 노드를 특정한 방법으로 한 번씩 방문하는 방법을 의미한다.

- 전위 순회(pre-order traverse) : 루트를 먼저 방문한다.
- 중위 순회(in-order traverse) : 왼쪽 자식을 방문한 뒤에 루트를 방문한다.
- 후위 순회(post-order traverse) : 오른쪽 자식을 방문한 뒤에 루트를 방문한다.

![image](https://github.com/EungBug/eungbug.github.io/assets/108085046/f68e588e-f005-45a0-bc42-387f111ed495)

- 전위 순회 : A -> B -> D -> E -> C -> F -> G
- 중위 순회 : D -> B -> E -> A -> F -> C -> G
- 후위 순회 : D -> E -> B -> F -> G -> C -> A


## 이진 탐색 트리 코드
```js
class BinarySearchTree {
  constructor(value) {
    //BST의 constructor를 구현-> 이진 탐색 트리의 Node.
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // tree에 value 추가(삽입)
  insert(value) {
    // 인자의 value가 this.value보다 작을 경우, 왼쪽 노드에서 진행.
    if (value < this.value) {
      // this.left에 아무것도 없을 경우, 새로운 자식 노드를 추가.
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀 사용.
        this.left.insert(value);
      }

    // 인자의 value가 this.value보다 클 경우, 오른쪽 노드에서 진행.
    } else if (value > this.value) {
      // this.right에 아무것도 없을 경우, 새로운 자식 노드를 추가.
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        // this.right의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀 사용.
        this.right.insert(value);
      }
		//그것도 아니라면, 입력값이 트리에 들어 있는 경우.
    } else {
      // 이미 value값을 포함하고 있으므로, 아무것도 하지 않는다.
    }
  }

  // tree의 value값 탐색.
  contains(value) {
    // 찾는 value값이 노드의 value와 일치한다면, true return.
    if (value === this.value) {
      return true;
    }
    // 찾는 value값이 노드의 value 보다 작다면, 왼쪽에서 contains 재귀 사용.
    if (value < this.value) {
			// 현재 노드의 왼쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true return.
			// 일치하지 않다면 왼쪽 노드로 이동하여 다시 탐색(재귀)
      return !!(this.left && this.left.contains(value));
    }

    // 찾는 value값이 노드의 value 보다 크다면, 오른쪽에서 contains 재귀 사용.
    if (value > this.value) {
			// 현재 노드의 오른쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true return.
			// 일치하지 않다면 오른쪽 노드로 이동하여 다시 탐색(재귀)
      return !!(this.right && this.right.contains(value));
    }
		// 없다면 false return
  }

	/*
	트리의 순회
  단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 한다.
	*/

	// 전위 순회
  preorder(callback) {
		callback(this.value);
    if (this.left) {
      this.left.preorder(callback);
    };
    if (this.right) {
      this.right.preorder(callback);
    };
  }

	// 중위 순회
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    };
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    };
  }

	// 후위 순회
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    };
    if (this.right) {
      this.right.postorder(callback);
    };
    callback(this.value);
  }

}
```
  
  
[참조](https://velog.io/@ko9612/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Binary-Search-Tree)
