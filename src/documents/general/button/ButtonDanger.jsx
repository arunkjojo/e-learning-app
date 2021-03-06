import React from 'react'
import { Button } from 'antd'

const ButtonDanger = () => {
  return (
    <>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </>
  )
}

export default ButtonDanger