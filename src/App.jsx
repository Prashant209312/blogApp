import NavbarComponent from "./components/navbar.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuthForm from "./pages/UserAuthForm";
const App = () => {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavbarComponent />} >
                        <Route path="signin" element={<UserAuthForm type="sign-in" />} />
                        <Route path="signup" element={<UserAuthForm type="sign-up" />} />/
                    </Route>

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;