function solution(str1, str2) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');
    
    const str1list = [];
    const str2list = [];
    
    for (let i = 0; i < str1.length - 1; i += 1) {
        if (alphabet.includes(str1[i]) && alphabet.includes(str1[i + 1])) {
            str1list.push(str1[i] +str1[i + 1]);
        }
    }    

    for (let i = 0; i < str2.length - 1; i += 1) {
        if (alphabet.includes(str2[i]) && alphabet.includes(str2[i + 1])) {
            str2list.push(str2[i] + str2[i + 1]);
        }
    }

    const 겹 = new Set([ ...str1list, ...str2list ]);
    let 합 = 0;
    let 교 = 0;

    for (let str of 겹) {
        합 += Math.max(
            str1list.filter((v) => v === str).length,
            str2list.filter((v) => v === str).length
        );
    }

    for (let str of 겹) {
        교 += Math.min(
            str1list.filter((v) => v === str).length,
            str2list.filter((v) => v === str).length
        );
    }

    if (!합) {
        return 1 * 65536
    }
    
    return Math.floor((교 / 합) * 65536)

}
