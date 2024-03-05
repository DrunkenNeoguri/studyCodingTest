function mergeAlternately(word1: string, word2: string): string {
    // 먼저 어느 쪽이 긴지 판단한다.
    const longLength = word1.length >= word2.length ? word1.length : word2.length;

    // 새로운 단어를 배치할 문자열을 생성
    let newWord = "";

    // 합칠 때마다 카운터 올려줄 변수를 생성
    let counter = 0;

    // 카운터는 긴 문자열의 수 만큼 돌게 되므로 반복문
    while (counter < longLength) {

        // 도중에 문자열1의 배열이 끊기면 문자열 2만 추가하자
        if (word1[counter] === undefined) {
            newWord = newWord + word2[counter]    

        // 반대로 도중에 문자열2의 배열이 끊기면 문자열 1만 추가하자
        } else if (word2[counter] === undefined) {
            newWord = newWord + word1[counter]    

        // 문제가 없다면 둘을 하나씩 합친다.
        } else {
            newWord = newWord + word1[counter] + word2[counter];
        }
        counter++
    }

    // 이렇게 반환된 단어를 출력
    return newWord;
};