// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

function solution(num1, num2){
  const answer = parseInt(num1 / num2);
  return answer;
}

//pasreInt 쓰는 이유 : 정수값만 리턴하기 위해서
//solution(5,3)의 경우 1.6666666666666667 이기 때문에
//pasrseInt 사용하여 문자열 타입의 실수값의 소수점 제거한 후 1 리턴
