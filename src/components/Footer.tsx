
function Footer() {
  return (
    <footer style={{backgroundColor: '#110f0f', marginTop:20}}>
      <nav style={{marginLeft:20, marginRight:20}}>
        <div style={{height:200, width:'100%', borderBottom:'0.8px solid black'}}>

        </div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: 10, padding: 10}}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"  }}>
            <a style={{padding:10}} href="#">About us</a>
            <a href="#">Contact</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"  }}>
            <a style={{padding:10}} href="#">Terms of use</a>
            <a href="#">Rules for adverticing</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"  }}>
            <a style={{padding:10}} href="#">Sponsors</a>
            <a href="#">Support the project</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"  }}>
            <a style={{padding:10}} href="#">Secure trading</a>
            <a href="#">Personal data politics</a>
          </div>
        </div>
      </nav>
      <p style={{padding: 0, marginBottom:0, textAlign: "center"}}>&copy; 2024 - On Classic Wheels</p>
    </footer>
  );
}

export default Footer;
