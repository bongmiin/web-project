import React from "react";
import "./Page1.css"; 
import Header from "./Header";
import Problem from "./Problem";
import Table from "./table";

const Page1 = () => {

    return (
        <div style={{ padding: "100px" }}>
            <Header />
            <Problem />
            <Table/>
        </div>
    );
};

export default Page1;