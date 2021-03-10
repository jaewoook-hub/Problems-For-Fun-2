// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    //find distances inbetween spaceStations
    let distances = []
    c.sort((a,b)=>a-b)
    for (let i = 0; i < c.length-1; i++) {
        const dist = Math.floor(Math.abs(c[i + 1] - c[i]) / 2)
        distances.push(dist)
    }
    //find max distances before and after
    const before = Math.abs(c[0] - 0)
    const after = Math.abs(n - c[c.length - 1])-1
    return Math.max(...distances,before,after)
}