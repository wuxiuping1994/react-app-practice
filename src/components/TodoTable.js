import { Table, Button, Space } from "antd";
import React from "react";

class TodoTable extends React.Component {
  state = {
    // data: [
    //   {
    //     key: 1,
    //     description: "123",
    //     category: "css",
    //     content: "dsfag gd  ga ",
    //   },
    //   {
    //     key: 2,
    //     description: "123",
    //     category: "css",
    //     content: "dsfag gd  ga ",
    //   },
    //   {
    //     key: 3,
    //     description: "123",
    //     category: "css",
    //     content: "dsfag gd  ga ",
    //   },
    //   {
    //     key: 4,
    //     description: "123",
    //     category: "css",
    //     content: "dsfag gd  ga ",
    //   },
    // ],
    selectedRowKeys: [],
  };

  columns = [
    {
      title: "description",
      dataIndex: "description",
    },
    {
      title: "category",
      dataIndex: "category",
    },
    {
      title: "operate",
      key: "operate",
      render: (record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              console.log(record.key);
              this.props.deleteSingleItem(record.key);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  //delete-operation-related eventHandlers
  // deleteSingleItem = (key) => {
  //   const newData = this.state.data;
  //   const index = newData.findIndex((item) => key === item.key);
  //   newData.splice(index, 1);
  //   this.setState({ data: [...newData] }); // Assigning a new object can trigger React to rerender
  // };
  // deleteSelectedItems = (selectedRowKeys) => {
  //   const newData = this.state.data;
  //   let index = null;
  //   selectedRowKeys.forEach((keyNum) => {
  //     index = newData.findIndex((item) => keyNum === item.key);
  //     newData.splice(index, 1);
  //   });
  //   this.setState({ data: [...newData] });
  // };

  //selected keys handlers
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  componentDidUpdate() {
    //   const temp = this.props.dataToTable;
    //   console.log(temp);
  }

  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const tableData = this.state.selectedRowKeys;
    return (
      <div className="todoTable" style={{ width: "50%", flex: "1" }}>
        <Button
          type="primary"
          onClick={() => {
            this.props.deleteSelectedItems(tableData);
          }}
        >
          Delete selected
        </Button>
        <Table
          rowSelection={rowSelection}
          columns={this.columns}
          dataSource={this.props.dataToTable}
        />
      </div>
    );
  }
}

export default TodoTable;
