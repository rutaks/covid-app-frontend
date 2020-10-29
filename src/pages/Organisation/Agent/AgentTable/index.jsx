import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Divider, Row, Space } from 'antd';
import { EditOutlined, UnorderedListOutlined, DeleteOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';

export default function AgentTable({
  totalElements = 0,
  currentPage = 0,
  setCurrentPage = () => {},
  isLoading = true,
  itemArr = [],
  deleteItem = () => {},
  style = {}
}) {
  const onChange = (page) => {
    setCurrentPage(page - 1);
  };

  useEffect(() => {
    console.log(itemArr);
  }, []);
  return (
    <div style={style}>
      <Divider orientation="left" style={{ fontSize: '15px' }}>
        Agent List
      </Divider>
      <Row style={style.table}>
        <Col>
          <Button style={style.button} type="default" disabled={true} icon={<DeleteOutlined />}>
            Delete All
          </Button>
        </Col>
        <Col>
          <Button style={style.button} type="default" loading={false} icon={<FileExcelOutlined />}>
            Export To Excel
          </Button>
        </Col>
      </Row>
      <br />
      <Table
        rowKey="index"
        pagination={{
          onChange: onChange,
          current: currentPage,
          total: totalElements
        }}
        loading={isLoading}
        dataSource={itemArr}
      >
        <Column title="ID" dataIndex="index" />
        <Column title="Name" dataIndex="names" />
        <Column title="Email" dataIndex="email" />
        <Column
          title="Organisation"
          render={(item) => {
            return item.organisation.names;
          }}
        />
        <Column
          title="Action"
          key="action"
          render={(item) => {
            return (
              <Space size="middle">
                <Link to={`hospitals/agent/${item.uuid}/edit`}>
                  <EditOutlined />
                </Link>
                <Link to={`hospitals/agent/${item.uuid}`}>
                  <UnorderedListOutlined />
                </Link>
                <Link to="" onClick={() => deleteItem(item.uuid)}>
                  <DeleteOutlined />
                </Link>
              </Space>
            );
          }}
        />
      </Table>
    </div>
  );
}

AgentTable.propTypes = {
  totalElements: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  isLoading: PropTypes.bool,
  itemArr: PropTypes.array,
  deleteItem: PropTypes.func,
  style: PropTypes.object
};
