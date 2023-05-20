import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/feed";
import Edit from "./pages/edit";
import Post from "./pages/post";
import Lermais from "./pages/lermais";


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Feed/>}/>
          <Route exact path="/post" element={<Post/>}/>
          <Route exact path="/edit/:id" element={<Edit/>}/> 
          <Route exact path="/lermais" element={<Lermais/>}/>          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
