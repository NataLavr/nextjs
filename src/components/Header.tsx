

import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <header className="flex justify-between items-center py-4 px-7">
            <Link href="/">Homepage</Link>
            <Link href="/posts">Blog Posts</Link>

        </header>
    );
}