function solution(participant, completion) {
  const participantSorted = participant.sort();
  const completionSorted = completion.sort();
  
  return participantSorted.find((participant, i) => participant !== completionSorted[i]);
}