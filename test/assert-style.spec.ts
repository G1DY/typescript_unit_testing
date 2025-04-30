import { assert } from 'chai';

describe('Assert testing style', () => {
  it('uses assert testing style', () => {
    const name: string = 'Gideon';
    const age: number = 30;
    const arrData: Array<number> = [1, 2, 3];
    const objData: { name: string; age: number } = { name: 'Gideon', age: 30 };
    const boolData: boolean = false;

    // string
    assert.ok(name, 'name should not be empty');
    assert.typeOf(name, 'string');
    assert.equal(name, 'Gideon');
    // number
    assert.ok(age, 'age should not be empty');
    assert.typeOf(age, 'number');
    assert.equal(age, 30);
    // array
    assert.ok(arrData, 'array data should not be empty');
    assert.typeOf(arrData, 'Array');
    assert.lengthOf(arrData, 3);
    assert.include(arrData, 2);
    // object
    assert.ok(objData, 'object data cannot be empty');
    assert.typeOf(objData, 'object');
    assert.property(objData, 'name');
    assert.property(objData, 'age');
    assert.strictEqual(objData.name, 'Gideon');
    assert.strictEqual(objData.age, 30);
  });
});
