import { Grid, SimpleGrid, Text } from '@mantine/core'
import React, { SVGProps } from 'react'

type Props = {
  data: {
    name: string
    image: any
  }[]
}

const OsList = ({ data }: Props) => {
  return (
    <div className='grid gap-x-4 gap-y-14 grid-cols-7 max-w-4xl mx-auto'>
      {data?.map((item, k) => {
        return (
          <div
            key={k}
            className="flex justify-center flex-col items-center space-y-4"
          >
            <item.image className=" w-14 h-14" />
            <Text>{item.name}</Text>
          </div>
        )
      })}
    </div>
  )
}

export default OsList
