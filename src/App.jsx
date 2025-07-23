import { useMediaQuery } from '@mui/material';
import MobileView from './component/MobileView';
import DesktopView from './component/DesktopView';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      {isMobile ? (
        <MobileView/>
      ) : (
        <DesktopView/>
      )}
    </>
  );
}

export default App;
