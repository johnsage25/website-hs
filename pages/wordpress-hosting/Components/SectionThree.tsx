import { Accordion, Container, Image, Text, Title } from '@mantine/core'
import React from 'react'
import image from '../../../public/img/wordpress-290.svg'
type Props = {}

function SectionThree({}: Props) {
  return (
    <section>
      <Container size={'xl'}>
        <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <Title size={40}>
              Three free options to increase <br />
              your security.
            </Title>
          </div>
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="grid grid-cols-1 gap-5">
              <Image
                className="object-cover w-full col-span-2"
                src={image.src}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <Accordion  chevronPosition="left" defaultValue="customization">
                <Accordion.Item value="customization">
                  <Accordion.Control>
                    <Title className="mb-2" size={25} order={4}>
                      SiteLock Fix
                    </Title>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text className="text-gray-700">
                      Get protection from viruses & other bad guys with daily
                      scans that download your site data, screen it, remove
                      malware, & upload a clean version to your site.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="flexibility">
                  <Accordion.Control>
                    <Title className="mb-2" size={25} order={4}>
                      CodeGuard
                    </Title>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text className=" text-gray-700">
                      It&apos;s like insurance for your website. Daily automatic
                      backups keep your web files & databases secure. Plus,
                      access a backup at any time with 1-click restore.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="focus-ring">
                  <Accordion.Control>
                    <Title className="mb-2" size={25} order={4}>
                      SSL certificate
                    </Title>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text className=" text-gray-700">
                      It&apos;s like insurance for your website. Daily automatic
                      backups keep your web files & databases secure. Plus,
                      access a backup at any time with 1-click restore.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionThree
