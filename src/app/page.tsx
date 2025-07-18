import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarMenu,
  SidebarTrigger,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import AppSidebarClient from "./_AppSidebarClient";

export default function HomePage() {
  return (
    <>
      <SidebarProvider className="overflow-y-hidden">
        <AppSidebarClient>
          <Sidebar collapsible="icon" className="overflow-hidden">
            <SidebarHeader className="flex-row">
              <SidebarTrigger />
              <span className="text-xl text-nowrap">WDS Jobs</span>
            </SidebarHeader>
            <SidebarContent></SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>abcdef</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1">abcdefghi</main>
        </AppSidebarClient>
      </SidebarProvider>
    </>
  );
}
