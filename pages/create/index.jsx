import MainLayout from "@/components/layouts/main";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
import EditFormRightComponent from "@/components/form/editform/editformright";
import { Button } from "antd";
import {
  CheckOutlined,
  FolderAddOutlined,
  CloseOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

export default function CreatePage() {
  return (
    <div className="edit">
      <Scrollbars className="edit__scrollbar">
        <EditFormRightComponent>
          {
            <div className="edit__header">
              <h2>Create Company UnikCore</h2>
              <Button.Group className="edit__buttongroup">
                <Button htmlType="submit" className="edit__button">
                  <i>
                    <CheckOutlined />
                  </i>
                  Save
                </Button>
                <Button className="edit__button">
                  <i>
                    <FolderAddOutlined />
                  </i>
                  Save & Close
                </Button>
                <Button className="edit__button">
                  <i>
                    <CloseOutlined />
                  </i>
                  Cancel
                </Button>
                <Button className="edit__button">
                  <i>
                    <CalculatorOutlined />
                  </i>
                  Merge
                </Button>
              </Button.Group>
            </div>
          }
        </EditFormRightComponent>
        <p>UnikCore Automation. © 2023 UnikCore</p>
      </Scrollbars>
    </div>
  );
}

CreatePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
