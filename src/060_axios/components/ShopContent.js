import ContentDescription from "./ContentDescription";
import ContentList from "./ContentList";

function ShopContent(props) {
    return (
        <>
            <ContentDescription desc={props.desc}/>
            <ContentList products={props.products}/>
        </>
    );
}

export default ShopContent;
