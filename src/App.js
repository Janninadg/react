import logo from './logo.svg';
import react, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/animals';

class App extends Component{
  
  constructor(props) {

    super(props);

    this.state = {
      animals: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Navbar</NavbarBrand>
          </div>
        </Navbar>
        <Menu animals={this.state.animals} />
      </div>
    );
  };
}

export default App;
