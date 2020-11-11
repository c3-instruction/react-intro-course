import React from 'react';
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

class TurtleList extends React.Component {
  render() {
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
    // save space with a jsx spread
    const turtleComponents = turtleData.map(turtle => (<TurtleUser {...turtle} />));
    return (
      <section>
        {turtleComponents}
      </section>
    );
  }
}

const Header = () => (
  <header>
    <h1>Giant monster turtles! Meet other giant monster turtles</h1>
  </header>
)

const Footer = () => (
  <footer>
    <div>
      Contact info
   </div>
    <div>
      Address
    </div>
  </footer>
);

const MainContent = () => (
  <main>
    <h2>Current turtles near you!</h2>
    <TurtleList />
  </main>
);

function App() {
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App;