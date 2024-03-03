import React from 'react';
import '/src/assets/styles/App.css';

const Navigation: React.FC = () => {
    return (
        <nav style={{}}>
            <div style={{ height: '130' }}>
                <a href="#" style={{flex: 'none', order: '2'}}>
                    <img style={{ height: 130, }} src="src/assets/pictures/finalLogo.png" alt="OCW Logo" />
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
