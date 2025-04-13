import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import profile from "../images/profile.jpg";
import { useState } from 'react';
import {SelectChangeEvent, Button } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import DropdownSelect from "./DropdownSelect.tsx";


type NavbarProps = {
  selected: string;
};

type User = {
  name: string;
  color: string;
  logo: string;
};

const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  const [language, setLanguage] = React.useState<string>('');
  
  
    const handleDropdownChange = (event: SelectChangeEvent) => {
      setLanguage(event.target.value);
    };
  
    const languageOptions = [
      { label: "Hindi ", value: 10 },
      { label: "Bengali", value: 20 },
      { label: "Nepali", value: 30 },
    ];
  const onlineUsers: User[] = [
    { name: "Anna", color: "bg-pink-500" ,logo:profile},
    { name: "Leo", color: "bg-green-500" ,logo:profile},
    { name: "Sara", color: "bg-yellow-500",logo:profile },
    { name: "John", color: "bg-purple-500",logo:profile },
  ];

  return (
    <div className="flex  justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10 w-full fixed">
     {/**selected button from Sidebar */}
      <h1 className="text-xl font-semibold text-gray-800">{selected}</h1>
      {/**Right Most Part */}
      <div className="flex justify-around items-center w-[40%] ">
      <div className="flex -space-x-3">
        {onlineUsers.map((user, index) => (
          <Tooltip key={index} title={user.name}>
            <Avatar
              sx={{ width: 32, height: 32 }}
              className={`${user.color} text-white text-sm border-2 border-white`}
              src={user.logo}
            >
              {user.name.charAt(0)}
            </Avatar>
            
          </Tooltip>
          
        ))}
        </div>
        <div>
        <DropdownSelect
      value={language}
      onChange={handleDropdownChange}
      placeholder="ENG"
      options={languageOptions}
    />
      </div>
      <div>
        <Button variant="outlined" className="!w-[20px] !px-0 !rounded-full !border-black"><NotificationsNoneIcon className="!text-black"/></Button>
      </div>
      <div>
        <Button variant="outlined" className="!w-[20px] !px-0 !rounded-full !border-black"><SearchIcon className="!text-black"/></Button>
      </div>
      <div>
        <Button variant="outlined" className="!w-[20px] !px-0 !rounded-full !border-black"><SettingsIcon className="!text-black"/></Button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
