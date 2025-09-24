import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstaComSono from './components/EstaComSono'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Produto from './components/Produto'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={false} />
      <EstaComSono comSono={false} />
      {
        [
          {nome: "Carlos", email: "carlos@gmail.com", curso:"sistemas", media: "8.0"},
          {nome: "João", email: "joao@gmail.com", curso:"ciencias", media: "10.0"},
          {nome: "Maria", email: "maria@gmail.com", curso: "ads", media: "6.0"}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>)
      }

      <h1>-------------------------------------------------------------------------</h1>
      {
        [
          {nome: "Java", dificuldade: "facil"},
          {nome: "C#", dificuldade: "dificil"},
          {nome: "JS", dificuldade: "simples"},
          {nome: "Python", dificuldade: "simples"}
        ].map((linguagens) => 
          <Linguagens nome={linguagens.nome} dificuldade={linguagens.dificuldade}/>)
      }

      <h1>-------------------------------------------------------------------------</h1>

      {
        [
          {nome: "Mesa", preco: "1000", categoria:"A"},
          {nome: "Cadeira", preco: "2000", categoria:"B"},
          {nome: "Dispositivo", preco: "3000", categoria:"C"}
        ].map((produto) => 
          <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria}/>)
      }      
    </div>
  )
}

export default App