function range(start, end) {
    if (start > end) {
        return [];
    } else {
    // debugger
        let prevArr = range(start + 1, end);
        prevArr.unshift(start);
        return prevArr;
    }
}