import './App.css';
import ShopBreadcrumb from './components/ShopBreadcrumb';
import ShopContent from './components/ShopContent';
import ShopHeader from './components/ShopHeader';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [menus, setMenus] = useState([]);
  const [desc, setDesc] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 서버에서 데이터를 가지고 온다. 그리고 가지고 온 데이터로 state 값을 set 한다
    setMenus(['menu1', 'menu2', 'menu3', 'menu4',]);
    setDesc('우리 프론트엔드 삼대장 몰에 오신 것을 환영합니다.');
    axios.get('https://jsonplaceholder.typicode.com/photos')
      // 정상적으로 데이터를 가지고 올 때
      .then(res => {
        setProducts(res.data.slice(0,4));
      })
      // 정상적으로 데이터를 가지고 오지 못할 때
      .catch(err => {
        console.log(err);
      });
  }, []);

  // function buttonOnClick() {
  //   console.log('button click!');
  // }
  // const buttonOnClick = function() {
  //   console.log('button click!');
  // };
  const buttonOnClick = () => {
    console.log('button click!');
  };

  return (
    <>
      <button onClick={buttonOnClick}>새로고침</button>
      <ShopHeader menuItems={menus}/>
      <ShopBreadcrumb/>
      <ShopContent desc={desc} products={products}/>
    </>
  );
}

export default App;
