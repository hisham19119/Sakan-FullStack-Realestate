// "use client";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import localFont from "next/font/local";

// import "./globals.css";
// import { useEffect } from "react";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// import "./globals.css";

// // const expoFont = localFont
// // Load Expo Arabic locally
// const expoArabic = localFont({
//   src: [
//     {
//       path: "../public/fonts/ExpoArabic-Book.ttf",
//       // weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-expo", // Define a CSS variable for the font
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   useEffect(() => {
//     console.log("Hydration debug - Client HTML:", document.body.innerHTML);
//   }, []);
//   return (
//     <html lang="ar">
//       <body
//         // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         className={expoArabic.className}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient and QueryClientProvider
import "./globals.css";
import { useEffect } from "react";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load Expo Arabic locally
const expoArabic = localFont({
  src: [
    {
      path: "../public/fonts/ExpoArabic-Book.ttf",
      style: "normal",
    },
  ],
  variable: "--font-expo", // Define a CSS variable for the font
});

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log("Hydration debug - Client HTML:", document.body.innerHTML);
  }, []);

  return (
    <html lang="ar" suppressHydrationWarning={true}>
      <body className={expoArabic.className}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
