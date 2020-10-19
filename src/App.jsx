import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Sdata from "./Sdata"
import "./index.css"; 


function App() {
    return (
        <>
            <Heading />
            {Sdata.map((data, index) => {
                return (
                    <Card
                        key={data.id}
                        imgsrc={data.imgsrc}
                        title={data.title}
                        link={data.link}
                    />
                );
            })};

        </>
    )
}

export default App;