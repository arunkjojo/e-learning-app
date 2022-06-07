import React, { useState } from 'react'
import { Button, Input, InputNumber, Modal, Table } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CrudTable = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [editRecord, setEditRecord] = useState(null)
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: 'Arun Jojo',
            age: 22,
            place: 'Kasaragod'
        },
        {
            id: 2,
            name: 'Abel Jojo',
            age: 32,
            place: 'Banglore'
        },
        {
            id: 3,
            name: 'Alphy Jojo',
            age: 22,
            place: 'Kannur'
        },
        {
            id: 4,
            name: 'Aleena',
            age: 19,
            place: 'Banglore'
        },
        {
            id: 5,
            name: 'Malu',
            age: 18,
            place: 'Kannur'
        },
        {
            id: 6,
            name: 'Unni',
            age: 17,
            place: 'Kannur'
        }
    ]);
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Age',
            dataIndex: 'age'
        },
        {
            key: '4',
            title: 'Place',
            dataIndex: 'place'
        },
        {
            key: 5,
            title: 'Actions',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => { onEditRow(record) }} style={{ color: 'blue' }} />
                        <DeleteOutlined onClick={() => { onDeleteRow(record) }} style={{ color: 'red', marginLeft: 12 }} />
                    </>
                )
            }
        }
    ];
    const onAddRow = () => {
        const nextId = parseInt(Math.random() * 1000);
        // dataSource[dataSource.length-1].id + 1;
        // console.log(nextId)
        const newRow = {
            id: nextId,
            name: 'Name_' + nextId,
            age: 'Age_' + nextId,
            place: 'Place_' + nextId
        };
        setDataSource(
            prevState => {
                return [...prevState, newRow]
            }
        );
    };
    const onDeleteRow = (record) => {
        Modal.confirm({
            title: 'Are you sure, youn want to delete this record?',
            okText: 'Yes',
            okType: 'danger',
            onOk: () => {
                setDataSource(
                    prevState => {
                        return prevState.filter(data => data.id !== record.id);
                    }
                )
            }
        })
    }
    const onEditRow = (record) => {
        setIsEditing(true);
        setEditRecord({...record})
    }
    const onUpdateRow = () => {
        setDataSource(prevState=>{
            return prevState.map((record) => {
                if(record.id === editRecord.id) return editRecord
                else return record
            })
        })
        onRestEditing();
    }
    const onRestEditing = () => {
        setIsEditing(false);
        setEditRecord(null);
    }
    return (
        <>
            <Button
                className='add-new-crud'
                onClick={onAddRow}
                type="primary"
            >
                ADD NEW
            </Button>

            <Table
                columns={columns}
                dataSource={dataSource}
            />

            <Modal
                title= 'Edit Record'
                visible={isEditing}
                okText="UPDATE"
                onCancel={onRestEditing}
                onOk={onUpdateRow}
            >
                Name: <Input value={editRecord?.name} onChange={(e) => setEditRecord(prevState => {
                    return {...prevState, name: e.target.value}
                })} />
                Age: <InputNumber value={editRecord?.age} onChange={(e) => setEditRecord(prevState => {
                    return {...prevState, age: e.target.value}
                })} style={{
                    width: '100%',
                  }}/>
                Place: <Input value={editRecord?.place} onChange={(e) => setEditRecord(prevState => {
                    return {...prevState, place: e.target.value}
                })} />
            </Modal>
        </>
    )
}

export default CrudTable