import Head from 'next/head';
import Header from './Header';
import Banner from './Banner';
import ContentSections from './ContentSections';
import ProjectCards from './ProjectCards';
import GetInvolved from './GetInvolved';

export default function Home() {
    return (
        <>
            <Head>
                <title>Environmental Campaign</title>
            </Head>
            <Header />
            <main>
                <Banner />
                <ContentSections />
                <ProjectCards />
                <GetInvolved />
            </main>
        </>
    );
}
