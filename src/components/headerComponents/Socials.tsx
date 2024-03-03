
const SocialLinks = () => {
    return (
        <div style={{width:'40%', position: 'static', padding: 10, margin: 10, border: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{position: 'absolute', top: 10, left: 10}}>
                <a href="#"><img style={{height: '30px', paddingRight: 10}} src="src/assets/icons/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img style={{height: '30px', paddingRight: 10}} src="src/assets/icons/youtube.svg" alt="Youtube" /></a>
                <a href="#"><img style={{height: '30px'}} src="src/assets/icons/instagram.svg" alt="Instagram" /></a>
            </div>
            <div className="links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '120px', paddingTop: 65}}>
                <a href="#" className="buttonDefault" >Marketplace</a>
                <a href="#">Forum & News</a>
            </div>
        </div>    
    );
};

export default SocialLinks;