import { useTheme } from '@emotion/react'
import { Footer } from '@mantine/core'
import FooterInner from '../components/Footer'
import { HeaderMenu } from '../components/Header'
import { MenuList } from '../components/MenuList'
import { AppProps } from 'next/app'

interface WithThemeProps {
  primaryColor: string
}

export function withTheme<T extends WithThemeProps = WithThemeProps>(
  WrappedComponent: React.ComponentType<T> ,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent?.displayName || WrappedComponent?.name || 'Component'

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
    // Fetch the props you want to inject. This could be done with context instead.
    const themeProps = useTheme()

    // props comes afterwards so the can override the default ones.
    return (
      <>
        <main>
          <HeaderMenu page={displayName} />
          <WrappedComponent {...themeProps} {...(props as T)} />
          <Footer height={'auto'} className=" bg-gray-900" >
           <FooterInner/>
          </Footer>
        </main>
      </>
    )
  }

  ComponentWithTheme.displayName = `withTheme(${displayName})`

  return ComponentWithTheme
}
