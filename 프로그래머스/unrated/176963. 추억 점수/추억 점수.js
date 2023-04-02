function solution(name, yearning, photo) {
    const map = {};
    name.forEach((name, i) => {
        map[name] = yearning[i];
    });
    
    return photo.map((photo) => (
        photo.reduce((acc, name) => acc + (map[name] || 0), 0)
    ));
}