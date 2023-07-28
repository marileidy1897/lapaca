import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    return(
        <> 
            <Header></Header>
            <Navbar> </Navbar>
            <Home></Home>
            <Footer> </Footer>
        </>
    );
}

export default App;