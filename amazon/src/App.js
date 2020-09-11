import React from 'react';
import Header from './components/Header';
//import Footer from './components/Footer'
import { LoginComponent } from './components/Login'
import { RegisterComponent } from './components/register'
const App = () => {
    const companyname = 'pega systems';
    return <div>
        <Header title={companyname} />
        <h1>Welcome to Pega</h1>
        <LoginComponent />
        <RegisterComponent/>
    </div>;
};

export default App;

//learnt class based component
//and function based comopnents
