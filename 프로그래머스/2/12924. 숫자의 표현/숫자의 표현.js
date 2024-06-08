function solution(num) {
	let count = 0;
	
	function dfs(i, sum, check) {
		if (sum === num) {
			count += 1;
			return;
		}
		
		if (i > num 
			|| sum > num 
			|| (sum + i) > num
			|| (!check && (i * 2) > num)) {
			return;
		}
		
		dfs(i + 1, sum + i, true);
		!check && dfs(i + 1, 0, false);            
	}
	
	dfs(1, 0, false);
	
	return count + 1;
}