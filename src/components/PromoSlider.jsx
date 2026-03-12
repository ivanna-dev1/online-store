import React from 'react'
import { useState } from 'react';
import products from '../products'


export const PromoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const promoProducts = products.filter(product => product.onSale === true);
    console.log(promoProducts);
    const currentProduct = promoProducts[currentIndex];
    return (
        <section id="promo-slider" className=" bg-pink-50 p-6 flex flex-col gap-4 border-b border-pink-100" >
            <h2>Гарячі пропозиції</h2>
            <div>
                <img src={currentProduct.image} alt={currentProduct.name} />
                <h3>{currentProduct.name}</h3>
                <p>{currentProduct.price}</p>
            </div>
        </section>
    );
};

