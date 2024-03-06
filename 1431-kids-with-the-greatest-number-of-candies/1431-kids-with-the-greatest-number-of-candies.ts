function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // 일단 원본을 복제해주자.
    const originalCandies = [...candies];
    // 캔디들 중에 가장 큰 수를 찾기 위해 내림차순으로 정렬, 첫번째 수를 mostCandy로 지정.
    const mostCandy = candies.sort((a,b) => b-a)[0];
    
    // 정답을 담을 새로운 배열을 생성
    const answerArray:boolean[] = originalCandies.map((cur, idx)=> {
        // 내림차순한 배열의 첫 번째가 가장 큰 수이므로 
        // 순서로 들어오는 캔디와 extra 값을 더한 게 첫 번째보다 큰 지 비교
        return cur + extraCandies >= mostCandy;
    })
    // 만들어진 값을 반환한다.
    return answerArray;
};