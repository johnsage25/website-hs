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
  SimpleGrid,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import image from '../../../public/img/hero-image-w-1.png'
import LaravelIcon from '../Icons/LaravelIcon'
import MagentoIcon from '../Icons/MagentoIcon'
import NodejsIcon from '../Icons/NodejsIcon'
import PrestashopIcon from '../Icons/prestashopIcon'
import WordpressIcon from '../Icons/WordpressIcon'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
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

export function HomeHero() {
  const { classes } = useStyles()
  return (
    <div >
      <Container size={'lg'} >
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Cloud Infrastructure
              For Smart Developers
            </Title>
            <Text className=' text-gray-600 antialiased' mt="md">
              Build on an open cloud platform that gives you total control, guarantees reliable workloads, and offers no-cost, round-the-clock technical assistance
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>More Computing Power for Less </b>
              </List.Item>
              <List.Item>
                <b>Award Winning Support from an actual person</b>
              </List.Item>
              <List.Item>
                <b>99.996% Uptime over the last 12 months</b>
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={'bg-hscolor-500'}>
                Get started
              </Button>

              <SimpleGrid cols={4}>
                <div>
                  <WordpressIcon className="w-8 h-8" />
                </div>
                <div>
                  <MagentoIcon className="w-8 h-8" />
                </div>
                <div>
                  <NodejsIcon className="w-8 h-8" />
                </div>
                <div>
                  <LaravelIcon className="w-8 h-8" />
                </div>
              </SimpleGrid>
            </Group>
          </div>
          <Image src={image.src} alt="hero image" className={classes.image} />
        </div>
      </Container>
    </div>
  )
}
