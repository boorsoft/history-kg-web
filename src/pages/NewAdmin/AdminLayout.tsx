import React, { FC } from "react";
import Sidebar from "./components/Sidebar";
import { AppShell } from "@mantine/core";
import AdminHeader from "./components/AdminHeader";

interface Props {
  children?: JSX.Element | JSX.Element[] | null;
}

export default function AdminLayout({ children }: Props) {
  return (
    <AppShell navbar={<Sidebar />} header={<AdminHeader />}>
      {children}
    </AppShell>
  );
}
