const Blockchain = require('./blockchain');

const blockchain = new Blockchain(1);
blockchain.addBlock({ amount: 4 });
blockchain.addBlock({ amount: 50 });
blockchain.addBlock({ amount: 50 });

console.log(blockchain.blocks);
console.log(blockchain.isValid());
