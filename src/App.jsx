import { Routes, Route } from 'react-router-dom'
import { Main } from './components/Main'
import { HistoryList } from './components/HistoryList'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:date" element={<HistoryList />} />
      </Routes>
    </div>
  )
}
//    "eslint.codeActionsOnSave.rules": null,
//          STYLE
//  arreglar icono calendario
//  checkbox
//  history

//          LOGICA
//  iconos del payment
//  checkbox cuando selecciono, pierdo el calc
//  history
//  backend
