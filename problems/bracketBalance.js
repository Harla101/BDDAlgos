/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(str) {
  const openerStack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === '(' || str.charAt(i) === '{' || str.charAt(i) === '[') {
      openerStack.push(str.charAt(i));
    } else if (str.charAt(i) === ')' || str.charAt(i) === '}' || str.charAt(i) === ']') {
      if (openerStack[openerStack.length - 1] === pairs[str.charAt(i)]) {
        openerStack.pop();
      }
    }
  }

  if (openerStack.length > 0) return false;
  return true;
}

export default balancedParens;
