"use client";

import { useState, type ReactNode } from "react";
import TitleBar from "@/components/shell/TitleBar";
import Sidebar from "@/components/shell/Sidebar";
import TabBar from "@/components/shell/TabBar";
import Terminal from "@/components/shell/Terminal";
import StatusBar from "@/components/shell/StatusBar";

export default function ShellLayout({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-dvh min-h-[640px] flex-col overflow-hidden bg-app font-mono">
            <TitleBar onToggleSidebar={() => setSidebarOpen((open) => !open)} />
            <div className="flex flex-1 min-h-0">
                <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex flex-1 min-w-0 flex-col">
                    <TabBar />
                    <div className="flex-1 overflow-y-auto bg-editor">{children}</div>
                    <Terminal />
                </div>
            </div>
            <StatusBar />
        </div>
    );
}
