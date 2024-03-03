import React from 'react';

const UnderNav: React.FC = () => {
    return (
        <div className="under-nav" style={{width:'100%'}}>
            <div style={{display:'flex', justifyContent:'space-between', paddingLeft:20, paddingRight:20}}>
                <p style={{width:'60%'}}><b>See the result here </b></p>
                <p style={{width:'40%'}}>Create your ad here! </p>
            </div>
        </div>
    );
};

export default UnderNav;