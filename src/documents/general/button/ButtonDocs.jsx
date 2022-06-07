import React from 'react'
import { Tabs } from 'antd';
import ButtonType from './ButtonType'
import ButtonMultiple from './ButtonMultiple'
import ButtonDisabled from './ButtonDisabled'
import ButtonDanger from './ButtonDanger'
import ButtonBlock from './ButtonBlock'
import ButtonGhost from './ButtonGhost'
import ButtonLoading from './ButtonLoading'
import ButtonIcon from './ButtonIcon'

const ButtonDocs = () => {
    return (
        <Tabs type="card">
            <Tabs.TabPane tab="Button Type" key="type">
                <ButtonType />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Multiple Button" key="multiple">
                <ButtonMultiple />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Disabled Button" key="disabled">
                <ButtonDisabled />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Danger Button" key="danger">
                <ButtonDanger />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Block Button" key="block">
                <ButtonBlock />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Ghost Button" key="ghost">
                <ButtonGhost />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Button Loading" key="loading">
                <ButtonLoading />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Button Icon" key="icon">
                <ButtonIcon />
            </Tabs.TabPane>
        </Tabs>
    )
}

export default ButtonDocs