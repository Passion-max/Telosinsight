import Image from 'next/image';
import Link from 'next/link';
import ConnectBtn from '@/app/ui/connectBtn';

export default function HeaderBar () {
    return <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
         <div className="col-md-3 mb-2 mb-md-0">
              <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                <Image
                  src="/logo.png" 
                  height={64} 
                  width={250} 
                  alt="logo"
                />
                
              </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><Link href="#" className="navLink px-2 navLink-active">Home</Link></li>
              <li><Link href="#" className="navLink px-2">Explore</Link></li>
              <li><Link href="#" className="navLink px-2">Community</Link></li>
              <li><Link href="#" className="navLink px-2">About Us</Link></li>
            </ul>

            <div className="col-md-3 text-end">
             <ConnectBtn />
            
            </div>
    </header>
}