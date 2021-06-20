// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function peek(lastStackEl){
    return lastStackEl[lastStackEl.length - 1];
}

function valid_Parentheses(parens) {
    const stack = [];
    const openPar = ['('];
    const closedPar = [')'];
    for (let i = 0; i < parens.length; i++) {
        if (openPar.includes(parens[i])) {
            stack.push(parens[i])
        } else if (stack.includes(peek(stack))) {
            stack.pop()
        } else {
            return false;
        }
    }
    return stack.length === 0
}