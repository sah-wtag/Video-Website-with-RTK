import logoImage from "../../assets/images.jpeg";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <img className="h-10" src={logoImage} alt="Sadman React Learning" />
        </a>
        <a href="/">
          <span className="text-xl font-bold text-slate-800 hover:text-red-600">
            Sadman's Video Platform
          </span>
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
        </div>
      </div>
    </nav>
  );
}
