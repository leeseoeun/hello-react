import './App.css';

function App() {

  return (
    <div>
      <header>
        <img src="https://dummyimage.com/200x100/000/fff&text=Logo" alt="" />
          <nav>
            <ul>
              <li><a href="">Videos to rent</a></li>
              <li><a href="">Videos to buy</a></li>
              <li><a href="">Used DVDs</a></li>
              <li><a href="">Offers</a></li>
            </ul>
          </nav>
      </header>
      <section>
        <ol class="breadcrumb">
          <li><a href="">Home</a></li>
          <li><a href="">Used DVDs</a></li>
          <li>Less than $10</li>
        </ol>
      </section>
      <section class="intro">
        <h1>Videos less than $10</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum non purus quis vestibulum. Pellentesque ultricies quam lacus, ut tristique sapien tristique et.</p>
      </section>
      <section class="product-cards">
        <div class="product-card">
          <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+1" alt="" />
          <h2><a href="">Video title 1</a></h2>
          <p class="original-price">RRP: $18.99</p>
          <p class="current-price">Price you pay <span>$9.99</span></p>
          <p class="saving">Your saving $9</p>
        </div>

        <div class="product-card">
          <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+2" alt="" />
          <h2><a href="">Video title 2</a></h2>
          <p class="original-price">RRP: $18.99</p>
          <p class="current-price">Price you pay <span>$9.99</span></p>
          <p class="saving">Your saving $9</p>
        </div>

        <div class="product-card">
          <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+3" alt="" />
          <h2><a href="">Video title 3</a></h2>
          <p class="original-price">RRP: $18.99</p>
          <p class="current-price">Price you pay <span>$9.99</span></p>
          <p class="saving">Your saving $9</p>
        </div>

        <div class="product-card">
          <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+4" alt="" />
          <h2><a href="">Video title 4</a></h2>
          <p class="original-price">RRP: $18.99</p>
          <p class="current-price">Price you pay <span>$9.99</span></p>
          <p class="saving">Your saving $9</p>
        </div>
      </section>
    </div>
  );
}

export default App;
