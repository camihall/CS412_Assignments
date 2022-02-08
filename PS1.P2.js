/*
This function should determine the operator (+, *, -, ^, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
    NOTE: this was a bit confusing bc we are also supposed to put the string expression into the outputted function, 
    so the former is how I did it.
*/


(function (){

    const findoperator = (str) =>{
        const op = str[1];
        switch(op){
            case '+': 
                return (str) => parseInt(str[0])+parseInt(str[2]);
                break;//I added this bc its here in the lecture notes, but its never reached, right?
            case '-': 
                return (str) => parseInt(str[0])-parseInt(str[2]);
                break;
            case '*':
                return (str) => parseInt(str[0])*parseInt(str[2]);
                break;
            case '/':
                return (str)=> parseInt(str[0])/parseInt(str[2]);
                break;
            case '^':
                return (str)=> parseInt(str[0])**parseInt(str[2]);
                break;
            case '%':
                return (str)=> parseInt(str[0])%parseInt(str[2]);
            default: break;
        }
    }

    const addexpression = '7+1';
    let addoperator = findoperator(addexpression);
    console.log(`${addexpression} = ${addoperator(addexpression)}`);

    const modexpression = '8%3';
    let modoperator = findoperator(modexpression);
    console.log(`${modexpression} = ${modoperator(modexpression)}`)

    const subex = '4-3';
    let subop = findoperator(subex);
    console.log(`${subex} = ${subop(subex)}`);

    const mulex = '4*3';
    let mulop = findoperator(mulex);
    console.log(`${mulex} = ${mulop(mulex)}`);

    const divex = '9/3';
    let divop = findoperator(divex);
    console.log(`${divex} = ${divop(divex)}`);
    

})();