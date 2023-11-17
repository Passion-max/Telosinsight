
import { Inter } from 'next/font/google';
import './ui/globals.css';
import './ui/mycustomcss.css';
import { Web3Modal } from "../context/Web3Modal";

import 'bootstrap/dist/css/bootstrap.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Telos Insight - AI-Powered Smart COntract Advisor',
  description: 'AI-Powered Smart COntract Advisor',
}

// useEffect(() => {
//   import("bootstrap/dist/js/bootstrap");
// }, []);

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      
      <body className={`${inter.className}`}>
      <Web3Modal>
        {children} 
      </Web3Modal>
       </body>
    </html>
  )
}
