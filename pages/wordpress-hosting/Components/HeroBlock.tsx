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
} from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import image from '../../../public/img/travel_blogging_04.svg'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}))

type Props = {}

const HeroBlock = (props: Props) => {
  const { classes } = useStyles()

  return (
    <section className="">
      <Container size={'lg'}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Make the most of WordPress.</Title>
            <Text className=" text-gray-600" mt="md">
              With the HostSpacing Online Store, hosting and selling are both
              easy. Today, get premium updates and plugins to experience 80%*
              quicker performance.
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className=" bg-hscolor-500 hover:bg-hscolor-600">
                Get started
              </Button>
            </Group>
          </div>
          <Image src={image.src} alt="" className={classes.image} />
        </div>
      </Container>
    </section>
  )
}

export default HeroBlock
