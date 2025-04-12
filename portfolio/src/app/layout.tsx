import Navbar from "./Nav/Nav";
import "./globals.css";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <div className="relative min-h-screen">
          <Navbar />
          {/* ✅ 배경 이미지 */}
          <Image
            src="/images/LandingImg.png"
            alt="bg-img"
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        {children}
        </div>
        </body>
    </html>
  );
}
