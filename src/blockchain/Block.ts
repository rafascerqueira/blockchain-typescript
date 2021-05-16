import { SHA256 } from "crypto-js";

class Block {
  public index: number;
  public previousHash: any;
  public data: any;
  public timestamp: Date;
  public hash: string;
  public nonce: number;
  public difficulty: number;

  constructor(
    index = 0,
    previousHash = null,
    data = { message: "Genesis Block" },
    difficulty = 1
  ) {
    this.index = index;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = new Date();
    this.hash = this.generateHash();
    this.difficulty = difficulty;
    this.nonce = 0;

    this.mine();
  }

  generateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        JSON.stringify(this.data) +
        this.timestamp +
        this.nonce
    ).toString();
  }

  mine() {
    this.hash = this.generateHash();

    while (!/^0*$/.test(this.hash.substring(0, this.difficulty))) {
      this.nonce++;
      this.hash = this.generateHash();
    }
  }
}

export default Block;
