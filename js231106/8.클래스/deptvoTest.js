import { DeptVO }  from './deptvo.js';

const dvo = new DeptVO(30,'개발부','서울');

console.log(dvo);
console.log(dvo.getDeptno);
console.log(dvo.deptno);
console.log(dvo.getDname);
console.log(dvo.getLoc);