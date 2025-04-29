import { expect } from 'chai';
import Calculator from '../src/calculator';

describe('Test Calculator Class', () => {
  it('Should test sum', () => {
    // Arrange
    const calc = new Calculator();
    // Act
    const result = calc.add(2, 3);
    // Assert
    expect(result).to.equal(5);
  });
  it('Should subtract correctly', () => {
    // Arrange
    const calc = new Calculator();
    // Act
    const result = calc.subtract(7, 2);
    // Assert
    expect(result).to.equal(5);
  });
  it('Should multiply correctly', () => {
    // Arrange
    const calc = new Calculator();
    // Act
    const result = calc.multiply(7, 2);
    // Assert
    expect(result).to.equal(14);
  });
  it('Should divide correctly', () => {
    // Arrange
    const calc = new Calculator();
    // Act
    const result = calc.divide(4, 2);
    // Assert
    expect(result).to.equal(2);
  });
  it('Should throw an error while dividing by zero', () => {
    // Arrange
    const calc = new Calculator();
    // Assert
    expect(() => calc.divide(10, 0)).to.throw('Cannot divide a number by 0');
  });
});
