import React from 'react';
import Header from './components/Header'
import './App.css';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';

const NavBar = (props) => (
  <nav style={{display: 'inline-block', border: 'solid'}}>
    { props.children }
  </nav>
);

const NavItem = ({text}) => (
  <div className='navItem'>
   { text } 
  </div>
);

const TurtleUser = ({ 
  name, 
  shellRadius, 
  favoriteFood, 
  environment, 
  country}) => (
    <div>
      <p>Name: {name}</p>
      <p>Shell radius: {shellRadius} meters</p>
      <p>Favorite food: {favoriteFood}</p>
      <p>Environment: {environment}</p>
      <p>Country: {country}</p>
    </div>
);

TurtleUser.propTypes = {
  name: propTypes.string.isRequired,
  shellRadius: propTypes.number.isRequired,
  environment: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  owner: propTypes.string,
}


const RandomTurtleMaker = ({addTurtle}) => {
  return (
    <div>
      <button onClick={() => addTurtle()}>Add a new random turtle!</button>
    </div>
  );
}

class TurtleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'What is your turtle name?',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTurtleFromForm({
      name: this.state.name,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' value={this.state.name} onChange={this.handleChange}/>
        </label>
        <input type='submit' value='Create a turtle'/>
      </form>
    )
  }

}

class TurtleList extends React.Component {
  constructor(props) {
    // boilerplate
    super(props);

    this.state = {
      turtleData: [],
    };

    this.addTurtle = this.addTurtle.bind(this);
    this.addTurtleFromForm = this.addTurtleFromForm.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('/turtles');
      const body = await response.json();
      this.setState({
        turtleData: body
      });
    } catch (err) {
      console.error('There was a problem reaching the endpoint! Are you connected?');
    }
  }

  componentWillUnmount() {
    // cleanup
  }

  addTurtleFromForm(turtle) {
    this.setState({
      turtleData: [turtle, ...this.state.turtleData]
    })
  }

  addTurtle() {
    const names = ["John the world's oldest living turtle", 'Yurtle', 'Mitch'];
    const shellRadii = [0.25, 1000, 42];
    const food = ['pizza', 'plankton and what not', 'chicken'];
    const environments = ['box', 'tank', 'space'];
    const countries = ['japan', 'fire nation', 'discworld'];
    const newTurtle = {
      name: names[Math.floor(Math.random() * names.length)],
      shellRadius: shellRadii[Math.floor(Math.random() * shellRadii.length)],
      favoriteFood: food[Math.floor(Math.random() * food.length)],
      environment: environments[Math.floor(Math.random() * environments.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
    };

    this.setState({
      turtleData: [...this.state.turtleData, newTurtle]
    });
  }

  render() {
    // this.state && this.props available
    // save space with a jsx spread
    const turtleComponents = this.state.turtleData.map(turtle => (<TurtleUser key={nanoid()} {...turtle} />));
    return (
      <section>
        <TurtleForm addTurtleFromForm={this.addTurtleFromForm}/>
        {turtleComponents}
        <RandomTurtleMaker addTurtle={this.addTurtle}/>
      </section>
    );
  }
}

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
    <NavBar>
      <NavItem text='home'/>
      <NavItem text='message turtles'/>
      <NavItem text='see turtles'/>
      <NavItem text='be turtles'/>
    </NavBar>
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