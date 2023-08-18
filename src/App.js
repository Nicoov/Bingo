
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Bingo from './bingo'
import Loteria from './lota';

function DesktopBingoAndLoteria() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Loteria />}>
        </Route>
        <Route path='/bingo' element={<Bingo />}>
        </Route>
      </Routes>
    </div>
  )
}


export default DesktopBingoAndLoteria;
