// 단순 스테이지 개수만큼 반복문에서 states 만큼 중복 for문을 사용하는 경우
// 최대 500 * 200000번 횟수가 필요로 하게 된다. => 오래걸리는 문제 발생
// 1. 내림차순으로 정렬
// 2. 가장 높은 스테이지 부터 실패율을 구한다.
// 3. 배열에 0번째 아이템을 확인한다.
// 3-1. 현재 스테이지보다 작은 값이면 실패율에 0, 인원수도 0을 저장
// 3-2. 현재 스테이지랑 동일하면 배열에서 현재 스테이지랑 동일한 모든 값을 꺼낸다. 실패율을 계산. 인원수도 저장
// 4. 최종적으로 실패율에 따라 배치.
function solution(N, stages) {
    const fail = new Map();
    const stageInfo = [];
    stages.sort((a, b) => b - a);
    
    stageInfo[N + 1] = 0;
    const value = stages[0];
        
    if (value > N) {
        const index = stages.findIndex(s => N + 1 > s);
        
        if (index === -1) {
            return Array.from({ length: N }, (_, i) => i + 1);
        } else {
            stageInfo[N + 1] = index;
            stages.splice(0, index);
        }
    }
    
    for (let i = N; i > 0; i -= 1) {
        const value = stages[0];

        if (i > value || !value) {
            fail.set(i, 0);
            stageInfo[i] = stageInfo[i + 1];
        } else {
            const index = stages.findIndex(s => i > s);
            
            if (index === -1) {
                fail.set(i, stages.length / (stages.length + stageInfo[i + 1]));
                stages.splice(0, stages.length);    
            } else {
                fail.set(i, index / (index + stageInfo[i + 1]));
                stageInfo[i] = stageInfo[i + 1] + index;
                stages.splice(0, index);    
            }            
        }
    }
    
    return [...fail.entries()].sort((a, b) => {
        const diff = b[1] - a[1];
        
        if (diff === 0) {
            return a[0] - b[0]
        }
        
        return diff;
    }).map(([i]) => i);
}