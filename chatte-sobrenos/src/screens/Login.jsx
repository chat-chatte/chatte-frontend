import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoLogin from '../assets/img/login.png';
import '../style/cadastro-login.css';
export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="container-login">

            <div className="container-login">
                <div className="wrap-login-2">
                    <form className="login-form">
                        <span className="logo"><img src={logoLogin} alt="cadastro"/></span>
                    <div className="login-form-title-2">
                            <span>LOGIN DE FUNCIONÁRIO </span>
                            <br/>
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={email !== '' ? 'has-val input' : 'input' }
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input-2" data-placeholder="E-mail"></span>
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={password !== '' ? 'has-val input' : 'input' }
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input-2" data-placeholder="Senha"></span>
                        </div>

                        <div className="text-center">
                            <span className="txt-1-2">Não possui conta?</span>
                            <Link to="/cadastro" className="txt-2-2">Criar uma conta</Link>
                        </div>

                        <div className="container-form-btn">
                            <button className="login-btn">Login</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="container-bg-2">
                <h1>Slogan da empresa</h1>
            </div>

        </div>
    );
}

export default Login;