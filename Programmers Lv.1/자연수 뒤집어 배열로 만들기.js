/*
문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

입출력 예
n	return
12345	[5,4,3,2,1]
 */

// 풀이 1)
function solution(n) {
  let answer = [];
  let arr = n.toString().split("");
  for (var i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }
  return answer;
}

// 풀이 2) 문자풀이
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}

// 풀이 3) 숫자풀이 //WOW
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
