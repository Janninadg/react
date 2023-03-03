import react from 'react';
import { Card, CardImg,CardText,CardImgOverlay, Media, CardTitle, CardBody } from 'reactstrap';
import DishDetail from './DishdetailComponent';

function RenderMenuItem({animal,onClick}){
    return( 
        <Card onClick={() => onClick(animal.id)}>
            <CardImg width="100%" src={animal.image} alt={animal.name} />
            <CardImgOverlay>
                <CardTitle>{animal.name}</CardTitle>
                <CardText>{animal.description}</CardText>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.animals.map((animal) => {
        return(
            <div key={animal.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem animal={animal} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className='container'>
            <div className='row'>
                    {menu}
            </div>
        </div>
    );
}

export default Menu;