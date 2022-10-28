import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Ethereum Mongo DB</title>
        </Head>
        <Navbar />
        {children}
    </>
)

export default Layout;