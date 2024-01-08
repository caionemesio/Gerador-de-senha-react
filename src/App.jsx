import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import { GeneratePassword } from 'js-generate-password';
import CopyCplipboard from 'copy-to-clipboard';

export default function App() {

  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("copiar");
  const [buttonClass, setButtonClass] = useState('');

  function generateNewPassword() {
    let newPassword = GeneratePassword({
      length: 12,
      symbols: true,
      numbers: true
    });
    setCopy('Copiar');
    setButtonClass('buttonDefault');
    setPassword(newPassword)
    
  }

  function copyToTransferArea() {
    CopyCplipboard(password);
    setCopy("Copiado");
    setButtonClass('copped');
  }

  return (
    <>
      <Title>Gerador de senhas</Title>
      <div className="card">
        <button onClick={generateNewPassword}>
          Gerar
        </button>

        <button className={buttonClass} onClick={copyToTransferArea}>
          {copy}
        </button>
      </div>
      <h3>{password}</h3>
    </>
  );
}
