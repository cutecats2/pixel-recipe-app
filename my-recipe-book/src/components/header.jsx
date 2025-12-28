import logo from "/src/assets/logo.png";

function Header({ onSelectRecipe }) {
  return (
    <div className="menu-screen">
      <img src={logo} alt="Logo" className="menu-logo" />

      <button className="pixel-button" onClick={onSelectRecipe}>
        Chocolate Thumbprint Cookies
      </button>

      <button className="pixel-button">
        Pancakes
      </button>

      <button className="pixel-button">
        Matcha Cake
      </button>
    </div>
  );
}

export default Header;
