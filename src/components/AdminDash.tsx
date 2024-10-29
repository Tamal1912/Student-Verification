'use client'

import React from 'react';
import { GlareCard } from './ui/glare-card';
import Link from 'next/link';

const PremiumCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#334155] to-[#94a3b8] flex justify-center items-center">
      {/* Outer Premium Card */}
      <div className="w-full max-w-5xl bg-[#caf0f8] rounded-xl shadow-2xl p-16 h-[520px] flex flex-wrap justify-center items-center gap-4">
      <GlareCard className="flex flex-col items-center justify-center">
      
       
          <Link href="/student_records">
          
          <h4 className="text-white font-bold text-xl mt-4">Students Records</h4>
          </Link>
        
    </GlareCard>

    <GlareCard className="flex flex-col items-center justify-center">
      <h4 className="text-white font-bold text-xl mt-4">Upload</h4>
      
    </GlareCard>

    <GlareCard className="flex flex-col items-center justify-center">
    
      <h4 className="text-white font-bold text-xl mt-4 text-center">Verification Requests Management</h4>
    </GlareCard>
      </div>
    </div>
  );
};

export default PremiumCard;
