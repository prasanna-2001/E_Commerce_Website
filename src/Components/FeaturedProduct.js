import React from 'react'
import { useProductContext } from "../Context/ProductContext"
function FeaturedProduct() {
    const { isLoading, featureProducts } = useProductContext();
    console.log(
        "~file:FeatureProduct.js ~ line 4 ~ featureProducts",
        featureProducts
    );
    return (
        <div>

        </div>
    )
}

export default FeaturedProduct
