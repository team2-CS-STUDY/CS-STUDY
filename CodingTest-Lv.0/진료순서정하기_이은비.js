// 내 풀이
function solution(emergency) {
    var copy = [...emergency]
    copy.sort((a,b) => b - a)

    var map = new Map()
    copy.map((e, index) => {
        map.set(e, index + 1)
    })
    
    return emergency.map(e => map.get(e))
}


// 다른 사람 풀이 중 가장 괜찮다고 생각한 풀이
function solution(emergency) {
    let sorted = [...emergency].sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}
