import Header from "@/components/dashboard/layout/header";
import Sidebar from "@/components/dashboard/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swipe Admin",
  description: "Swipe Admin",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-14">{children}</main>
      </div>
    </>
  );
}