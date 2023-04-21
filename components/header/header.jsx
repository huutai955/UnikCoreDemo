import React from "react";
import { Avatar, Dropdown, Empty, Layout, Popover } from "antd";
import Link from "next/link";
import ImageComponent from "../image/image";
import { BellFilled, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useRouter } from "next/router";
const { Search } = Input;

const { Header } = Layout;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default function HeaderComponent() {
  const router = useRouter();

  const onSearch = (value) => {
    router.push({
      pathname: "/search",
      query: { result: value },
    });
  };
  return (
    <Header className="header">
      <div className="header__first">
        <Link href={"/"}>
          <ImageComponent
            src={
              "https://mt.matkinhxanh.vn/media/images/login_logo.png?va46d31fe"
            }
            alt={"Company Logo"}
            width={80}
          />
        </Link>
        <div className="header__button">
          <Popover content={content ? <Empty /> : content} title="Notification">
            <BellFilled style={{ cursor: "pointer", fontSize: 18 }} />
          </Popover>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            className="header__search"
          />
        </div>
      </div>
      <div className="header__second">
        <div className="header__user">
          <Avatar
            src={
              "https://mt.matkinhxanh.vn/media/images/login_logo.png?va46d31fe"
            }
          />
          <span>UserName</span>
        </div>
        <Popover content={content ? <Empty /> : content} title="Notification">
          <i>
            <SettingOutlined />
          </i>
        </Popover>
      </div>
    </Header>
  );
}
