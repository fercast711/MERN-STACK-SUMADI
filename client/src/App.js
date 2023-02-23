import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { FormPage, NotFound, TablePage } from "./pages";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/studentList" element={<TablePage dispatch={dispatch}/>}/>
        <Route path="/" element={<FormPage dispatch={dispatch}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
