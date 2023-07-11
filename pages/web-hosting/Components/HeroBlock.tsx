import React from 'react'
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import image from '../../../public/img/woman-s-hosting.png'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    alignItems: 'center'
  },

  content: {
    maxWidth: rem(530),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

type Props = {}

const HeroBlock = (props: Props) => {
  const { classes } = useStyles()

  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-24 ">
      <div className="absolute inset-0">
        <img
          className="object-contain w-full h-full md:object-right md:scale-150 md:origin-top-right"
          src="./img/hs-data-center.jpg"
          alt=""
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />
      <div className="absolute inset-0 block bg-black/60 md:hidden" />
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/2 md:text-left antialiased space-y-6">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The Best Shared Web Hosting You Can Find
          </h2>
          <Text component='h2' fz="md" fw={500} className=' font-sans text-gray-300 ' mt="md">
            We offer fast shared hosting with SSD, LiteSpeed, and Plesk Control Panel to meet your expectations.
          </Text>

          <div className='flex items-center gap-3 mt-6 text-gray-200'>
            <div className='flex gap-x-2 items-center'>
              {/* <ThemeIcon size={20} radius="xl">
                <IconCheck size={rem(12)} stroke={1.5} />
              </ThemeIcon> */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <Text size={14} fw={500}>24/7 Expert Support</Text>
            </div>
            <div>
              <div className='flex gap-x-2 items-center justify-start'>
                {/* <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <Text size={14} fw={500}>Daily Backups</Text>
              </div>
            </div>
            <div>
              <div className='flex gap-x-2 items-center'>
                {/* <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <Text size={14} className=' antialiased' fw={500}>Free Migrations</Text>
              </div>
            </div>
          </div>
          <Group mt={30}>
            <Button radius="xl" size="md" className={" bg-hscolor-500 hover:bg-hscolor-600 px-10"}>
              Get started
            </Button>

          </Group>
        </div>
      </div>

    </section>


  )
}

export default HeroBlock
