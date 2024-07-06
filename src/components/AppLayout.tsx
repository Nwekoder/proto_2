import { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface AppLayoutProps {
    children: ReactNode
}

export default function AppLayout(props: AppLayoutProps) {
    return (
        <main className="relative h-screen overflow-hidden">
            <div className="h-[calc(100vh-4rem)] overflow-y-auto">
                {props.children}
            </div>

            <BottomNav />
        </main>
    )
}