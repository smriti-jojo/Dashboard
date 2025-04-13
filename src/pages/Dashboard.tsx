import React from 'react';
import Sidebar from '../components/Sidebar.tsx';
import Navbar from '../components/Navbar.tsx';
import Tabs from '../components/Tabs.tsx';

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-screen bg-slate-100 overflow-hidden">
        <Sidebar />
        <div className="w-full flex-grow h-screen overflow-y-auto">
          <Navbar selected="Dashboard" />
          <div className="px-[3%] py-[3%]">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
