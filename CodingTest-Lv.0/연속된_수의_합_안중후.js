//나의 풀이

function solution(num = 1, total = 0) {
    if( ( 1 <= num && 100 >= num ) && ( 0 <= total && 1000 >= total ) ){
        let middleValue = Math.ceil(total/num)
        let initialValue = Math.ceil(middleValue - (num/2))
        let values = []
        for(i=0; i<num; i++){
            values.push( initialValue + i )
        }
        return values
    }
    const answer = values.toSorted();
    return answer;
}

//타인의 풀이

let solution = (n,t) =>Array(n).fill(t/n-(n-1)/2).map((e,i)=>e+i)

//를 풀어보면

const solution = ( number,total ) => 

    Array(number).fill
      (total/number-(number-1)/2).map
      ((evaluated,index) => evaluated + index )

//4,14
//number길이(4) 만큼의 배열에 14/4 - 3/2 = 2 로 채워진 배열에 대해  [2 + 0, 2 + 1, 2 + 2 , 2 + 3] = [ 2 , 3 , 4 , 5 ]의 배열이 완성됨 
//한 줄의 메소드체이닝, return 생략
//짧아서 좋음 ㅎㅎ
