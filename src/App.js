import './App.css';
import ShopBreadcrumb from './components/ShopBreadcrumb';
import ShopContent from './components/ShopContent';
import ShopHeader from './components/ShopHeader';

function App() {

  const menus = ['menu1', 'menu2', 'menu3', 'menu4',]

  return (
    <>
      <ShopHeader menuItems={menus}/>
      <ShopBreadcrumb/>
      <ShopContent/>
    </>
  );
}

export default App;
