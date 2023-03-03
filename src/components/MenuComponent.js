import react from 'react';
import { Card, CardImg,CardText,CardImgOverlay, Media, CardTitle, CardBody, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import DishDetail from './DishdetailComponent';
import { Link } from 'react-router-dom';

function RenderMenuItem({animal,onClick}){
    return( 
        <Card>
            <Link to={`/menu/${animal.id}`} >
                <CardImg width="100%" src={animal.image} alt={animal.name} />
                <CardImgOverlay>
                    <CardTitle>{animal.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className='row'>
                    {menu}
            </div>
        </div>
    );
}

export default Menu;