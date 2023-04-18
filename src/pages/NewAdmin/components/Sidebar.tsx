import { NavLink, Navbar, Text } from "@mantine/core";
import React from "react";
import { ADMIN_SIDEBAR_ELEMENTS } from "../adminSidebar";

export default function Sidebar() {
  return (
    <Navbar>
      <Navbar.Section>
        <Text size="md">Ресурсы</Text>

        {ADMIN_SIDEBAR_ELEMENTS.map((item) => (
          <NavLink
            key={item.id}
            label={item.title}
            component="a"
            href={item.path}
          />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
