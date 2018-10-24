const Block = require('./block');

class Blockchain {
  constructor(difficulty = 1) {
    this.blocks = [new Block()];
    this.index = 1;
    this.difficulty = difficulty;
  }

  getLastBlock() {
    return this.blocks[this.blocks.length - 1];
  }

  addBlock(data) {
    const index = this.index;
    const previousHash = this.getLastBlock().hash;

    const block = new Block(index, previousHash, data, this.difficulty);

    this.index++;
    this.blocks.push(block);
  }

  isValid() {
    for (let i = 1; i < this.blocks.length; i++) {
      const block = this.blocks[i]
      const previousBlock = this.blocks[i - 1];

      if (block.hash !== block.generateHash()) {
        return false;
      }
      if (block.index !== (previousBlock.index + 1)) {
        return false;
      }
      if (block.previousHash !== previousBlock.hash) {
        return false;
      }
    };
    return true;
  }
};

module.exports = Blockchain;
