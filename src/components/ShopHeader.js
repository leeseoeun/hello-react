function ShopHeader(props) {
    return(
        <header>
            <img src="https://dummyimage.com/200x100/000/fff&text=Logo" alt="" />
            <nav>
                <ul>
                    {
                        props.menuItems.map(item =>
                            <li key={item}><a href="">{item}</a></li>                            
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default ShopHeader;
