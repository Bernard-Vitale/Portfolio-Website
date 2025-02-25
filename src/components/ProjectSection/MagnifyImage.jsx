import React from 'react';
import './ProjectSection.css';

const MagnifyImage = ({ path, alt, close }) => {
    return (
        <div className="imageModal" onClick={close}>
            <div className="modalContent" >
                <img src={path} alt={alt} className="magnifiedImage" />
                <button className="closeBtn" onClick={close}>X</button>
            </div>
        </div>
    );
};

export default MagnifyImage;