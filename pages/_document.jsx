import { Html, Head, Main, NextScript } from 'next/document';
import { getInitColorSchemeScript } from '@mui/joy/styles';

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                {getInitColorSchemeScript()}
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;