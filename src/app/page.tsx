 'use client'
import React from "react";
import Navbar from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection";



export default function Home() {
  
  return (
    <>
   <div className="container max-h-screen">
   <Navbar></Navbar>
   <HeroSection></HeroSection>

   </div>
    </>
    
  );
}
