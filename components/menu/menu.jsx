import React from "react";
import { CalendarFilled, UserOutlined, BankOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link href={"/"}>Home</Link>, null, <CalendarFilled />),
  getItem("Calender", "sub2", <CalendarFilled />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  getItem(<Link href={"/edit/12"}>Edit Page</Link>, "sub3", <UserOutlined />),
  getItem(<Link href={"/create"}>Create Page</Link>, "sub4", <UserOutlined />),
  getItem("Companies", "sub5", <BankOutlined />, [
    getItem("Option 5", "7"),
    getItem("Option 6", "8"),
  ]),
];

export default function MenuComponent() {
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      style={{ height: "100vh" }}
      items={items}
    />
  );
}
