import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FooterSection from "./components/footer/footerSection";
import Header from "./components/Header/Header";
function App() {
  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Admissions", path: "/admissions" },
    { label: "Student Life", path: "/studentLife" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="App">
        <Header topBanner="/assets/Images/TopBannerHeader.png">
          <NavBar logo="/assets/Images/Logo.png" items={menuItems} />
        </Header>
        
        <main>
          <Outlet /> 
        </main>

        <FooterSection />
    </div>
  );
}

export default App;