import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import './Products.css';

function ProductCard(props) {
    return (
        <div className='productCard'>
            <div id="inlineInfo">
            <h2>{props.name}</h2>
            <p><i>{props.package}</i></p>
            </div>
            <p>{props.price} €</p>
            <div>
            <RemoveButton item={props}/>
            <AddButton item={props}/>
            </div>
        </div>
    );
  }
  
  export default ProductCard;