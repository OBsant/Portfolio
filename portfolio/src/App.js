//Styles
import "./styles/main.sass";
//Components
import { ContainerProfile } from "./components/ContainerProfile";
import { Navbar } from "./components/Navbar";
import { ContainerAbout } from "./components/ContainerAbout";
import { ContainerProjects } from "./components/ContainerProjects";
import { ContainerContacts } from "./components/ContainerContacts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContainerProfile />
      <ContainerAbout />
      <ContainerProjects />
      <ContainerContacts />
      <Footer />
    </div>
  );
}

export default App;
