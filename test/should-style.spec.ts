import { should } from 'chai';

describe('Should testing Style', () => {
  it('uses should test-style', () => {
    const name: string = 'Gideon';
    const age: number = 30;
    const arrData: Array<number> = [1, 2, 3];
    const objData: object = { name: 'Gideon', age: 30 };
    const boolData: boolean = false;

    should();
    // string
    name.should.be.ok;
    name.should.be.a('string');
    name.should.be.equal('Gideon');
    // number
    age.should.be.ok;
    age.should.be.equal(30);
    age.should.be.a('number');
    // array
    arrData.should.be.ok;
    arrData.should.have.lengthOf(3);
    arrData.should.have.lengthOf(3).include(2);
    arrData.should.be.a('Array');
    // object
    objData.should.be.ok;
    objData.should.have.property('name').equal('Gideon');
    objData.should.have.property('age').equal(30);
    objData.should.be.a('object');
    // boolean
    boolData.should.be.false;
    boolData.should.be.a('boolean');
    boolData.should.equal(false);
  });
});
