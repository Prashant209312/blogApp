import NavbarComponent from "./components/navbar.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavbarComponent />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;