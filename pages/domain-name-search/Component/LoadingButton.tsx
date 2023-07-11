import { Button, ButtonProps } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import React, { useState } from 'react'

const LoadingButton = (props: ButtonProps, onClick: (event: any) => void, className?: string, children?: React.ReactNode) => {

    const [loading, setloading] = useState(false)
    const { start, clear } = useTimeout(() => setloading(false), 1000);

    return (
        <Button loading={loading} {...props} className={className} onClick={(event) => {
            onClick(event)
            start
        }}>
            {children}
        </Button>
    )
}

export default LoadingButton