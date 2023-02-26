import react, {Component} from 'react';
import { Card, CardImg,CardText,CardImgOverlay, Media, CardTitle, CardBody } from 'reactstrap';
import DishDetail from './DishdetailComponent';



class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedAnimal : null
        }

        console.log("Menu componet constructor is invoked");
    }

    componentDidMount(){
        console.log("Menu componetDidMount is invoked");
    }

    onAnimalSelected(animal){
        this.setState({selectedAnimal:animal});
    }

    renderAnimal(animal){
        if(animal != null){
            return(
               <DishDetail dish={animal}/>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render(){

        const menu = this.props.animals.map((animal) => {
            return(
                <div key={animal.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onAnimalSelected(animal)}>
                        <CardImg width="100%" src={animal.image} alt={animal.name} />
                        <CardImgOverlay>
                            <CardTitle>{animal.name}</CardTitle>
                            <CardText>{animal.description}</CardText>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                        {menu}
                </div>
                <div className='row'>
                    {this.renderAnimal(this.state.selectedAnimal)}
                </div>
            </div>
        );
    }
}

export default Menu;