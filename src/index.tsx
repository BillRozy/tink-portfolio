import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accounts from './components/Accounts';
import Portfolio from './components/PortfolioList';
import AccountInfoProvider from './components/AccountInfoProvider';
import UnifiedDashboard from './components/UnifiedDashboard';
import Favorites from './components/Favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<AccountInfoProvider />} />
        <Route path="accounts" element={<AccountInfoProvider />}>
          <Route index element={<Accounts />} />
          <Route
            path=":accountId"
            element={
              <>
                <Accounts />
                <Portfolio />
              </>
            }
          />
        </Route>
        <Route path="dashboard" element={<UnifiedDashboard />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// check fix for url polyfill here (add to webpack conf): fallback: { url: require.resolve('url-polyfill') }
