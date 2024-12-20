import React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from './components/ui/sidebar';
import { TiHome , TiThMenuOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { FaCar } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import profileImage from './assets/1572807961840.jpg';



function App() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h1 className='flex items-center m-1 p-3'>
            <FaCar className='mr-2' size={30} />
            <p className='font-semibold'>Oui App</p>
          </h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Item 1</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Item 2</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <DropdownMenu>
            <div className='flex flex-col'>
              <div className="m-2 flex items-center">
                <img className='w-14 rounded-xl' src={profileImage} />
                <p className='p-2'>Mohamed Amine Boughnimi</p>
                <DropdownMenuTrigger><TiThMenuOutline size={22} /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
              </div>
            </div>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="App">
        {/* Main content of your app */}
        <p>Main Content Here</p>
      </div>
    </SidebarProvider>
  );
}

export default App;