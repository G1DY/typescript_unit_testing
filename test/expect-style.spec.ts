import { expect } from 'chai';

describe('Test Cases using Expect', () => {
  it('expect test style', () => {
    const name: string = 'Gideon';
    const age: number = 30;
    const arrData: Array<number> = [1, 2, 3];
    const objData: Object = { name: 'Gideon', age: 30 };
    const boolData: Boolean = false;
    // string
    expect(name).to.be.ok;
    expect(name).to.equal('Gideon');
    expect(name).to.be.a('string');
    // number
    expect(age).to.be.ok;
    expect(age).to.be.equal(30);
    expect(age).to.be.a('number');
    // object
    expect(objData).to.be.ok;
    expect(objData).to.have.property('name').equal('Gideon');
    expect(objData).to.have.property('age').equal(30);
    expect(objData).to.be.a('Object');
    // array
    expect(arrData).to.be.ok;
    expect(arrData).to.have.lengthOf(3);
    expect(arrData).to.have.lengthOf(3).include(2);
    expect(arrData).to.be.a('Array');
    // boolean
    expect(boolData).to.be.false;
    expect(boolData).to.equal(false);
    expect(boolData).to.be.a('Boolean');
  });
});
