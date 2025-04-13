import React, { JSX, useState } from 'react';
import { IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AssistantIcon from '@mui/icons-material/Assistant';
import { ArrowDropDown, ArrowDropUp, Assignment, DataExploration, Diversity3, East, ExpandLess, ExpandMore, GridView, Info, LocalShipping, Message, MoreHoriz, Paid, Settings, ShoppingCart } from '@mui/icons-material';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaidIcon from '@mui/icons-material/Paid';
import profile_pic from '../images/profile.jpg';

interface MenuItem {
  title: string;
  icon: React.ReactElement;
}

export default function Sidebar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState<boolean>(true);
  const [isPaymentMenuOpen, setIsPaymentMenuOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const MainMenuOpen = () => setIsMainMenuOpen(!isMainMenuOpen);
  const PaymentMenuOpen = () => setIsPaymentMenuOpen(!isPaymentMenuOpen);

  const HomeMenu: MenuItem[] = [
    { title: 'Dashboard', icon: <GridViewIcon /> },
    { title: 'Shipments', icon: <LocalShippingIcon /> },
    { title: 'Orders', icon: <ShoppingCartIcon /> },
    { title: 'Messages', icon: <MessageIcon /> },
    { title: 'Customers', icon: <Diversity3Icon /> },
    { title: 'Help & Support', icon: <InfoIcon /> },
    { title: 'Settings', icon: <SettingsIcon /> },
  ];

  const PaymentMenu: MenuItem[] = [
    { title: 'Taxes', icon: <AssignmentIcon /> },
    { title: 'Payments', icon: <PaidIcon /> },
  ];

      return (
        <>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
              onClick={toggleSidebar}
            />
          )}
    
          <div
            className={`fixed top-0 left-0 h-[100%] w-[20.5rem] bg-white text-black z-40 transform transition-transform duration-300 ease-in-out overflow-hidden hover:overflow-auto
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 md:static md:block flex flex-col`}
          >
            
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="text-xl font-bold hidden md:block">
                <MoreHorizIcon fontSize="large" />
              </div>
              <IconButton onClick={toggleSidebar} className="text-black">
                <MenuIcon />
              </IconButton>
            </div>
    
            <div className="flex gap-3 px-4">
              <AssistantIcon fontSize="large" className="!text-blue-700" />
              <div className="flex-col">
                <h1 className="font-bold">FreightFlow</h1>
                <h2 className="text-sm">Admin Panel</h2>
              </div>
            </div>
    
            <div className="mx-3 py-2 border-b-2 border-slate-300" />
    
            <div className="flex items-center gap-3 p-3 border-2 border-slate-300 shadow-lg rounded-md w-[90%] mx-3 my-3">
              <img src={profile_pic} alt="profile" className="rounded-full w-10" />
              <div className="flex flex-col">
                <h1 className="font-semibold">Ismael Maddox</h1>
                <h2 className="text-sm text-slate-500">Free Plan</h2>
              </div>
              <div className="flex flex-col -space-y-4 mt-1">
                <ExpandLess fontSize="small" />
                <ExpandMore fontSize="small" />
              </div>
            </div>
    
            {/* Menus */}
            <div className="flex-grow px-4 overflow-hidden">
              {/* Main Menu */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="font-semibold text-slate-400 text-lg">Main Menu</div>
                  <Button onClick={MainMenuOpen} className="!text-slate-400">
                    {isMainMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
                  </Button>
                </div>
                {isMainMenuOpen && (
                  <div className="mt-2 space-y-4">
                    {HomeMenu.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 hover:bg-blue-100 p-2 rounded cursor-pointer">
                        {item.icon}
                        <span className="text-md">{item.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
    
              {/* Payment */}
              <div className="mt-6">
                <div className="flex justify-between">
                  <div className="font-semibold text-slate-400 text-lg">Payment</div>
                  <Button onClick={PaymentMenuOpen} className="!text-slate-400">
                    {isPaymentMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
                  </Button>
                </div>
                {isPaymentMenuOpen && (
                  <div className="mt-2 space-y-4">
                    {PaymentMenu.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 hover:bg-blue-100 p-2 rounded cursor-pointer">
                        {item.icon}
                        <span className="text-md">{item.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
    
  {/**Manage Your Plan Section */}
            <div className="p-4">
              <div className="border-2 border-slate-300 rounded-md p-4 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <DataExploration className="text-blue-600" />
                  <div>
                    <h1>Upgrade & Unlock</h1>
                    <h2>all features</h2>
                  </div>
                </div>
                <Button variant="outlined" className="!hover:bg-blue-800 !w-full">
                  Manage Plan <East fontSize="small" className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </>
      )
    }