import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Cart from './Pages/Cart';
import History from './Pages/History';
import Saved from './Pages/Saved';
import Sponsored from './Pages/Sponsored';

function App() {
  return (
    <BrowserRouter> 
      <div className="bg-gray-100 font-serif min-h-screen w-full">
        <div className='flex justify-center pt-4 ' style={{ height: '190vh' }}>
          <div className='grid grid-cols-[9rem,auto] h-[180vh] w-full rounded-r-2xl bg-slate-200 overflow-hidden '>
            <Sidebar />
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account' element={<Account />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/history' element={<History />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/sponsored' element={<Sponsored />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
