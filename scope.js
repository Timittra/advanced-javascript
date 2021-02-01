let bonus =20; // global scope

function sum(first, second){
    let result = first + second + bonus;
    // result block scope
    if(result > 9){
        const mood = 'happy';
        console.log(mood);
        var myMood = 'confused';
    }
    //  console.log(mood); undefined
    // console.log(myMood); defined
    // console.log(day);
    // var day = 'friday'; undefined as hosting do not work on value 
    return result; 
}

const output = sum(3, 7); 
// console.log(output);
// console.log(bonus);