import React, { useState, useHook } from 'react';
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
}


const RandomTurtleMaker = ({addTurtle}) => {
  return (
    <div>
      <button onClick={() => addTurtle()}>Add a new random turtle!</button>
    </div>
  );
}


const TurtleFormHookVersion = ({addTurtleFromForm}) => {
  // useState is your replacement for constructor + this.state
  /*
  const [turtle, setTurtle] = useState({
    name: 'What is your turtle name?',
    shellRadius: 0,
    environment: '',
    country: '',
  })
  */
  const [name, setName] = useState('What is your turtle name?');
  const [shellRadius, setShellRadius] = useState(0);
  const [environment, setEnvironment] = useState('');
  const [country, setCountry] = useState('');

  function submitTurtle(event, turtle) {
    event.preventDefault();
    addTurtleFromForm(turtle);
    setName('What is your turtle name?')
    setShellRadius(0);
    setEnvironment('');
    setCountry('');
  }

  return (
    <form onSubmit={(event) => submitTurtle(event, {name, shellRadius, environment, country})}>
      <label>
        Name: <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Shell Radius:
          <input type='number' name='shellRadius' value={shellRadius} onChange={e => setShellRadius(e.target.value)} />
      </label>
      <label>
        Environment:
          <input type='text' name='environment' value={environment} onChange={e => setEnvironment(e.target.value)} />
      </label>
      <label>
        Country:
          <input type='text' name='country' value={country} onChange={e => setCountry(e.target.value)} />
      </label>
      <input type='submit' value='Create a turtle' />
    </form>
  )
}

class TurtleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'What is your turtle name?',
      shellRadius: 0,
      environment: '',
      country: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const { value } = event.target;
    this.setState({
      ...this.state,
      [field]: value,
    });
    /* kinda long... but it works
    switch (field) {
      case 'name':
        this.setState({
          name: value,
          shellRadius: this.state.shellRadius,
        })
        break
      case 'shellRadius':
        this.setState({
          name: this.state.name,
          shellRadius: value,

        })
        break;
    }
    */
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTurtleFromForm(this.state)
    this.postTurtle(this.state);
    this.setState({
      name: 'What is your turtle name?',
      shellRadius: 0,
      environment: '',
      country: '',
    });
  }

  async postTurtle(turtle) {
    const response = await fetch('/turtles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(turtle),
    });

    // To repull the data if you aren't doing live local
    // updates via setState
    /*
    const res = await fetch('/turtles');
    const data = await res.json();
    this.setState({
      turtleData: data
    })
    */
    // handle response as you see fit...
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          Shell Radius:
          <input type='number' name='shellRadius' value={this.state.shellRadius} onChange={this.handleChange}/>
        </label>
        <label>
          Environment:
          <input type='text' name='environment' value={this.state.environment} onChange={this.handleChange}/>
        </label>
        <label>
          Country:
          <input type='text' name='country' value={this.state.country} onChange={this.handleChange}/>
        </label>
        <label>
          Owner:
          <input type='text' name='owner' value={this.state.owner} onChange={this.handleChange}/>
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
      filterValue: 'all',
    };

    this.addTurtle = this.addTurtle.bind(this);
    this.addTurtleFromForm = this.addTurtleFromForm.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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

  handleFilter(event) {
    this.setState({
      filterValue: event.target.value
    })
  }

  render() {
    // this.state && this.props available
    // save space with a jsx spread
    const turtleComponents = this.state.turtleData
      .filter(turtle => {
        if (this.state.filterValue === 'all') {
          return true;
        }
        return turtle.environment === this.state.filterValue;
      })
      .map(turtle => (<TurtleUser key={nanoid()} {...turtle} />));
    return (
      <section>
        <TurtleFormHookVersion addTurtleFromForm={this.addTurtleFromForm}/>
        <select value={this.state.filterValue} onChange={this.handleFilter}>
          <option value='all'>All Types</option>
          <option value='ocean'>Ocean</option>
          <option value='urban'>Urban</option>
          <option value='land'>Land</option>
          <option value='space'>Space</option>
          <option value='sky'>Sky</option>
        </select>
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