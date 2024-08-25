/**
 * function to check parenthesis
 * @param {string} s The input string
 * @returns {bool} Returns `true` if parenthesis are valid and `false` if not  
 */
function isValid(s:string):boolean {
    if(s.length <= 1 || s[0] === ")" || s[0] === "]" || s[0] === "}"){
        return false;
    }
    let stack:string[] = [];
    let isValid = false;
    for(let i=0;i<s.length;i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i]);
        } else if(stack[stack.length - 1] === "(" && s[i] === ")" || stack[stack.length - 1] === "{" && s[i] === "}" || stack[stack.length - 1] === "[" && s[i] === "]"){
            stack.pop();
        } else {
            return isValid;
        }
    }
    if(stack.length === 0){
        isValid = true;
        return isValid;
    }
    return isValid;
}