import Head from 'next/head';
import {useEffect} from "react";
import { productsFetch } from "DataContainer";

function index() {
    useEffect(()=>{
        productsFetch()
    })

    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Hello world1!</h1>
        </div>
    );
}

export default index;