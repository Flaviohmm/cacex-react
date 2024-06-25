import React from "react";
import './App.css';
import './index.css';
import logo from './cacex-logo.jpeg'

function App() {
  return (
    <div className="App">
      <div className="container-app">
        <div className="left flex flex-col h-screen">
          <img src={logo} alt="CACEX Logo" className="logo"/>
          <button className="mt-4 shadow btn-grad focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded">
            Cadastrar
          </button>
        </div>
        <div className="right">
          <div className="login-box">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
              <input
                type="text"
                placeholder="Usuário"
                className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Senha"
                className="border border-gray-300 p-2 rounded w-full mb-6 focus:outline-none focus:border-blue-500"
              />
              <button className="shadow btn-grad focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}         



export default App;