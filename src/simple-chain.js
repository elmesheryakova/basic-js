// @ts-nocheck
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === undefined) {
      value = '';
    } else if (typeof value !== 'string' && value !== null) {
      value = value.toString();
    }
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (this.arr[position - 1] === undefined || typeof position !== 'number') {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arr.splice([position - 1], 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
