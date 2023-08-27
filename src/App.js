import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [useModal, setUseModal] = useState(false);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio setUseModal={setUseModal}/>
      <Experience />
      <Contact setUseModal={setUseModal}/>
      <SocialLinks />
      <Modal useModal={useModal} setUseModal={setUseModal} />
    </div>
  );
}

export default App;
