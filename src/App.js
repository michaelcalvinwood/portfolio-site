import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import ModalDemo from "./components/ModalDemo";
import ModalCode from "./components/ModalCode";
import Inventions from "./components/Inventions";

function App() {
  const [useModal, setUseModal] = useState(false);
  const [modalDemoInfo, setModalDemoInfo] = useState(null);
  const [modalCodeInfo, setModalCodeInfo] = useState([]);

  console.log('modalCodeInfo', modalCodeInfo);

  return (
    <div>
      { <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio setUseModal={setUseModal} setModalDemoInfo={setModalDemoInfo} modalCodeInfo={modalCodeInfo} setModalCodeInfo={setModalCodeInfo} />
        <Inventions />
        <Experience />
        <Contact setUseModal={setUseModal}/>
        <SocialLinks />
        <Modal useModal={useModal} setUseModal={setUseModal} />
      </div>} 
      {modalDemoInfo && <ModalDemo modalDemoInfo={modalDemoInfo} setModalDemoInfo={setModalDemoInfo} />}
      {modalCodeInfo.length > 0 && <ModalCode modalCodeInfo={modalCodeInfo} setModalCodeInfo={setModalCodeInfo} />}
    </div>
  );
}

export default App;
