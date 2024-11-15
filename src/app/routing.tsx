import Link from "next/link";

export default function Routing() {
    return (
        <div>
            <Link href="/">
                <a className="mr-5 hover:text-white">Home</a>
            </Link>
            <Link href="/app/components/aboutus">
                <a className="mr-5 hover:text-white">About Us</a>
            </Link>
            <Link href="/app/components/contact">
                <a className="mr-5 hover:text-white">Contact Us</a>
            </Link>
            <Link href="/app/privacypolicy">
                <a className="mr-5 hover:text-white">Privacy Policy</a>
            </Link>
        </div>
    );
}
