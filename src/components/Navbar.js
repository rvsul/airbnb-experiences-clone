import airbnblogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img className="nav-logo" src={airbnblogo} />
    </nav>
  );
}
