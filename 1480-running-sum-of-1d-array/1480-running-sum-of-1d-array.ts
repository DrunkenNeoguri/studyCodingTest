function runningSum(nums: number[]): number[] {
    const newArray:number[] = [];
    
    // reduce를 이용해 하나씩 이전 걸 더해주면서 array에 넣자
    nums.reduce((acc, cur, idx) => {
        newArray.push(acc+cur);
        return acc+cur;
    }, 0)

    // 완성된 array를 반환 
    return newArray;
};