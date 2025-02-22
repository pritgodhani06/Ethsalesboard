import * as React from "react";
import { LayoutDashboard, Mails, Users } from "lucide-react";

import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

// import LOGO from "";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Employee",
    url: "/employees",
    icon: Users,
  },
  {
    title: "Email Templates",
    url: "/email-templates",
    icon: Mails,
  },
];

const CustomSidebar = () => {
  let navigate = useNavigate();

  return (
    <UISidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="mr-4 mt-4 hidden md:flex w-full justify-center">
            <img
              className="fit-picture"
              src={"/logo.webp"}
              alt="Grapefruit slice atop a pile of other slices"
            />
          </div>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="flex items-center">
                  <SidebarMenuButton asChild>
                    <div
                      className="cursor-pointer flex justify-start font-bold"
                      onClick={() => navigate(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  );
};

export default CustomSidebar;
