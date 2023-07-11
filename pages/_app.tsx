import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps, AppType } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { trpc } from '../utils/trpc'
import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { RecoilRoot } from 'recoil'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: AppType | any = ({
  Component,
  pageProps,
}: AppPropsWithLayout | AppProps | any) => {
  const router = useRouter()

  const getLayout = Component?.getLayout ?? ((page: any) => page)

  switch (router.pathname.substring(0, router.pathname.lastIndexOf('/'))) {
    case '/cloud-hosting':
      return getLayout(<Component {...pageProps} />)
    case '/profile':
      return getLayout(<Component {...pageProps} />)
    default:
      return (
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: '"Source Sans Pro",sans-serif',
            colorScheme: 'light',
            primaryColor: 'brand',
            colors: {
              brand: ['#f4f9ff', '#e9f3ff', '#c9e1ff', '#a8cfff', '#67aaff', '#2686ff', '#2686ff', '#1d65bf', '#175099', '#13427d'],
            },

            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1240,
                    xl: 1320,
                  },
                },
              },
            },
          }}
        >
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </MantineProvider>
      )
  }
}
export default trpc.withTRPC(MyApp)
