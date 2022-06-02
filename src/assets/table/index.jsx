import React from 'react'
import { Table } from "antd";

const TableAsset = (props) => {
  return (
    <Table 
      style={{
        minHeight:props.minHeight,
        minWidth:props.minWidth?props.minWidth:null
      }}
      scroll={{ 
        x: props.scroll_x,
        y: props.scroll_y?props.scroll_y:null
      }}
      bordered={props.border} 
      loading={props.loading} 
      columns={props.columns} 
      dataSource={props.dataSource} 
      pagination={props.pagination}
    />
  )
}

export default TableAsset