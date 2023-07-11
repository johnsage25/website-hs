import { Button, Container, Grid, Group, Paper, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'
import HeroBg from '../Svg/HeroBg'

const SectionTwo = () => {
  return (
    <section className="py-32 relative">
      <div className='absolute image-overlay right-0 z-0 top-0'>
        <HeroBg className='h-full' />
      </div>
      <Container size="lg" className='relative z-10'>
        <Grid className=' space-x-8'>
          <Grid.Col span={5} className=" space-y-4">
            <Title order={1}>Sell your products to anyone, anywhere.</Title>
            <Text size={19}>
              No matter if you offer hip-hop beats or home decor, our online store is designed to work for you. With integrated marketing tools, you can easily construct a store that fits your brand and promote it all from your smartphone.
            </Text>
          </Grid.Col>

          <Grid.Col span="auto">

            <SimpleGrid cols={2} >
              <Paper p="xl" className=' space-y-4 py-10 border' >
                <Title order={3} className=" font-semibold">Ecommerce Demo</Title>
                <Button className=' bg-blue-600 '>Start for free</Button>
                <Text>
                  Start setting up your free white-labeled readymade storefront to sell products and generate more revenue.
                </Text>
              </Paper>

              <Paper p="xl" className=' space-y-4 py-10 bg-blue-500 text-white' withBorder={false}>
                <Title order={3} className=" font-semibold">Open Source Templates</Title>
                <Button className='  bg-white text-black hover:bg-blue-200 shadow'>Download</Button>
                <Text>
                  Customized template to get you started in no time, or you can download our open source and customize offline.
                </Text>
              </Paper>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}

export default SectionTwo
