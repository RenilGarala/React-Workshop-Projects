import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FacCard from './Components/faculty/FacCard'
import FacTable from './Components/faculty/FacTable'
import LapCard from './Components/laptops/LapCard'
import LapTable from './Components/laptops/LapTable'
import Spidata from './Components/spi/Spidata'
import TableData from './Components/spi/TableData'
import TodosCard from './Components/todos/TodosCard'
import TodosTable from './Components/todos/TodosTable'
import FacDetail from './Components/faculty/FacDetail'
function App() {


  return (
    <>
      <div>
        {/* Spi Data */}
        {/* <Spidata/> */}
        {/* <TableData/> */}

        {/* todos data */}
        {/* <TodosTable/> */}
        {/* <TodosCard/> */}

        {/* laptop data */}
        {/* <LapTable/> */}
        {/* <LapCard/> */}

        {/* faculty data */}
        {/* <FacTable/> */}
        {/* <FacCard/> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FacCard/>}/>
            <Route path='/fac/:id' element={<FacDetail/>}/>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
