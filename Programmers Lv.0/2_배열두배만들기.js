// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000


//풀이 1
function solution(numbers) {
  let answer = [];
  
  for(let i=0; i<numbers.length; i++){
      answer.push(numbers[i]*2);
  }
  return answer;
}
//for문 풀이
//answer 빈배열을 만들고, for 반복문으로 numbers의 길이전까지 반복한 변수 값에 *2 값 push하기



//풀이 2
function solution(numbers) {
  return numbers.map(i=>i*2);
}
//map 풀이
//각각 요소에 대해 한번씩 순서대로 불러 *2한 값으로 배열만들기



//풀이 3
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
//reduce 풀이
//
