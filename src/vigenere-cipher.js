const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let index = 0;
    let result = '';
    message = message.toUpperCase();
		key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }
      result += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[index++ % key.length])) % this.alphabet.length];
    }
    return this.value ? result : result.split('').reverse().join('');

  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    
    let index = 0;
    let result = '';
    message = message.toUpperCase();
		key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];    
        continue;
      }

      let decrypt = this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[index++ % key.length]) % this.alphabet.length;
      if (decrypt >= 0)
        result += this.alphabet[decrypt];  
      else
        result += this.alphabet[this.alphabet.length + decrypt];
    }
    return this.value ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
