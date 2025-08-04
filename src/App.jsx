import { useMediaQuery } from '@mui/material';
import MobileView from './component/MobileView';
import DesktopView from './component/DesktopView';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './component/Error';
import Office from './component/Office';
import Cafe from './component/Cafe';
import About from './component/About';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <><div className='w-100 h-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isMobile ? ( <MobileView/> ) : ( <DesktopView/> ) }></Route>
          <Route path='/office' element={<Office/>}></Route>
          <Route path='/cafe' element={<Cafe/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
