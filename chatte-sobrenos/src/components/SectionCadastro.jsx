import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoRegister from '../assets/img/register.png';

export const SectionCadastro = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setDate] = useState('');


    return (
        <div className="container">

            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="logo"><img src={logoRegister} alt="cadastro" /></span>
                        <div className="login-form-title">
                            <span>CADASTRO DE FUNCIONÁRIO</span>
                            <br />
                        </div>

                        <div className="wrap-input">
                            <input
                                className={name !== '' ? 'has-val input' : 'input'}
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={email !== '' ? 'has-val input' : 'input'}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="E-mail"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={birthday !== '' ? 'has-val input' : 'input'}
                                type="date"
                                value={birthday}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== '' ? 'has-val input' : 'input'}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Senha"></span>
                        </div>

                        <div className="text-center">
                            <span className="txt-1">Já possui uma conta?</span>
                            <Link to="/login" className="txt-2">Faça login!</Link>
                        </div>

                        <div className="container-form-btn">
                            <button className="login-btn">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-bg">
                <h1>SLOGAN DA EMPRESA</h1>
            </div>
        </div>
    );
}

export default SectionCadastro;