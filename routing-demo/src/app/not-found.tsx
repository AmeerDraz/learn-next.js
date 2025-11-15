import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Not Found Page</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Go back to the home page</Link>
        </>
    );
    
}