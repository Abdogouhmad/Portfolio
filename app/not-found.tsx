import Link from 'next/link';


export default function NotFound() {
    return (
        <main className="flex h-screen flex-col items-center justify-center dark:text-white text-gray-800 ">
            <h1 className="text-7xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">This page could not be found.</p>
            <Link
                href="/"
                className="rounded-lg bg-gray-300 dark:bg-white px-4 py-2 text-black hover:bg-gray-200 transition"
            >
                Go Home
            </Link>
        </main>
    );
}
