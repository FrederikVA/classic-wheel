

import SocialLinks from "./headerComponents/Socials";
import UserProfile from "./headerComponents/LoginProfile";
import Navigation from "./headerComponents/LogoHome";

function Header() {
  return (
    <header>
      {/* Header content: Social links, login, page navigation, logo */}
      <nav style={{ borderBottom: '1px solid black' }}>
        <ul style={{ display: 'flex', padding: 0, margin: 0, border: 0 }} > 
           <SocialLinks />
           <Navigation />
           <UserProfile />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
