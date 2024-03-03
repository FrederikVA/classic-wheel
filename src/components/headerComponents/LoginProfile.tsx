import React from 'react';
let loginStatus = false;
const UserProfile = () => {
    return (
        <div style={{width:'40%', position: 'static', padding: 10, margin: 10, border: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{ position: 'absolute', top: 10, right: 10}}>
                if (isLoggedIn) {
                    <a href="">
                        <img style={{height: '30px', paddingLeft: 10}} src="src/assets/icons/circle-check-regular.svg" alt="Profile Picture" />
                    </a>
                } else {
                    <a href="">
                        <p style={{color: 'black'}}>Login</p>
                        <img style={{height: '30px', paddingLeft: 10}} src="src/assets/icons/circle-user-regular.svg" alt="Profile Picture" />
                    </a>
                }
                
                
            </div>
            <div className="links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '120px', paddingTop: 65}}>
                <a href="#">Events & Clubs</a>
                <a href="#">Other</a>
            </div>
        </div>
    );
};

export default UserProfile;