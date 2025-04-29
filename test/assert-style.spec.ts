import { expect } from 'chai';

describe('Test Cases using assert-style', () => {
  it('should test all the assertion in types', () => {
    const name: string = 'Gideon';
    const age: number = 30;
    const arrData: Array<number> = [1, 2, 3];
    const objData: Object = { name: 'Gideon', age: '30' };
    const boolData: Boolean = false;

    expect(name).to.be.ok;
    expect(name).to.equal('Gideon');
    expect(name).to.be.a('string');

    expect(age).to.be.ok;
    expect(age).to.be.equal(30);
    expect(age).to.be.a('number');

    expect(objData).to.be.ok;
    expect(objData).to.have.property('name').equal('Gideon');
    expect(objData).to.have.property('age').equal(30);
    expect(objData).to.be.a('Object');

    expect(arrData).to.be.ok;
    expect(arrData).to.have.lengthOf(3);
    expect(arrData).to.have.lengthOf(3).include(2);
    expect(arrData).to.be.a('Array');
  });
});
