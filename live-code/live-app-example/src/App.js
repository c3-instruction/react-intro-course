import './App.css';

const TurtleUser = ({ 
  name, 
  shellRadius, 
  favoriteFood, 
  environment, 
  country}) => (
    <div>
      <p>Name: {name}</p>
      <p>Shell radius: {shellRadius}</p>
      <p>Favorite food: {favoriteFood}</p>
      <p>Environment: {environment}</p>
      <p>Country: {country}</p>
    </div>
);

function App() {
  const turtleData = [
    {
      name: 'Gamera',
      shellRadius: '40 meters',
      favoriteFood: 'lava',
      environment: 'sky',
      country: 'japan'
    },
    {
      name: 'Leonardo',
      shellRadius: '1.5 meters',
      favoriteFood: 'pizza',
      environment: 'urban',
      country: 'USA'
    },
    {
      name: 'Leonardo',
      shellRadius: '1.5 meters',
      favoriteFood: 'pizza',
      environment: 'urban',
      country: 'USA'
    },
    {
      name: 'Crush',
      shellRadius: '0.5 meters',
      favoriteFood: 'sea food',
      environment: 'ocean',
      country: 'Aus'
    },
  ];

  const turtleComponents = turtleData.map(turtle => (
    <TurtleUser
      name={turtle.name}
      shellRadius={turtle.shellRadius}
      favoriteFood={turtle.favorite}
      environment={turtle.environment}
      country={turtle.country}
    />
  ))
  return (
    <div>
      <header>
        <h1>Giant monster turtles! Meet other giant monster turtles</h1>
      </header>
      <main>
        <h2>Current turtles near you!</h2>
        <section>
          {turtleComponents}
        </section>    
      </main>
      <footer>
        <div>
          Contact info
        </div>
        <div>
          Address
        </div>
      </footer>
    </div>
  );
}

export default App;
