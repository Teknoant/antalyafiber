import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://www.antalyafiber.com'),title:{default:'Antalya Fiber | Fiber Optik, Network ve Güvenlik Sistemleri',template:'%s | Antalya Fiber'},description:'Antalya fiber optik altyapı, yapısal kablolama, network, güvenlik kamera sistemleri, servis ve onarım çözümleri.',alternates:{canonical:'/'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
