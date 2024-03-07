function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // 우선 심어진 케이스를 고려하기 위해 배열을 복사
    let newBed = [...flowerbed];

    // 꽃이 심어질 때마다 꺾어질 카운트
    let nowCount = n;
    
    // 반복문을 돌리기 위한 차례
    let i = 0;

    while(i < flowerbed.length) {
        // 만약 한 개짜리의 화단이고 아무것도 심어있지 않을 경우 - (틀렸던 테스트 케이스)
        if (flowerbed.length === 1 && newBed[i] === 0) {
            return true;
        }
        // 우선 맨 앞쪽의 화단이 0 이고, 다음 화단도 0인가?
        if (i === 0 && newBed[i] === 0 && newBed[i+1] === 0) {
            // 심어주고 카운트 깎는다.
            newBed[i] = 1;
            nowCount = nowCount - 1;
            // 맨 끝쪽의 화단이 0이고, 이전 화단도 0인가?
        } else if (i === flowerbed.length -1 && newBed[i] === 0 && newBed[i-1] === 0) {
            // 심어주고 카운트 깎는다.
            newBed[i] = 1;
            nowCount = nowCount - 1;
        // 양쪽의 화단이 모두 다 0있는가?
        } else if (newBed[i-1] === 0  && newBed[i] === 0 && newBed[i+1] === 0) {
            // 심어주고 카운트 깎는다.
            newBed[i] = 1;
            nowCount = nowCount - 1;
        }
        i++;
    }

    // nowCount가 남아있으면 화단 못 심은 게 있는 거니 false, 아니면 다 심은 거라 true;
    return nowCount > 0 ? false : true;
};