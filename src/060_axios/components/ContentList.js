function ContentList(props) {
    return (
        <section class="product-cards">
            {
                props.products.map(products => {
                    return (
                        <div class="product-card">
                            <img src={products.url} alt="" />
                            <h2><a href="">{products.title}</a></h2>
                            <p class="original-price">RRP: $18.99</p>
                            <p class="current-price">Price you pay <span>$9.99</span></p>
                            <p class="saving">Your saving $9</p>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default ContentList;
