import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import App from "./components/cadastro/Cadastro";
import Index from "./App";
import Teste from "./components/teste2/Teste";
function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/chat" element={<Index/>}></Route>
                <Route path="/login" element={<Login/>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}