import Blockchain from "./Blockchain";

const blockchain = new Blockchain();
blockchain.addBlock({ amount: 4 });
blockchain.addBlock({ amount: 50 });

blockchain.blocks.map((block: any) => console.log(block));
