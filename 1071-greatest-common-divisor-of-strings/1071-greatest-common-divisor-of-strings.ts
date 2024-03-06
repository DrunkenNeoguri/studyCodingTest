function gcdOfStrings(str1: string, str2: string): string {
    // 같은 영역을 자르고 남은 거만 하면 되는 게 아닐까?

    // 앞문장이 더 길고, 앞문장을 잘라낸 게 뒷문장과 같을 경우
    if (str1.length > str2.length && str1.substring(0, str2.length) === str2) {
        return gcdOfStrings(str2, str1.slice(str2.length)); 

    // 뒷문장이 더 길고, 뒷문장을 잘라낸 게 앞문장과 같을 경우
    } else if (str2.length > str1.length && str2.substring(0, str1.length) === str1) {
        return gcdOfStrings(str1, str2.slice(str1.length));

    // 길이가 동일하고, 앞문장과 뒷문장이 일치할 경우
    } else if (str1.length === str2.length && str1 === str2) {
        return str1;
    }

    // 모두에도 해당되지 않으면 빈 문자열 반환;
    return "";
};