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
  getItem(<Link href={"/about"}>aaa</Link>, null, <CalendarFilled />),
  getItem("Calender", "sub2", <CalendarFilled />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  getItem("Contacts", "sub3", <UserOutlined />),
  getItem("Companies", "sub4", <BankOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
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
