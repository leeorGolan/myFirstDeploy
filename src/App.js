import logo from './logo.svg';
import './App.css';
import Box from "@mui/material/Box";
import ModalOne from './components/ModalOne';
//https://cdnb.artstation.com/p/assets/images/images/017/238/581/large/leeor-golan-arrowboy2.jpg?1555176369


function App() {
  return (
    <Box display ='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <h1>Hello</h1>
      <ModalOne/>
      <img alt='' src='https://cdnb.artstation.com/p/assets/images/images/017/238/581/large/leeor-golan-arrowboy2.jpg?1555176369'/>
    </Box>
  );
}

export default App;
