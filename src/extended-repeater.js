const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition
  let additionRepeat = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';

  if (addition === undefined) addition = '';
  else addition = String(addition);

  let additionString = `${addition}${additionSeparator}`.repeat(additionRepeat).slice(0, -additionSeparator.length);

  return `${str}${additionString}${separator}`.repeat(repeatTimes).slice(0, -separator.length);
}

module.exports = {
  repeater
};
