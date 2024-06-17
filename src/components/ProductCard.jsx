import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import './Products.css';

function ProductCard(props) {
    return (
        <div className='productCard'>
            <h2>{props.name}</h2>
            <p>{props.package}</p>
            <p>{props.price} €</p>
            <div>
            <RemoveButton item={props}/>
            <AddButton item={props}/>
            </div>
        </div>
    );
  }
  
  export default ProductCard;