import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Divider, Row } from 'antd';
import { DeleteOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';

const OrganisationAgentTable = ({
  totalElements = 0,
  currentPage = 0,
  setCurrentPage = () => {},
  isLoading = true,
  itemArr = [],
  style = {}
}) => {
  const onChange = (page) => {
    setCurrentPage(page - 1);
  };

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
        <Column title="Phone" dataIndex="phone" />
      </Table>
    </div>
  );
};

OrganisationAgentTable.propTypes = {
  totalElements: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  isLoading: PropTypes.bool,
  itemArr: PropTypes.array,
  deleteItem: PropTypes.func,
  style: PropTypes.object
};

export default OrganisationAgentTable;
