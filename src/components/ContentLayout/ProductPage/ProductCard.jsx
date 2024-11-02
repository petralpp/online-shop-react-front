import AddButton from '../AddButton';
import RemoveButton from '../RemoveButton';

function ProductCard(props) {

    return (
        <div className='product-card'>
            <div class="product-info">
                <p><b>{props.name}</b></p>
                <p><i>{props.package}</i></p>
            </div>
            <img src={'/images/' + props.img + '.png'}  alt='product'></img>
            <p>{props.price} €</p>
            <div>
                <RemoveButton item={props}/>
                <AddButton item={props}/>
            </div>
        </div>
    );
  }
  
  export default ProductCard;