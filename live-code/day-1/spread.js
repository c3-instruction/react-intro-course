// array spreads
const fruit = ['apple', 'pear', 'orange', 'grape'];

const [first, second, third, fourth] = fruit;

console.log(first, second, third, fourth);

// skip slots
const [x , , , y] = fruit; // x = 'apple' y = 'grape'

// default slots
const [a, b, c = 'maybe'] = ['yes', 'no'];

// swap a and b
let one = 2;
let two = 4;
[one, two] = [one, two];



function useState(value = '') {
  function setState(newValue) {
    value = newValue;
  }

  return [value, setState]; // tuple
}

// useState is a spot this is used a lot
function someComponent() {
  const [nameState, updateName] = useState('tim');

  // some contrived update logic...
  const update = true;

  updateName('new name');

  // fake react code. You can't actually run this
  //return <div>{ nameState }</div>
}

// We can do this with objects to!
const user = { name: 'sally', location: 'AZ'};
const { name: userName, location } = user;
console.log(userName, location);


// immutable. Creates new object
const moreFruit = ['kiwi', ...fruit];
// mutates
fruit.unshift('kiwi')
console.log(moreFruit);
console.log(fruit);

console.log([...fruit, 'kiwi']);

console.log(fruit === moreFruit);

// last defined prop is what is written when there are dupes
const newUser = { ...user, age: 50, location: 'WA' };
console.log(newUser);



