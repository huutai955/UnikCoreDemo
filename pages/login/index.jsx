import LoginFormComponent from "@/components/form/form";
import FormComponent from "@/components/form/form";
import ImageComponent from "@/components/image/image";
import React from "react";

export default function LoginPage() {
  return (
    <div className="login">
      <div className="container">
        <ImageComponent
          src={
            "https://mt.matkinhxanh.vn/media/images/login_logo.png?va46d31fe"
          }
          width={"100%"}
        />
        <LoginFormComponent />
      </div>
    </div>
  );
}
