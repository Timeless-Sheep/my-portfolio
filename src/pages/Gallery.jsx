import React from 'react';
import omen from '../assets/omen.jpeg';
import pexel from '../assets/pexel.jpg';
import prpl from '../assets/prpl.jpg';
import "../style/gallery.css";

const Gallery = () => {
    return (
            <div className="container-gallery">
            <h1 className='container-h1'>Images & Videos highlight</h1>
            <div className="gallery">
                <div className="gallery-item">
                <img className="gallery-image" src={omen} alt="abstract Person" />
                </div>
                <div className="gallery-item">
                <img className="gallery-image" src={pexel} alt="forest" />
                </div>
                <div className="gallery-item">
                <img className="gallery-image" src={prpl} alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
                </div>
                <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
                </div>
                <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                </div>
                <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
                </div>
        </div>
        </div>
    );
}

export default Gallery;
