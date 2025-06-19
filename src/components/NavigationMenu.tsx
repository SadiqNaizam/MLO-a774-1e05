import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { LayoutDashboard, Settings, UserCircle, LogOut } from 'lucide-react'; // Example icons
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Props might include user information or navigation items
interface NavigationMenuProps {
  userName?: string;
  userAvatarUrl?: string;
  onLogout?: () => void;
  children?: React.ReactNode; // Added to accept children components
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ userName = "User", userAvatarUrl, onLogout, children }) => {
  console.log("Rendering NavigationMenu component");

  // This is a basic structure. You can expand this to include a more distinct
  // header and sidebar, or integrate with shadcn's NavigationMenu for specific parts.
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar / Main Navigation Area */}
      <aside className="w-full md:w-64 bg-sidebar text-sidebar-foreground p-4 space-y-2 md:space-y-4">
        <div className="text-2xl font-semibold mb-6 text-sidebar-primary-foreground bg-sidebar-primary p-2 rounded-md text-center">Dashboard</div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded text-sidebar-foreground">
                <LayoutDashboard className="mr-3 h-5 w-5" />
                Overview
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" className="flex items-center p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded text-sidebar-foreground">
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area Header (Example) */}
      <main className="flex-1 bg-background">
        <header className="bg-card shadow-sm p-4 flex justify-between items-center border-b border-border">
          <h1 className="text-xl font-semibold text-foreground">Welcome, {userName}</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userAvatarUrl} alt={userName} />
                  <AvatarFallback>{userName?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userName}</p>
                  {/* <p className="text-xs leading-none text-muted-foreground\">user@example.com</p> */}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircle className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="p-6">
          {/* Render children passed to the component here */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default NavigationMenu;