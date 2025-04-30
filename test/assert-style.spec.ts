import { assert } from 'chai';

describe('Assert testing style', () => {
  it('uses assert testing style', () => {
    const name: string = 'Gideon';
    const age: number = 30;
    const arrData: Array<number> = [1, 2, 3];
    const objData: object = { name: 'Gideon', age: 30 };
    const boolData: boolean = false;

    // string
    assert.ok(name, 'name should not be empty');
    assert.typeOf(name, 'string');
    assert.equal(name, 'Gideon');
  });
});
