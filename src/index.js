import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index.html에서 <div id="root"></div>를 가지고 와서
const root = ReactDOM.createRoot(document.getElementById('root'));
// 렌더링
root.render(
  <React.StrictMode>
    {/* (App.js) App 컴포넌트를 마운트 하고 */}
    <App />
  </React.StrictMode>
);
