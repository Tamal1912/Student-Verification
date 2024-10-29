import React from 'react'
interface SidebarProps {
  selectedTab: string;
  setSelectedTab: (tabName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedTab, setSelectedTab }) => {
  // Example function to handle button click for credentials

  return (
    <>
     <div className="bar flex flex-col flex-wrap gap-2 pt-6 px-3 border-none bg-white rounded-xl absolute left-1 sm:left-16 md:left-20 top-28 sm:top-24 md:top-28 border-black h-[10rem] sm:h-[26rem] w-full sm:w-[14rem] md:w-[15rem]">
  <button className="btn bg-slate-500 text-white border-none" onClick={() => setSelectedTab("Your Profile")}>Your Profile</button>
  <button className="btn bg-slate-500 text-white border-none" onClick={() => setSelectedTab("Credentials")}>Credentials</button>
</div>

    </>
  )
}

export default Sidebar