import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`container mx-auto px-10 mb-8 ${inter.className}`}>
            <Head>
                <title>Create Next App</title>
            </Head>
        </main>
    );
}
