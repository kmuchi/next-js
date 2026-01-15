import Navigation from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:{
    template:"%s | Next Movieds",
    default:"Loading...",
  },
  description:"The best movies on the best framewokr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
