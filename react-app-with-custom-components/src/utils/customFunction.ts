
/**
 * concat of two string
 * @param {string} a.
 * @param {string} b.
 * @returns {string} - return concat of a and b.
 */
function myCustomFunction(a: string, b: string): string {
  if(!a && !b) {
    return '';
  }
  return `${a || ''} ${b ||  ''}`;
}

export {
  myCustomFunction
}