/*
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"
입출력 예 설명
입출력 예 #1

my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
입출력 예 #2

my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
*/


// 풀이 1) split
function solution(my_string) {
  return my_string.split('').reverse().join('');
}

// 풀이 2) spread 전개구문
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}

// 풀이 3) for
function reverseStr(my_string) {
  const s = new Array;
  for (i of my_string.split('')) {
    s.unshift(i)
  }
  return s.join('')
}




/*
일반적으로 reverse() 메서드를 사용하는 방법이 더 효율적입니다. reverse() 메서드는 내장 메서드로써 JavaScript 엔진에서 최적화되어있는 경우가 많아서 빠르게 동작할 수 있습니다.

for문을 사용하여 문자열을 거꾸로 변환하는 방법은 문자열을 하나씩 더하는 방식으로 작동하기 때문에 성능이 약간 떨어질 수 있습니다. 이는 문자열을 새로운 문자열에 계속 추가하는 과정에서 메모리 재할당과 복사가 발생하기 때문입니다. 그러나 일반적인 상황에서는 성능 차이가 크게 느껴지지 않을 수 있습니다.
*/