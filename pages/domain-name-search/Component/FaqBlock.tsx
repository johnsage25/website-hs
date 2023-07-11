import {
  Container,
  Title,
  Accordion,
  createStyles,
  Text,
  Anchor,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,

    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    background: '#fff',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}))

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'

export default function FaqBlock() {
  const { classes } = useStyles()
  return (
    <section className=" py-16 bg-zinc-50">
      <Container size="md" className={classes.wrapper}>
        <Title align="center" className='text-arapawa-700 mb-10'>
          Web Hosting FAQ:
        </Title>

        <Accordion variant="separated" >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>
              <Text fw={600} size={20}>
                What is web hosting and how does it work?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <div className=" space-y-4">
                <Text>
                  Let&apos;s deconstruct it. You want a website, to start with.
                  Great content ideas, a vision board outlining the tone of your
                  website, and even a wish list of extra features you&apos;d
                  like to see for it are all in your arsenal.
                </Text>

                <Text>
                  But precisely how do you put your website online? Hosting can
                  help with that. To make your website accessible to the general
                  public and put it online, you need a hosting service. Web
                  hosts are businesses that offer the server space required to
                  store your website on the internet.
                </Text>

                <Text>
                  The relevant information is transmitted from the server to the
                  visitor&apos;s device while web traffic tries to access your
                  site. The diversity of plan kinds and options that web hosting
                  providers provide does, however, vary. So choosing a reliable
                  web host is essential.
                </Text>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              <Text fw={600} size={20}>
                Is shared hosting the right type of web hosting for my site?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <div className=" space-y-4">
                <Text>
                  A common hosting choice is shared hosting, which involves a
                  provider hosting several websites on a single physical web
                  server. Additionally, you spend less but have fewer
                  alternatives and less control because you&apos;re sharing
                  resources, like your neighbors in an apartment complex. Shared
                  hosting is often used for websites with minimal resource
                  requirements (e.g., blogs, informational sites or smaller
                  online stores). Options like{' '}
                  <Anchor href="/cloud-hosting">Cloud Hosting</Anchor>,{' '}
                  <Anchor href="/vps-hosting">VPS</Anchor>, or{' '}
                  <Anchor href="/dedicated-server-hosting">
                    Dedicated Servers
                  </Anchor>{' '}
                  may be the best for your hosting needs if your website
                  requires more resources or you require greater server
                  management.
                </Text>
                <Text>
                  If shared hosting is the best option for you, you&apos;ll need
                  to choose amongst our three shared hosting options: WordPress
                  Hosting, Windows plans using Plesk, and Linux plans using
                  cPanel. With shared hosting, you can cut your hosting expenses
                  in half while still getting the speed and space your small
                  business website requires.
                </Text>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              <Text fw={600} size={20}>
                How many websites can I host?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <div className=" space-y-4">
                <Text>
                  Having just started? You may host one website with a Shared
                  Starter plan, which is a terrific place to start. A Shared
                  Unlimited plan lets you host as many websites as you want (we
                  say unlimited and we mean it!) if you&apos;re wanting to
                  manage a few. HostSpacing provides you with all the freedom
                  you require.
                </Text>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              <Text fw={600} size={20}>
                Does Shared Hosting include email?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <div>
                <Text>
                  You want to present your best self when creating your brand or
                  your business (or both). As you seek to expand your website, a
                  dedicated email address connected to your domain might give
                  you a competitive advantage. The Shared Unlimited package from
                  HostSpacing includes a dedicated email @ your domain.
                  HostSpacing further provides commercial email options,
                  enabling anyone — even Shared Starter users — to add business
                  email from their domain, up to five mailboxes with 25GB of
                  disk storage each. And, hey, these services don&apos;t cost a
                  pretty lot to use; they begin at just $1.67 a month!
                </Text>
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              <Text fw={600} size={20}>
                Do you include SSL certificates?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <div>
                <Text>
                  We take security seriously, and so do the users of your
                  website. You can add an SSL certificate to your website
                  without charge if you have a shared hosting account. Today,
                  having an SSL for your website is a recommended practice that
                  should go without saying. In addition to making visitors feel
                  secure while interacting with your website, an SSL also
                  protects you from penalties that you may otherwise incur from
                  search engines if you don&apos;t have one. No website wants to have
                  their reputation damaged by the words &quot;unsafe&quot; or &quot;insecure.&quot;
                  A SSL certificate is undoubtedly a terrific starting step in
                  the right way to putting your site visitors at ease, even
                  though it isn&apos;t a foolproof security against online bad guys.
                </Text>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  )
}
