function maximumWealth(accounts: number[][]): number {
    // 우선 배열 안의 수를 모두 합산하여 새 배열로 만듦
    const newArray:number[] = accounts.map((cur, idx) => {
        return cur.reduce((acc, cur, idx) => {
            return acc+cur;
        })
    })

    // 다음 배열을 큰 수대로 나열
    const sortArray = newArray.sort((a,b) => b-a);

    // 제일 큰 수를 리턴
    return sortArray[0];
};