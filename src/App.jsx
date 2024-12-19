import React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from './components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h1>My Sidebar</h1>
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
          <p>Footer Content</p>
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