// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100


//풀이 1-1) for문
function solution(n) {
  let answer = [];
  for(let i=1; i <= n; i++){
      if(i % 2 === 1){   //혹은 if(i % 2 !== 0)
          answer.push(i);
      }
  }
  return answer;
}

//풀이 1-2) 
function solution(n) {
    var answer = [];
    for (let i = 1; i<=n; i+=2) answer.push(i)
    return answer;
}


//풀이 2) map
function solution(n) {
    return Array(n).fill(0).map((v,index) => v+1+index).filter((v) => v%2);
}