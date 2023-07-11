import { Container, Group, Title, Text, SimpleGrid, ThemeIcon, Paper } from '@mantine/core'
import React from 'react'
import { FeaturesArray } from '../../Data/Home/Features'


const SectionOne = () => {
  return (
    <section className=' bg-gray-100 relative overflow-hidden'>
      <div aria-hidden="true" className="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-blue-200/50 dark:to-purple-900"></div>
        {/* <div className="bg-gradient-to-tl from-blue-50 via-blue-50 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div> */}
      </div>
      <Container size={"lg"} pt={30} pb={80} className=' relative z-10'>

        <div className=' space-y-4 w-2/3 mx-auto text-center antialiased py-20'>
          <Title order={1}>Hosting Websites on Cloud Made Simple.<br /> For Everyone.</Title>
          <Text size={17} className=" text-gray-700 ">With our straightforward managed web hosting solution, you can concentrate on your business operations and revenue whether you&apos;re an individual, a student, or an organization.</Text>
        </div>

        <SimpleGrid cols={4} >
          {FeaturesArray.map((item, key) => (
            <>
              <Paper key={key} className="shadow  shadow-slate-200 rounded space-y-4 px-5 text-center py-10 bg-white border border-gray-200">
                <Group position='center'>
                  {item.icon({ className: " w-16 h-16 " })}
                </Group>
                <Title style={{ whiteSpace: "pre-line" }} className='antialiased' order={4}>{item.label}</Title>
                <Text size={15} className='text-gray-600 antialiased'>{item.discriotion}</Text>
              </Paper>
            </>
          ))}
        </SimpleGrid>

      </Container>
    </section >
  )
}

export default SectionOne