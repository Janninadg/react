import react, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/animals';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Routes, Route, Navigate} from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component{
  
  constructor(props) {

    super(props);

    this.state = {
      animals: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {

    return (
      <div>
        <Header />
        <Routes>
                <Route path='/home' element={
                    <Home 
                    dish={this.state.animals.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    />
                }> </Route>
                <Route exact path='/menu' element={<Menu animals={this.state.animals}  />}></Route>
                <Route exact path='/contactus' element={<Contact />}></Route>
                <Route path="/" element={<Navigate replace to="/home" />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  };
}

export default Main;
