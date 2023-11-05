import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";

function  App(){
  return (
    <BrowserRouter>
      <BaseLayout/>
    </BrowserRouter>
  )
}

export default App;
