function numberOfSteps(num: number): number {
    let counter:number = 0;

    // 계속해서 나뉘어져야 한다면 재귀함수를 만들자
    const recursion = (reNum: number) => {
        // 재귀된 값이 최종적으로 0이면 counter를 반환
        if (reNum === 0){
            return counter;
        }
        
        // 아니면 일단 카운트하자
        counter++;

        // 나눈 값이 짝수면 짝수몫을 가지고 재귀
        if (reNum%2 === 0) {
            reNum = reNum / 2;
            return recursion(reNum);
        
        // 나눈 값이 홀수면 1을 빼주고 재귀
        } else if (reNum%2 !== 0) {
            reNum = reNum -1;
            return recursion(reNum);
        }
    }

    return recursion(num);
};