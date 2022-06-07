import React from 'react'
import { Button } from 'antd'

const ButtonBlock = () => {
  return (
    <>
      <Button type="primary" block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type="dashed" block>
        Dashed
      </Button>
      <Button type="link" block>
        Link
      </Button>
    </>
  )
}

export default ButtonBlock