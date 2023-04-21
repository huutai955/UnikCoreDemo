import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";
export default function LoginFormComponent() {
  const router = useRouter();
  const onFinish = (values) => {
    if (values.remember) {
      localStorage.setItem(
        "userProfile",
        JSON.stringify({ username: values.username })
      );
    } else {
      sessionStorage.setItem(
        "userProfile",
        JSON.stringify({ username: values.username })
      );
    }
    router.push("/");
  };
  return (
    <Form
      name="normal_login"
      className="login__form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          className="login__input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          className="login__input"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item className="login__buttonform">
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button login__button"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
