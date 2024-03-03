import React from 'react';

interface ImageGalleryProps {
    imageURLs: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageURLs }) => {
    return (
        <div>
            <div>
                {imageURLs.map((url, index) => (
                    <img key={index} src={url} alt={`Image ${index}`} style={{ marginRight: '10px' }} />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;