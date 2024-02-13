import Head from "next/head";

 function PagesMetaHead({title, keywords, description, image}) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="UTF-8"/>
            <link rel="icon" href={image} type="image/x-icon"/>
            <title>{title}</title>
        </Head>
    );
}

PagesMetaHead.defaultProps = {
    title: "Boxvi",
    keywords: "next.js, react, web, ui, boxvi,boxvisoft, boris quizhpe, boris xavier quizhpe romero, boxaquro, boris quizhpe romero, boris xavier quizhpe ",
    description: "Get the latest news in web development",
    image: "https://cdn-icons-png.flaticon.com/256/2821/2821778.png"
};

export default PagesMetaHead;
