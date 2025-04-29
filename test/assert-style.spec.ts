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
  });
});
