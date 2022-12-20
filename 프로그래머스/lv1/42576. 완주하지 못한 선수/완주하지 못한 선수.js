function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (var i = 0, length = participant.length; i < length; i++) {
        
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}