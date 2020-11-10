const { multiplyTogether } = require('./index');
const app = require('./index');

describe('varOrConst', () => {
  it('will throw an error as created is no longer in scope', () => {
    expect(app.varOrConst).toThrowError('created is not defined');
  })
});

describe('templateLiterals', () => {
  it('will return a greeting to the passed in user', () => {
    expect(app.templateLiterals('bob')).toBe('Hello bob how are you today?');
  })
});

describe('arrayCopy', () => {
  it('will return a copied array', () => {
    expect(app.arrayCopy([1, 4, 10])).toEqual([1, 4, 10])
  })

  it('will be a different array in memory', () => {
    const arr = [5];
    expect(app.arrayCopy(arr)).not.toBe(arr);
  })
});

describe('appendNewArray', () => {
  it('will return a new array with the appended entry', () => {
    expect(app.appendNewArray([1, 4, 10], 20)).toEqual([1, 4, 10, 20])
  })
});

describe('objectCopy', () => {
  it('will return a new object with the appended entry', () => {
    expect(app.objectCopy({ prop: true })).toEqual({ prop: true });
  })
});

describe('addToObject', () => {
  it('will return a new object with the passed in property and value', () => {
    expect(app.addToObject({name: 'jim'}, 'age', 40)).toEqual({ name: 'jim', age: 40 });
  })
});

describe('removeFromObject', () => {
  it('will return a new object with the passed in property and value', () => {
    expect(app.removeFromObject({name: 'jim', job: 'engineer'}, 'job')).toEqual({ name: 'jim'});
  })
});

describe('addBasic', () => {
  it('will return the sum of 2 values', () => {
    expect(app.addBasic(2, 10)).toBe(12);
  })
});

describe('addFancy', () => {
  it('will return the sum of 2 values', () => {
    expect(app.addFancy(2, 10)).toBe(12);
  })

  it('add up all the numbers together when there is more than 2 numbers passed in', () => {
    expect(app.addFancy(10, 10, 1)).toBe(21);
  })
});

describe('addAll', () => {
  it('will return the sum of 2 values', () => {
    expect(app.addAll(2, 10)).toBe(12);
  })

  it('will add more than 2 numbers together', () => {
    expect(app.addAll(10, 10, 1)).toBe(21);
  })
});

describe('Person', () => {
  let person = new app.Person('tim');
  it('will return an person instance with a name property', () => {
    expect(person).toEqual({name: 'tim'});
  })

  it('will have  a getName method', () => {
    expect(person.getName()).toBe('tim');
  })
});

describe('PersonClass', () => {
  let person = new app.PersonClass('tim');
  it('will return an person instance with a name property', () => {
    expect(person).toEqual({name: 'tim'});
  })

  it('will have a getName method', () => {
    expect(person.getName()).toBe('tim');
  })
});

describe('add10ToAll', () => {
  it('will add 10 to every element passed in', () => {
    expect(app.add10ToAll([1, 10, 100])).toEqual([11, 20, 110]);
  });
});

describe('multiplyTogether', () => {
  it('will multiply all items together', () => {
    expect(app.multiplyTogether([10, 2, 5])).toEqual(100);
  });
});

describe('negateThenAdd', () => {
  it('will negate each number then add them', () => {
    expect(app.negateThenAdd([1, -10, 5, 4])).toEqual(0);
  });
});