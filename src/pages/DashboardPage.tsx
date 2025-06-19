import React from 'react';
import NavigationMenu from '@/components/NavigationMenu'; // Custom component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BarChart, DollarSign, Users, ShoppingCart } from 'lucide-react';
// import { Routes, Route, Outlet } from 'react-router-dom'; // For nested dashboard routes if needed

// Placeholder data for dashboard elements
const sampleStats = [
  { title: "Total Revenue", value: "$45,231.89", icon: <DollarSign className="h-5 w-5 text-muted-foreground" />, trend: "+20.1% from last month" },
  { title: "Active Users", value: "+2350", icon: <Users className="h-5 w-5 text-muted-foreground" />, trend: "+180.1% from last month" },
  { title: "Sales", value: "+12,234", icon: <ShoppingCart className="h-5 w-5 text-muted-foreground" />, trend: "+19% from last month" },
  { title: "Performance", value: "Good", icon: <BarChart className="h-5 w-5 text-muted-foreground" />, trend: "Analysis up to date" },
];

const recentActivities = [
  { id: "RA001", user: "Olivia Martin", action: "New Order", details: "$250.00", time: "5m ago" },
  { id: "RA002", user: "Jackson Lee", action: "Account Update", details: "Profile Info", time: "1h ago" },
  { id: "RA003", user: "Isabella Nguyen", action: "Support Ticket", details: "#T0123", time: "2h ago" },
  { id: "RA004", user: "William Kim", action: "New User", details: "Trial Started", time: "3h ago" },
  { id: "RA005", user: "Sofia Davis", action: "Subscription", details: "Plan Upgraded", time: "1d ago" },
];

// Example: A sub-component for a nested route like /dashboard/settings
// const DashboardSettings = () => (
//   <Card>
//     <CardHeader><CardTitle>Dashboard Settings</CardTitle></CardHeader>
//     <CardContent><p>Settings content goes here...</p></CardContent>
//   </Card>
// );

const DashboardOverview = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {sampleStats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Overview of recent user actions and system events.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of recent activities.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>User/System</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.id}</TableCell>
                  <TableCell>{activity.user}</TableCell>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell>{activity.details}</TableCell>
                  <TableCell className="text-right">{activity.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Perform common tasks quickly.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Button>Create New Report</Button>
          <Button variant="outline">Manage Users</Button>
          <Button variant="secondary">View System Logs</Button>
          <Button variant="ghost">Refresh Data</Button>
        </CardContent>
      </Card>
    </div>
     {/* Placeholder for charts or more complex data visualizations */}
    <Card>
        <CardHeader>
            <CardTitle>Data Visualization (Placeholder)</CardTitle>
            <CardDescription>Example of where a chart might go.</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
            <p className="text-muted-foreground">Chart component would be rendered here.</p>
             {/* Example: <BarChart data={...} /> */}
        </CardContent>
    </Card>
  </div>
);


const DashboardPage = () => {
  console.log('DashboardPage loaded');

  const handleLogout = () => {
    console.log("User logging out...");
    // Add actual logout logic here (e.g., clear tokens, redirect to login)
    // For now, just log and maybe redirect (if navigate was available)
    alert("Logout initiated. In a real app, you'd be redirected to /login.");
    // Example: window.location.href = '/login'; // Simple redirect
  };

  // NavigationMenu will now render its children.
  // The content below (DashboardOverview or routed content) will be placed
  // inside the <div className="p-6"> of NavigationMenu.
  return (
    <NavigationMenu
      userName="Demo User"
      userAvatarUrl="https://i.pravatar.cc/150?u=demouser"
      onLogout={handleLogout}
    >
      {/* 
        This is where the main content for the dashboard goes.
        It can be a single layout like DashboardOverview, or you can use nested <Routes> if 
        /dashboard/settings, /dashboard/profile etc. should render different components
        within the same NavigationMenu layout.
        For simplicity, we'll render DashboardOverview directly.
        If nested routes are needed, App.tsx would have /dashboard/* and here you'd use:
        <Routes>
          <Route index element={<DashboardOverview />} />
          <Route path="settings" element={<DashboardSettings />} />
          ... other nested routes ...
        </Routes>
      */}
      <DashboardOverview />
      {/* To use nested routing:
        <Outlet /> 
        And ensure App.tsx's route for dashboard is like <Route path="/dashboard/*" element={<DashboardPage />} />
        And DashboardPage.tsx would define nested routes inside.
        For now, direct content rendering (DashboardOverview) is simpler based on the current structure.
      */}
    </NavigationMenu>
  );
};

export default DashboardPage;