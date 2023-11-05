import {BrowserRouter} from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import './App.module.scss';

function App() {
    return (
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
    )
}

export default App;
