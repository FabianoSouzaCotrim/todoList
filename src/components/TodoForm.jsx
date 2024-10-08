import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!value || !category) return
    console.log(value, category)
    addTodo(value, category)
    setValue("")
    setCategory("")
  }

  return <div className="todo-form">
    <h2>criar tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={value}
        placeholder='Digite o título'
        onChange={(e)=> setValue(e.target.value)}
        />

        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Tabalho">Tabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
    </form>
  </div>
  
}

export default TodoForm