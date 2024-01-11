// import React from 'react';
// const Carousel = () =>{
//     return(
//         <div>Carousel</div>
//     )
// }
// export default Carousel

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './data';
const ProductCarousel = ({products}) =>{
    return(
        <div>
            <Carousel 
                showDots={true}
                responsive={responsive}
                
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 500ms ease"
                transitionDuration={1000}
            >
                {products}
                </Carousel>
        </div>
    )
}
export default ProductCarousel