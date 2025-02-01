import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.less';
import { SmartChatApp } from './components/SmartChatApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<SmartChatApp />} />
        <Route path="/smartChat" element={<SmartChatApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
