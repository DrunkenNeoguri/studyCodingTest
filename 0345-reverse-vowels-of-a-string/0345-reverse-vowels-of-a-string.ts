function reverseVowels(s: string): string {
    // 일단 모음을 모아놓은 집합을 만들어두자.
    const vowels = ["a", "e", "i", "o", "u"];

    // 그리고 문자열의 내용을 잘게잘게 잘라 배열로 만들어주자.
    const stringArray = s.split('');

    // 글자가 바뀌어야하는 index 값을 모아놓은 배열을 만들자.
    const stringIndexArray = [];

    let i = 0;
    while (i < stringArray.length ) {
        // 만약 잘게 자른 문자열의 현 글자가 모음에 해당한다면 해당 모음의 순서를 index 배열에 넣어주자.
        if (vowels.includes(stringArray[i].toLowerCase())) { 
            stringIndexArray.push(i);
        }
        i++;
    }

    // case 1: 모음이 없거나 바꿀 필요가 없는 경우
    if (stringIndexArray.length === 0 ) {
        return s
    // case 2: 모음이 있는 경우
    } else {
        let l  = 0;
        // 길이를 2로 나누지 않으면 한번 바꾼 값이 분기점 index 이후 다시 바꾸므로 원상태가 된다.
        while ( l < stringIndexArray.length / 2) {
            // 이제 배열 stringArray 속 각 인덱스에 해당하는 글자의 자리들을 바꿔주자.
            const prevWord = stringArray[stringIndexArray[l]];
            const nextWord = stringArray[stringIndexArray[(stringIndexArray.length - 1) - l]];
            stringArray[stringIndexArray[l]] = nextWord;
            stringArray[stringIndexArray[(stringIndexArray.length - 1) - l]] = prevWord;
            l++;
        }
        // 다 바꿔주면 이제 글자의 배열을 join 메소드를 통해 다 합쳐주자.
        return stringArray.join('');
    }
};