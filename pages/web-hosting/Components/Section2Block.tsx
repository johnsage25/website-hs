import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core'
import { IconGauge, IconUser, IconCookie } from '@tabler/icons'
import ShieldPrivacyIcon from '../../components/Icons/ShieldPrivacyIcon'
import PerformanceIcon from '../../components/Icons/PerformanceIcon'
import HostingIcon from '../../components/Icons/HostingIcon'

const mockdata = [
  {
    title: 'Extreme performance',
    description:
      `When you need them, we have resources like CPU, memory, entry processes, and I/O available (we'll let you know when you're close). Or, you can truly keep up with things by using our feature-rich data dashboard. In either case, leveling up only only one click.`,
    icon: PerformanceIcon,
  },
  {
    title: 'Privacy and security',
    description:
      `Your online privacy and security are our top priorities at HostSpacing, and we always support people's rights and online consumer rights. The open, unrestricted, and secure use of the Internet by all users is our top priority.`,
    icon: ShieldPrivacyIcon,
  },
  {
    title: 'Reliable web hosting.',
    description:
      `When your website is down, you can be missing an opportunity to interact with a customer (or potential customer). We provide a 99.9% service uptime guarantee because of this. You might be qualified for a discount on your monthly shared hosting purchase during that time if we don't adhere to the guarantee.`,
    icon: HostingIcon,
  },
]

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}))

export default function Section2Block() {
  const { classes, theme } = useStyles()
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon  className=" w-14 h-14" color={theme.fn.primaryColor()} />
      <Text size="lg" weight={600} mt="md">
        {feature.title}
      </Text>
      <Text size="md" color=" text-gray-600" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))
  return (
    <section className=" bg-neutral-50 py-20">
      <Container size="lg" py="xl">
        <h2 className="text-3xl font-bold sm:text-4xl text-center text-arapawa-600 ">
          What makes HostSpacing <br/> the best web host?
        </h2>

        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </section>
  )
}
