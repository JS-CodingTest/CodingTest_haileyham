// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 10,000
// 0 ≤ num2 ≤ 10,000

// 풀이1. 삼항연산자
function solution(num1, num2) {
  const answer = num1 === num2 ? 1 :-1;
  return answer;
}

// <삼항연산자>
// 연산자 : ?:
// 예시 : x ? y : z
// 설명 : x가 참이면 y를 반환, 거짓이면 z반환
// num1 === num2 가 참이면 1 반환, 거짓이면 -1반환


// 풀이2. if문
function solution(num1, num2) {
    if (num1 == num2){
        return 1;
    }
    else{
        return -1;
    }
}