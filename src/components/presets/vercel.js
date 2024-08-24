import Inline from '../inline.macro'
import { Image, Link, Box, Text } from './scope'

const query = {
  headline: 'Serverless Deployments',
  caption: 'with Vercel',
  logo: 'vercel',
  theme: 'dark',
  bg: {
    light: 'white',
    dark: 'black'
  },
  color: {
    light: 'black',
    dark: 'white'
  },
  radial: {
    light: 'lightgray',
    dark: 'dimgray'
  },
  logos: {
    light: {
      vercel:
        'https://assets.zeit.co/image/upload/front/assets/design/zeit-black-triangle.svg',
      next: 'https://assets.zeit.co/image/upload/front/assets/design/nextjs-black-logo.svg',
      hyper:
        'https://assets.zeit.co/image/upload/front/assets/design/hyper-color-logo.svg'
    },
    dark: {
      vercel:
        'https://assets.zeit.co/image/upload/front/assets/design/zeit-white-triangle.svg',
      next: 'https://assets.zeit.co/image/upload/front/assets/design/nextjs-white-logo.svg',
      hyper:
        'https://assets.zeit.co/image/upload/front/assets/design/hyper-bw-logo.svg'
    }
  }
}

const code = (
  <Inline>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: `radial-gradient(${
          query.radial[query.theme]
        } 1px, transparent 0), radial-gradient(${
          query.radial[query.theme]
        } 1px, transparent 0)`,
        backgroundPosition: '0 0, 25px 25px',
        backgroundSize: '50px 50px',
        color: query.color[query.theme],
        bg: query.bg[query.theme]
      }}
    >
      <Link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=block'
        rel='stylesheet'
      />
      <Image src={query.logos[query.theme][query.logo]} />
      <Text
        sx={{
          fontFamily: 'Inter',
          fontSize: 6,
          mt: 5,
          textAlign: 'center',
          fontWeight: 700,
          lineHeight: 1
        }}
      >
        {query.headline}
      </Text>
      <Text
        sx={{
          fontFamily: 'Inter',
          fontSize: 6,
          mt: 2,
          textAlign: 'center',
          fontWeight: 300
        }}
      >
        {query.caption}
      </Text>
    </Box>
  </Inline>
)

export const vercel = { name: 'Vercel', code, query }
