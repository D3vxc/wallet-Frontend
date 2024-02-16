import axios from "axios";
import Router from "./Router";

axios.defaults.baseURL = "http://localhost:7000";
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
