import Head from 'next/head';

function HelloWord() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Hello world!</h1>
        </div>
    );
}

export default HelloWord;