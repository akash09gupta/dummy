import { useMediaQuery } from '@mui/material';
import MobileView from './component/MobileView';
import DesktopView from './component/DesktopView';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './component/Error';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <><div className='w-100 h-100'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isMobile ? ( <MobileView/> ) : ( <DesktopView/> ) }></Route>
          <Route path='*' element={<Error/>}></Route>
          {/* <Route path='/office' element={isMobile ? ( <MobileView/> ) : ( <DesktopView/> ) }></Route>
          <Route path='/cafe' element={isMobile ? ( <MobileView/> ) : ( <DesktopView/> ) }></Route>
          <Route path='/about' element={isMobile ? ( <MobileView/> ) : ( <DesktopView/> ) }></Route> */}
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
