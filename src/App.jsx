import './App.css'
import { AddCar, CarDetail, CarList, EditCar } from './Pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="container">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarList />}></Route>
          <Route path="/car/create" element={<AddCar />}></Route>
          <Route path="/car/edit/:id" element={<EditCar />}></Route>
          <Route path="/car/detail/:id" element={<CarDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
