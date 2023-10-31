import Head from "next/head";
import { Inter } from "next/font/google";

import { PostCard, Categories, PostWidget } from "@/components";

const posts = [
    { title: "React Testing", excerpt: "Learn React Testing" },
    { title: "React With Tailwind", excerpt: "Learn React with Tailwind" },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`container mx-auto px-10 mb-8 ${inter.className}`}>
            <Head>
                <title>Create Next App</title>
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {posts.map((post, idx) => (
                        <PostCard key={idx} post={post} />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </main>
    );
}
