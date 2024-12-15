import Link from 'next/link';

const Links = () =>{
    return(
        <>
            <Link href="/">Home</Link>
            <Link href="/admin/login">Login</Link>
            <Link href="/admin/dashboard">Dashboard</Link>
        </>
    )
}

export default Links;