import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './components/Todo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
)
