function ContentDescription(props) {
    return (
        <section class="intro">
            <h1>Videos less than $10</h1>
            <p>{props.desc}</p>
        </section>
    );
}

export default ContentDescription;
