import {
  Container,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import React from 'react'
import RatingIcon from '../Icons/RatingIcon'
import Time60Icon from '../Icons/Time60Icon'
import TimeSecondIcon from '../Icons/TimeSecondIcon'
import WordpressIcon from '../Icons/WordpressIcon'
import { IconCheck } from '@tabler/icons'


const SectionFour = () => {
  return (
    <section className="py-20 _kdoos " >

      <Container size={"xl"} className=' relative z-10'>
        <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgb(59 130 246 / 29%) 4.54%, rgb(59 130 246 / 28%) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div className='py-4 bg-slate-100 px-4 rounded-xl relative'>
              <div >
                <img src='./img/speed-chart.svg' alt='graph' className='rounded-md absolute w-48 -bottom-24 -right-20 shadow-lg shadow-slate-200' />
              </div>
              <img
                className="rounded-xl"
                src="./img/office-workers.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    Uncompromising cloud performance
                  </h2>
                  <p className="text-gray-500">
                    Getting people to your website is one thing, but keeping them there is another. You can rely on HostSpacing to provide the lightning-fast loading speeds your site requires, regardless of the volume of visitors you anticipate.
                  </p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul role="list" className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={12} stroke={1.5} />
                    </ThemeIcon>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      Expert hosting support.

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={12} stroke={1.5} />
                    </ThemeIcon>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      Superior performance and load times.
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Solid Check */}
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={12} stroke={1.5} />
                    </ThemeIcon>
                    {/* End Solid Check */}
                    <span className="text-sm sm:text-base text-gray-500">
                      Reliable web hosting with 99.9% uptime guaranteed.
                    </span>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>


      </Container>
    </section>
  )
}

export default SectionFour
