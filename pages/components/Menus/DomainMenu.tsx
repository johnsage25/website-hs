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
import { useDisclosure } from '@mantine/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowScroll, useSetState } from '@mantine/hooks'
import { AiOutlineDown, AiOutlineGlobal, AiOutlineUp } from 'react-icons/ai'
import { Popover } from '@headlessui/react'
import { MenuActionBanner } from '../menuActionBanner'

const DomainMenu = ({ onClick }: { onClick: (e: any) => void }) => {
  return (
    <div className="px-6 py-3   border-b border-b-gray-100 h-screen border-t border-t-gray-200">
      <Grid justify="flex-end" columns={24} className="divide-x h-full">
        <Grid.Col span={9} className="px-6 py-8">
          <div>
            <MenuActionBanner
              image={
                'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1862&q=80'
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
        <Grid.Col span={6} className="px-6 py-3">
          <Text className="text-gray-500" size={15} fw={800}>
            Domain Names
          </Text>
          <Space h={20} />
          <List listStyleType={'none'} className="space-y-2">
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/domain-name-search"
              >
                Search for Domain Names
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/transfer-domain"
              >
                Transfer Domain Names
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/protect-domain-names"
              >
                Protect Domain Names
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/bulk-domain-search"
              >
                Bulk Domain Search
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/domain-auctions"
              >
                Auctions for Domain Names
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/whois"
              >
                Whois Lookup
              </Anchor>
            </List.Item>
          </List>
        </Grid.Col>
        <Grid.Col span={6} className="px-6 py-3">
          <Text className="text-gray-500" size={15} fw={800}>
            Domain & DNS
          </Text>
          <Space h={20} />
          <List listStyleType={'none'} className="space-y-2">
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/prenium-dns"
              >
                Prenium DNS
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/freedns"
              >
                FreeDNS
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor
                className="text-gray-800 font-semibold hover:text-blue-500"
                href="/generate-domain-business-names"
              >
                Generate Domain & Business Names
              </Anchor>
            </List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default DomainMenu
