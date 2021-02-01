const nums =[1, 2, 3,4, 5,6, 7, 8];

// const part  = nums.slice(2, 5);
const remove = nums.splice(2, 5 , 99, 88, 77); // inject 99, 88, 77 in that replaced places. work on splice only
// console.log(remove);
// console.log(nums);

const together = nums.join(","); 

console.log(together);