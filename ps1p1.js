/*
Write a function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
Duplicates are fine, so 'exioi' -> 'xoiie'. Test your function using the string
‘supercalifragilisticexpialidocious’.
*/

(function () {

    const revAlph = (str) =>{
        const ray = Array.from(str);
        const alph_ray = ray.sort();
        const rev_alph_ray = alph_ray.reverse();
        const rev_alph_str = rev_alph_ray.join('');
        return rev_alph_str;
    }
    
    const result = revAlph("supercalifragilisticexpialidocious");
    console.log(result);

})();