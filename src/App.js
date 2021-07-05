import "./App.css";
import { BrowserView, MobileView } from "react-device-detect";
import WebApp from "./web/WebApp";

function App() {
  return (
    <>
      <BrowserView>
        <WebApp />
      </BrowserView>
      <MobileView></MobileView>
    </>
  );
}

export default App;
