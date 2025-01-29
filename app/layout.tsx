"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#131313]`}>
     
        {!sidebarOpen && (
          <button
            className="md:hidden text-white p-2 absolute top-4 left-4 z-50"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

     
        {sidebarOpen && (
          <button
            className="md:hidden text-white p-2 absolute top-4 right-4 z-50"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        )}

    
        <div
          className={`
            fixed inset-0 bg-black bg-opacity-50 z-30 
            md:hidden 
            transition-opacity duration-300
            ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />

        
        <aside
          className={`
            fixed top-0 left-0 h-full w-64 bg-[#1C1C1C] p-6 
            transition-transform duration-300 z-40
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          <Sidebar />
        </aside>

    
        <main className="md:ml-64 p-12 flex items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
