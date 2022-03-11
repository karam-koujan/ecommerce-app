import * as React from "react";
import Header from "./header";

interface props{
    children:React.ReactNode;
}

const Layout = ({children}:props)=>{
    return(
        <>
        <Header/>
        <main>
            {children}
        </main>
        </>
    )
}

export default Layout ;





