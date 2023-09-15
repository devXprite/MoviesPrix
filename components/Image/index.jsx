"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ src, placeholderSrc, title, name }) => {
    return ( 
        <LazyLoadImage
            className="image"
            src={src}
            placeholderSrc={placeholderSrc}
            alt={title || name}
            effect="blur"
        />
    );
}
 
export default Image;