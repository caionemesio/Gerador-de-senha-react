# Gerador de Senha Simples com React

Este projeto é um simples gerador de senha desenvolvido utilizando React. Ele permite gerar senhas aleatórias e copiá-las para a área de transferência com o clique de um botão.

---

## Tecnologias Utilizadas
- React
- JavaScript

---

## Funcionalidades

### 1. Geração de Senha
- Utiliza a biblioteca `js-generate-password` para gerar senhas aleatórias com um comprimento de 12 caracteres, incluindo símbolos e números.

### 2. Cópia para a Área de Transferência
- A senha gerada pode ser copiada para a área de transferência clicando no botão "Copiar".

---

## Estrutura do Projeto

- `App.js`: Contém o componente principal do aplicativo, onde a lógica para gerar e copiar senhas é implementada.
- `App.css`: Arquivo de estilos para estilização do aplicativo.
- `components/Title.js`: Componente de título para exibir o título "Gerador de Senhas".

---

## Como Utilizar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Execute o aplicativo com `npm start`.
4. Clique no botão "Gerar" para gerar uma nova senha.
5. Clique no botão "Copiar" para copiar a senha gerada para a área de transferência.

---

## Código Principal (App.js)

O código principal do aplicativo está localizado em `App.js` e utiliza o hook `useState` do React para gerenciar o estado da senha e do botão de cópia.

```javascript

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





