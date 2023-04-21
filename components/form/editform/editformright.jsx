import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";
import { Col, Row } from "antd";

export default function EditFormRightComponent({ children }) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form layout="vertical" className="edit__form" onFinish={onFinish}>
      {children}
      <Row className="edit__row">
        <Col span={6} className="edit__colleft">
          <Row className="edit__companyscore">
            <Col span={24}>
              <Form.Item label="Score" name={"score"}>
                <Input
                  type="number"
                  placeholder="Score"
                  className="edit__input"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row className="edit__companyowner">
            <Col span={24}>
              <Form.Item label="Company Onwer" name={"companyOwner"}>
                <Input
                  type="select"
                  placeholder="Choose One.."
                  className="edit__input"
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={18} className="edit__colright">
          <h2>Core</h2>
          <Row className="edit__companyinfo">
            <Col span={10} style={{ paddingRight: 20 }}>
              <Form.Item label="Company Name" name={"companyName"}>
                <Input placeholder="Company Name" className="edit__input" />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="Company Email" name={"companyEmail"}>
                <Input placeholder="Company Email" className="edit__input" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="edit__companyaddress">
            <Col span={20}>
              <Form.Item label="Company Address" name={"address1"}>
                <Input placeholder="Address 1" className="edit__input" />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item name={"address2"}>
                <Input placeholder="Address 2" className="edit__input" />
              </Form.Item>
            </Col>
            <Col span={10} style={{ paddingRight: 20 }}>
              <Form.Item name={"city"}>
                <Input placeholder="City" className="edit__input" />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item name={"state"}>
                <Input placeholder="State" className="edit__input" />
              </Form.Item>
            </Col>
            <Col span={10} style={{ paddingRight: 20 }}>
              <Form.Item name={"zipcode"}>
                <Input placeholder="Zip Code" className="edit__input" />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item name={"country"}>
                <Input placeholder="Country" className="edit__input" />
              </Form.Item>
            </Col>
          </Row>

          <Row className="edit__companycontact">
            <Col span={20}>
              <Form.Item label="Phone" name={"phoneNumber"}>
                <Input placeholder="Phone Number" className="edit__input" />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item label="Website" name={"website"}>
                <Input placeholder="Website" className="edit__input" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
