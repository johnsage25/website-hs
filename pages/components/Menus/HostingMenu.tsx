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
} from '@mantine/core'
import { useDisclosure, useScrollLock } from '@mantine/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowScroll, useSetState } from '@mantine/hooks'
import { AiOutlineDown, AiOutlineGlobal, AiOutlineUp } from 'react-icons/ai'
import { Popover } from '@headlessui/react'
import { MenuActionBanner } from '../menuActionBanner'

const HostingMenu = ({ onClick }: { onClick: (e: any) => void }) => {
  return (
    <div className="px-6 py-3   border-b border-b-gray-100 h-screen border-t border-t-gray-200">
      <Grid justify="flex-end" columns={24} className="divide-x h-full">
        <Grid.Col span={7} className="px-6 py-8">
          <div>
            <MenuActionBanner
              image={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              }
              title={'Plan & save'}
              description={
                'Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific'
              }
              action={{
                label: 'Start now',
                link: '#',
              }}
            />
          </div>
        </Grid.Col>
        <Grid.Col span={5} className="px-6 py-3">
          <Text className="text-gray-500" size={15} fw={800}>
            Hosting
          </Text>
          <Space h={20} />
          <List listStyleType={'none'} className="space-y-2">
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/web-hosting"
              >
                Web Hosting
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/wordpress-hosting"
              >
                WordPress Hosting
              </Anchor>
            </List.Item>

            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/cloud-hosting"
              >
                Cloud Hosting
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/dedicated-server-hosting"
              >
                Dedicated Server Hosting
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/cloud-hosting"
              >
                VPS Hosting
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/student-web-hosting"
              >
                Student Free Web Hosting
              </Anchor>
            </List.Item>
            {/* <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/mt4-hosting"
              >
                MT4 Hosting
              </Anchor>
            </List.Item> */}
          </List>
        </Grid.Col>
        <Grid.Col span={5} className="px-6 py-3">
          <Text className="text-gray-500" size={15} fw={800}>
            Web Security
          </Text>
          <Space h={20} />
          <List listStyleType={'none'} className="space-y-2">
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/ssl-certificates"
              >
                SSL Certificates
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/website-security"
              >
                Website Security
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/backup-your-website"
              >
                Back Up Your Website
              </Anchor>
            </List.Item>

            {/* <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/server-backup"
              >
                Server Back Up
              </Anchor>
            </List.Item> */}
          </List>
        </Grid.Col>
        <Grid.Col span={5} className="px-6 py-3">
          <Text className="text-gray-500" size={15} fw={800}>
            Websites
          </Text>
          <Space h={20} />
          <List listStyleType={'none'} className="space-y-2">
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/website-builder"
              >
                Website Builder
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/online-store"
              >
                Online Store
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/website-design-services"
              >
                Website Design Services
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/website-design-services"
              >
                Website Analytics
              </Anchor>
            </List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default HostingMenu
