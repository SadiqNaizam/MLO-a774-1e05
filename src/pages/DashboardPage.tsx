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

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  const handleLogout = () => {
    console.log("User logging out...");
    // Add actual logout logic here (e.g., clear tokens, redirect to login)
    // For now, just log and maybe redirect (if navigate was available)
    // navigate('/login'); // would require useNavigate
    alert("Logout initiated. In a real app, you'd be redirected.");
  };

  return (
    // The NavigationMenu component provides the overall layout (sidebar + header + main content area)
    // We pass user info and logout handler to it.
    // The children of NavigationMenu (or content within its <main> section) is where
    // Card, Table, Button specific to this page's content will go.
    // Since NavigationMenu renders its own <main> and <header>,
    // we only need to define the content *within* that main area.
    // The provided NavigationMenu structure has a <main className="flex-1">
    // and <div className="p-6"> within it. This is where page content goes.

    <NavigationMenu
      userName="Demo User"
      userAvatarUrl="https://i.pravatar.cc/150?u=demouser"
      onLogout={handleLogout}
    >
      {/* This content will be rendered inside NavigationMenu's main content area */}
      {/* The NavigationMenu.tsx itself has a <div className="p-6"> where its children or specific dashboard content could be placed.
          For this example, let's assume we're replacing the default "<p>Dashboard content will be displayed here.</p>"
          by directly adding content here that would conceptually go into that p-6 div.
          However, the current NavigationMenu.tsx doesn't accept children directly.
          It expects page content to be rendered via routing *within* its own <main> area if it were a layout component.
          Let's modify the concept: assume NavigationMenu handles the *outer* shell, and this component
          defines what goes *inside* the <div className="p-6"> of that shell.
          To make this work with the provided NavigationMenu, we'll need to place content *after* it if it's not designed to take children,
          OR modify NavigationMenu to accept children.

          Given the prompt, the `NavigationMenu` is listed as a component *on* the DashboardPage,
          implying it IS the page's structure. The components `Card`, `Table`, `Button` are *part* of this page.
          The example `NavigationMenu.tsx` already includes a header and a main content area with a p-6 div.
          We'll structure the content meant for that p-6 div here.
      */}
      {/* The content below should conceptually be placed inside the <div className="p-6"> of the NavigationMenu.tsx's <main> element.
          Since NavigationMenu is a full-page layout component in its current form, we treat it as the page itself
          and this file describes the specific *content* within its main area.
      */}
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
    </NavigationMenu> // End of NavigationMenu wrapper
  );
};

export default DashboardPage;