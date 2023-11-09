// 배열 -> filter 깊은복사
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter((word) => word.length > 6)
console.log(typeof result)
console.log(result.length)
words.push('abcdefg')
console.log(words)
console.log(result)
console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]
//배열에 대한 초기화를 한줄로 끝냄 - 구조분해 할당 -> react -> props
const [r1, r2, r3] = result
console.log(r1)
console.log(r2)
console.log(r3)
