import { useMediaQuery } from '@mui/material';
import MobileView from './component/MobileView';
import DesktopView from './component/DesktopView';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './component/Error';
import Office from './component/Office';
import Cafe from './component/Cafe';
import About from './component/About';
import Desk from './component/Office/DeskComponent/desk';
import Sofa from './component/Home/HomeSofaComponent/Sofa';
import Stool from './component/Cafe/CafeStoolComponent/Stool';
import Counter from './component/Cafe/CafeCounterComponent/Counter';
import Chair from './component/Office/ChairComponent/Chair';
import ExecutiveChair from './component/Office/ExecutiveChairComponent/ExecutiveChair';
import ErgonomicChair from './component/Office/ErgonomicChairComponent/ErgonomicChair';
import VisitorChair from './component/Office/VisitorChairComponent/VisitorChair';
import LeatherChair from './component/Office/LeatherChairComponent/LeatherChair';
import Bed from './component/Home/HomeBedComponent/Bed';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <><div className='w-100' style={{height:"100%"}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isMobile ? ( <MobileView/> ) : ( <DesktopView/> ) }></Route>
          {/* Office sub routes */}
          <Route path='/office' element={<Office/>}></Route>
          <Route path='/office/desk' element={<Desk/>}></Route>
          <Route path='/office/chair' element={<Chair/>}></Route>
          <Route path='/office/executiveChair' element={<ExecutiveChair/>}></Route>
          <Route path='/office/ergonomicChair' element={<ErgonomicChair/>}></Route>
          <Route path='/office/visitorChair' element={<VisitorChair/>}></Route>
          <Route path='/office/leatherChair' element={<LeatherChair/>}></Route>

          {/* Home sub routes */}
          <Route path='/home/bed' element={<Bed/>}></Route>
          <Route path='/home/sofa' element={<Sofa/>}></Route>

          {/* Cafe sub routes */}
          <Route path='/cafe' element={<Cafe/>}></Route>
          <Route path='/cafe/stool' element={<Stool/>}></Route>
          <Route path='/cafe/counter' element={<Counter/>}></Route>

          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
