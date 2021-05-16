import Blockchain from "./Blockchain";

const blockchain = new Blockchain();
blockchain.addBlock({ amount: 4 }, 2);
blockchain.addBlock({ amount: 50 }, 3);
blockchain.addBlock({ amount: 125 }, 4);

blockchain.blocks.map((block: any) => console.log(block));
