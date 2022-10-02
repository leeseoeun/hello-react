import ContentDescription from "./ContentDescription";
import ContentList from "./ContentList";

function ShopContent(props) {
    return (
        <>
            <ContentDescription desc={props.desc}/>
            <ContentList/>
        </>
    );
}

export default ShopContent;
