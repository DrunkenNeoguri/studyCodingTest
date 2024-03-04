function fizzBuzz(n: number): string[] {
    const newArray:string[] = [];
    let i= 1;
    // i가 n보다 커질 때까지 반복
    while (i <= n) {
        // 3의 배수도, 5의 배수로도 나뉘어짐
        if (i % 3 === 0 && i % 5 === 0) {
            newArray.push("FizzBuzz");
        // 3의 배수만 나뉘어짐
        } else if (i % 3 === 0 && i % 5 !== 0) {
            newArray.push("Fizz");
        // 5의 배수만 나뉘어짐
        } else if(i % 3 !== 0 && i % 5 === 0) {
            newArray.push("Buzz");
        // 나머지는 문자열로 치환
        } else {
            newArray.push(`${i}`)
        }
        i++;
    }
    // 만들어진 array를 반환
    return newArray;
};