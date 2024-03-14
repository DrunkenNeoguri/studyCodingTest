function reverseWords(s: string): string {
    // 먼저 양쪽에 띄어쓰기 지우고, 가운데 띄어쓰기 부분을 제거하자
    const newStringArray = s.trim().split(" ");

    // 이제 자리에 맞게 인덱스별로 좁혀가면서 서로의 자리를 바꿔주자.
    for (let i = 0; i < newStringArray.length / 2; i++) {
        [newStringArray[i], newStringArray[newStringArray.length - i - 1]] = [newStringArray[newStringArray.length - i - 1].trim(), newStringArray[i].trim()]
    }

    // 인덱스 중에 띄어쓰기가 있는 항목들을 제거해야함.
    // 새로운 배열을 만들고, 띄어쓰기 항목을 걸러내자.
    const reverseWordArray = [];
    newStringArray.forEach(cur => {
        if (cur.trim() !== "") {
            reverseWordArray.push(cur);
        }
    })

    // 완료되면 각 단어별로 가운데에 띄어쓰기를 넣어 string으로 변환하자.
    return reverseWordArray.join(" ")
};