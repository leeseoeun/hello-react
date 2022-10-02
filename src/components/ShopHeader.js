function ShopHeader(props) {
    return(
        <header>
            <img src="https://dummyimage.com/200x100/000/fff&text=Logo" alt="" />
            <nav>
                <ul>
                <li><a href="">{props.menuItems[0]}</a></li>
                <li><a href="">{props.menuItems[1]}</a></li>
                <li><a href="">{props.menuItems[2]}</a></li>
                <li><a href="">{props.menuItems[3]}</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default ShopHeader;
