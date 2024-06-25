import React from "react";
import './App.css';
import './index.css';
import logo from './cacex-logo.jpeg'

function App() {
  return (
    <div className="App">
      <div className="container-app flex flex-col md:flex-row h-screen">
        <div className="left flex-col">
          <img src={logo} alt="CACEX Logo" className="logo md:mb-0"/>
          <button className="mt-4 shadow btn-grad focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded">
            Cadastrar
          </button>
        </div>
        <div className="right flex-1 flex items-center justify-center bg-gray-100 p-4 md:p-12">
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
              <button className="shadow btn-grad focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
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