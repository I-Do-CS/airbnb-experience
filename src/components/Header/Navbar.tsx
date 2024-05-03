import logo from "../../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="shadow-lg">
      <div className="container mx-auto p-6 flex justify-start items-center">
        <img src={logo} alt="arbnb logo" className="w-24" />
      </div>
    </nav>
  );
}
