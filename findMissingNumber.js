const findMissingNumber = (arr, len) => {
    const sum = Math.floor((len + 1) * (len + 2) / 2);
    let total = 0;
    for (let i = 0; i < len; i++) {
        total += arr[i]
    }
    return sum - total;
}