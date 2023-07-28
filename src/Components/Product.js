import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
    return (
        <div>
            <NavLink to={`/singleProduct/${id}`}>
                <div className="card">
                    <figure>
                        <img src={image} alt={name} />
                        <figcaption className='caption'>{category}</figcaption>
                    </figure>
                    <div className="card-data">
                        <div className="card-data-flex">
                            <h3>{name}</h3>
                            <div className="card-data-price">{<FormatPrice price={price} />}</div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Product