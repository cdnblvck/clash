function computeJoinPoint(s1, s2) {
    const numbers = nb => String(nb).split('').reduce((a, b) => parseInt(a) + parseInt(b))
    while (s1 !== s2) {
     s1 += numbers(s1)
     s2 += numbers(s2)
    }
    return s1
}