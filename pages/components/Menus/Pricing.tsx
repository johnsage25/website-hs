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

const Pricing = ({ onClick }: { onClick: (e: any) => void }) => {
    return (
        <div className="px-6 py-3   border-b border-b-gray-100 h-screen border-t border-t-gray-200">
            <Grid justify="flex-end" columns={24} className="divide-x h-full">
                <Grid.Col span={9} className="px-6 py-8">
                    <div>
                        <MenuActionBanner
                            image={
                                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
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
                <Grid.Col span={7} className="px-6 py-3">
                    <Text className="text-gray-500" size={15} fw={800}>
                        Pricing
                    </Text>
                    <Space h={20} />
                    <List listStyleType={'none'} className="space-y-2">
                        <List.Item>
                            <Anchor
                                className="text-gray-800 font-semibold hover:text-blue-500"
                                href="/pricing/virtual-servers"
                            >
                                Virtual Servers
                            </Anchor>
                        </List.Item>
                        <List.Item>
                            <Anchor
                                className="text-gray-800 font-semibold hover:text-blue-500"
                                href="/pricing/dedicated-servers"
                            >
                                Dedicated Servers
                            </Anchor>
                        </List.Item>
                        <List.Item>
                            <Anchor
                                className="text-gray-800 font-semibold hover:text-blue-500"
                                href="#"
                            >
                                Custom Server Builder
                            </Anchor>
                        </List.Item>
                    </List>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Pricing
