// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100


// 풀이 1-1) 함수선언식
function solution(num1, num2){
  let answer = num1 % num2;
  return answer;
}


// 풀이 1-2) 화살표함수
const solution = (num1, num2) => num1 % num2



// 풀이 2) 조건문
function solution(num1, num2) {
    if (num2 === 0) {
        pass
    } else {
        return num1 % num2
    }
}