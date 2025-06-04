import * as React from 'react'

import { IconDashboard, IconInnerShadowTop } from '@tabler/icons-react'
import { ListCheckIcon, MessageCircleCode, UsersIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar'

import { NavMain } from '~/components/nav-main'
import { NavUser } from '~/components/nav-user'

const data = {
  user: {
    name: 'User Example',
    email: 'user@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: IconDashboard,
    },
    {
      title: 'Tasks',
      url: '/tasks',
      icon: ListCheckIcon,
    },
    {
      title: 'Chats',
      url: '/chats',
      icon: MessageCircleCode,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Logo</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
