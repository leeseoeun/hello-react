import './App.css';
import ShopBreadcrumb from './components/ShopBreadcrumb';
import ShopContent from './components/ShopContent';
import ShopHeader from './components/ShopHeader';
import { useState } from 'react';

function App() {

  const [menus, setMenus] = useState([
    'menu1', 'menu2', 'menu3', 'menu4',
  ]);
  const [desc, setDesc] = useState(
    '우리 프론트엔드 삼대장 몰에 오신 것을 환영합니다.'
  );

  return (
    <>
      <ShopHeader menuItems={menus}/>
      <ShopBreadcrumb/>
      <ShopContent desc={desc}/>
    </>
  );
}

export default App;
