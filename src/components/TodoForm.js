import { Form, Button, Input, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const TodoForm = (props) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  let timestamp = new Date().getTime();
  const data = {
    key: timestamp,
    description: (
      <Link
        to={{
          pathname: `/todo/${timestamp}`,
          state: {
            description: description,
            category: category,
            content: content,
          },
        }}
      >
        {description}
      </Link>
    ),
    category: category,
    content: content,
  };

  return (
    <div className="todoFrom" style={{ width: "50%", flex: "1" }}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        className="todoForm"
      >
        <Form.Item label="Description:">
          <Input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Category:">
          <Select
            onChange={(value) => {
              setCategory(value);
            }}
          >
            <Select.Option value="CSS">CSS</Select.Option>
            <Select.Option value="HTML">HTML</Select.Option>
            <Select.Option value="JavaScript">JavaScript</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Content:">
          <Input.TextArea
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 8,
            offset: 4,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              if (description || category || content) {
                props.onSubmit(data);
              } else {
                alert(
                  "Input some text first. Otherwise, you cannot submit anything."
                );
              }
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TodoForm;
