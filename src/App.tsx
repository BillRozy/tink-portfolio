/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import MarketInfoProvider from './components/MarketInfoProvider';
import MainLayout from './components/MainLayout';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div
      css={{
        height: '100%',
        margin: '0',
      }}
      className="App"
    >
      <MarketInfoProvider>
        <MainLayout
          main={<Outlet />}
          top={<Header />}
          side={<SideBar />}
        ></MainLayout>
      </MarketInfoProvider>
    </div>
  );
}

export default App;
