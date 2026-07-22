impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut tracker: HashMap<i32, i32> = HashMap::new();
        for n in nums {
            tracker.entry(n).and_modify(|c| *c += 1).or_insert(1);
        }

        let mut output: Vec<(i32, i32)> = tracker.into_iter().collect();
        output.sort_by(|a,b| b.1.cmp(&a.1));
        output.into_iter().map(|(key, _)| key).collect::<Vec<i32>>()[0..k as usize].to_vec()
    }
}
