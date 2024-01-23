import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <ToasterProvider/>
        <ModalProvider/>
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}

// https://ui.shadcn.com - CLI component "Mostly for CMS"
// https://clerk.com - Sign in and out modal 
// Cloudinary - picture update
// planetscale - databse 
// react-hot-toast - snack bars

// Our route is /[storeId]/settings, First I need to extract the params 
// Because we are using server components
// We are using next 13 
// That means we are awalys have the params in our server components 

// Model cannot use in The Alert model for delete in Settings page due to different APIroute

// Questions - after coding with Antonio
// 1 Why do we need use "use client" on top ?
// 2 why do we need to encapsulate with fragment <></> ?
// 3 what is params and await ?
// how does dependencies array works?