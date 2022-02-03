/*
Write a function that accepts two input parameters: a string, and a decorator function. The
function should execute the passed decorator function on the passed string and return the
result.
*/

(function(){

    const pipe = (str, f) => f(str);

    /* 
    function that returns an array containing fragments of the 
    input string broken on the character ‘c’.
    */
    const result = pipe ("supercalifragilisticexpialidocious", (str) =>{
        let ray = str.split('c');
        for(let i=1; i<ray.length; i++){
            ray[i] = "c"+ray[i];
        }
        return ray;
    })
    //const result = lambda("supercalifragilisticexpialidocious")
    console.log(result);

    /*
    For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
    function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
    contains the original string, the modified string, the total number of As in the modified string,
    and the overall length of the modified string:
    */
    const res = pipe("supercalifragilisticexpialidocious", (str) =>{
        let stats = {
            ogstr: str,
            modstr: str.replaceAll('a','A'),
            totA: 0,
            strlen: str.length
       };
       for(letter of stats.ogstr){
           if(letter=='a'){
               stats.totA++;
           }
       }
       return stats;
   })
   //const res = lambda("supercalifragilisticexpialidocious");
   console.log(res);

})()