import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { HistoryList } from './pages/HistoryList'

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
//          STYLE
//  arreglar icono calendario
//  checkbox
//  history

//          LOGICA
//  iconos del payment
//  history
//  backend
