import React, { useState, Fragment } from 'react'
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  HoverCard,
  UnstyledButton,
  Text,
  Transition,
  Image,
  Button,
  Grid,
  NavLink,
  Title,
  List,
  Space,
  Anchor,
  Divider,
  Paper,
  Flex,
} from '@mantine/core'
import { MenuList } from './MenuList'
import { useClickOutside, useDisclosure, useScrollLock } from '@mantine/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowScroll, useSetState } from '@mantine/hooks'
import { AiOutlineDown, AiOutlineGlobal, AiOutlineUp } from 'react-icons/ai'
import { Popover } from '@headlessui/react'

import HostingMenu from './Menus/HostingMenu'
import DomainMenu from './Menus/DomainMenu'
import Partnership from './Menus/Partnership'
import CommunityMenu from './Menus/CommunityMenu'
import { BsArrowRight } from 'react-icons/bs'
import MenuHandler from './Menus/MenuHandler'
import AnimateHeight from 'react-animate-height'
import { PageLinks } from '../Data/Home/PageLinks'

export const HeaderMenu = ({ page }: { page?: any }) => {
  const [selectedMenu, setselectedMenu] = useState(0)
  const [height, setHeight] = useState<any>(0)
  const [opened, setopened] = useState(false)
  const [scroll, scrollTo] = useWindowScroll()
  const { cloudLink } = PageLinks
  let fixedState = false
  const [scrollState, setScrollState] = useSetState({ x: 0, y: 0 })

  const clickOutsideRef = useClickOutside(() => {
    // if(selectedMenu < 1){
    //   setselectedMenu(0)
    // }
    setTimeout(() => {
      // setopened(false)
      // setHeight(0)
    }, 100)
  })

  let hideHeader = false

  const [scrollLocked, setScrollLocked] = useScrollLock()

  if (scroll.y < 20) {
    fixedState = false
  } else {
    fixedState = true
  }

  // switch (page) {
  //   case "WebHosting":

  //     if (scroll.y > 507) {
  //       hideHeader = true
  //     }
  //     else {
  //       hideHeader = false
  //     }

  //     break;

  //   default:
  //     break;
  // }

  const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  }
  const slideVerticalAnimation = {
    open: {
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        mass: 0.8,
        type: 'spring',
      },
      display: 'block',
    },
    close: {
      rotateX: -15,
      y: -320,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  const variants = {
    open: {
      opacity: 1,
      height: 'auto',
      x: 0,
    },
    collapsed: { opacity: 0, height: 0, x: 30 },
  }

  let menuItems = MenuList.map((item: any, key: any) => {
    return (
      <UnstyledButton
        className="px-3 hover:bg-blue-100 py-3 rounded-xl"
        key={key}
      >
        {item.label}
      </UnstyledButton>
    )
  })

  return (
    <section>
      <div
        className=" bg-white py-1 small-header"
        onClick={() => {
          setScrollLocked(false)
        }}
      >
        <Container size={'xl'}>
          <div className="flex justify-between">
            <div>
              <Anchor
                className=" text-gray-700 flex space-x-1 items-center"
                href="#"
              >
                <Text size={14}>
                  Hosting Flash Sale: For a limited period, rates start at
                  $2.59/mo.
                </Text>
                <BsArrowRight />
              </Anchor>
            </div>
            <Flex gap={20}>
              <UnstyledButton className="text-gray-700 rounded-xl">
                <Text fw={600} size={14}>
                  Docs
                </Text>
              </UnstyledButton>
              <UnstyledButton className="text-gray-700 rounded-xl">
                <Text fw={600} size={14}>
                  Contact
                </Text>
              </UnstyledButton>
              <UnstyledButton className="text-gray-700 rounded-xl">
                <Text fw={600} size={14}>
                  Careers
                </Text>
              </UnstyledButton>

              <UnstyledButton href={`${cloudLink}/login`} component='a' className="text-gray-700 rounded-xl">
                <Text fw={600} size={14}>
                  Log in
                </Text>
              </UnstyledButton>
              <Divider orientation="vertical" />
              <UnstyledButton className="text-gray-700 rounded-xl">
                <div className="flex items-center space-x-1">
                  {/* <AiOutlineGlobal /> */}
                  <Text fw={600} size={14}>
                    English
                  </Text>
                </div>
              </UnstyledButton>
            </Flex>
          </div>
        </Container>
      </div>
      <Header
        onClick={() => {
          setScrollLocked(false)
        }}
        height={70}
        className=" shadow-sm"
        hidden={hideHeader}
        fixed={fixedState}
      >
        <Container size={'xl'}>
          <div className=" flex items-center justify-between py-2">
            <UnstyledButton component="a" href="/" className="">
              <Image src={'../hostspacing_logo.svg'} width={200} alt="logo" />
            </UnstyledButton>
            <div className="flex">
              <Flex className='gap-6 items-center'>
                <UnstyledButton
                  onClick={(e) => {


                    if (selectedMenu == 1) {
                      setHeight(0)
                      setselectedMenu(0)
                      setopened(false)
                    } else {
                      setselectedMenu(1)
                      setopened(true)
                      setHeight('100%')
                    }
                  }}
                  className="text-gray-800  outline-none hover:text-gray-900 py-3 rounded-xl flex items-center space-x-2"
                >
                  <Text>Websites & Hosting</Text>
                  {selectedMenu == 1 && opened ? (
                    <AiOutlineUp size={12} />
                  ) : (
                    <AiOutlineDown size={12} />
                  )}
                </UnstyledButton>

                <UnstyledButton
                  onClick={() => {
                    if (selectedMenu == 2) {
                      setHeight(0)
                      setopened(false)
                      setselectedMenu(0)
                    } else {
                      setopened(true)
                      setselectedMenu(2)
                      setHeight('100%')
                    }
                  }}
                  className="text-gray-800 outline-none hover:text-gray-900 py-3 rounded-xl flex items-center space-x-2"
                >
                  <Text>Doman Names</Text>
                  {selectedMenu == 2 ? (
                    <AiOutlineUp size={12} />
                  ) : (
                    <AiOutlineDown size={12} />
                  )}
                </UnstyledButton>

                <UnstyledButton
                  onClick={() => {
                    if (selectedMenu == 3) {
                      setHeight(0)
                      setopened(false)
                      setselectedMenu(0)
                    } else {
                      setopened(true)
                      setselectedMenu(3)
                      setHeight('100%')
                    }
                  }}
                  className="text-gray-800 outline-none hover:text-gray-900 py-3 rounded-xl flex items-center space-x-2"
                >
                  <Text>Partners</Text>
                  {selectedMenu == 3 ? (
                    <AiOutlineUp size={12} />
                  ) : (
                    <AiOutlineDown size={12} />
                  )}
                </UnstyledButton>

                {/* <UnstyledButton
                  onClick={() => {
                    if (selectedMenu == 5) {
                      setHeight(0)
                      setopened(false)
                      setselectedMenu(0)
                    } else {
                      setopened(true)
                      setselectedMenu(5)
                      setHeight('100%')
                    }
                  }}
                  className="text-gray-800 outline-none hover:text-gray-900 py-3 rounded-xl flex items-center space-x-2"
                >
                  <Text>Pricing</Text>
                  {selectedMenu == 4 ? (
                    <AiOutlineUp size={12} />
                  ) : (
                    <AiOutlineDown size={12} />
                  )}
                </UnstyledButton> */}

                <UnstyledButton
                  onClick={() => {
                    if (selectedMenu == 4) {
                      setHeight(0)
                      setopened(false)
                      setselectedMenu(0)
                    } else {
                      setopened(true)
                      setselectedMenu(4)
                      setHeight('100%')
                    }
                  }}
                  className="text-gray-800 outline-none hover:text-gray-900 py-3 rounded-xl flex items-center space-x-2"
                >
                  <Text>Resources</Text>
                  {selectedMenu == 4 ? (
                    <AiOutlineUp size={12} />
                  ) : (
                    <AiOutlineDown size={12} />
                  )}
                </UnstyledButton>




                <UnstyledButton component='a' href={`${cloudLink}/register`} className="shadow-sm flex-none h-10 bg-hscolor-500 text-gray-50 hover:bg-hscolor-600 py-1.5 px-4 rounded-full flex items-center space-x-2">
                  <Text size={14}>Sign Up</Text>
                </UnstyledButton>
              </Flex>
            </div>
          </div>
        </Container>

        <AnimateHeight
          duration={500}
          height={height}
          className={'z-50 mt-1 fixed h-screen w-full left-0 bg-white'}
        >
          <Transition
            mounted={opened}
            transition="fade"
            duration={500}
            timingFunction="ease"
          >
            {(styles) => (
              <div style={styles} ref={clickOutsideRef}>
                <MenuHandler selected={selectedMenu} />
              </div>
            )}
          </Transition>
        </AnimateHeight>
      </Header>
    </section>
  )
}
