import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Divider, Row, Space } from 'antd';
import { EditOutlined, UnorderedListOutlined, DeleteOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';

export default function HospitalTable({
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

  return (
    <div style={style}>
      <Divider orientation="left" style={{ fontSize: '15px' }}>
        Hospital List
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
        <Column title="ID" width="20%" dataIndex="index" />
        <Column title="Name" width="60%" dataIndex="names" />
        <Column
          title="Action"
          key="action"
          render={(item) => {
            return (
              <Space size="middle">
                <Link to={`hospitals/${item.uuid}/edit`}>
                  <EditOutlined />
                </Link>
                <Link to={`hospitals/${item.uuid}`}>
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

HospitalTable.propTypes = {
  totalElements: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  isLoading: PropTypes.bool,
  itemArr: PropTypes.array,
  deleteItem: PropTypes.func,
  style: PropTypes.object
};
