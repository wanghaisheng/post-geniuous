import Inline from '../inline.macro'
import { Link, Image, Flex, Text } from './scope'

const query = {
  color: '#000',
  bgImage:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9',
  bgOverlay: 'rgba(255,255,255,0.7)',
  logo: 'https://raw.githubusercontent.com/smhutch/smhutch/main/public/logo-dark.svg',
  domain: 'smhutch.dev',
  title: 'Secure component interfaces with TypeScript',
  subtitle: 'Nov 02, 2020 — 7 min read'
}

const code = (
  <Inline>
    <Flex
      sx={{
        color: query.color,
        padding: 60,
        backgroundImage: `linear-gradient(${query.bgOverlay}, ${query.bgOverlay}), url(${query.bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Link
        href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Inter:wght@800'
        rel='stylesheet'
      />
      <Flex
        sx={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%'
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            height: '100%',
            flex: '1 0 50%'
          }}
        >
          <Text
            sx={{
              fontFamily: 'IBM Plex Mono',
              fontSize: 16,
              fontWeight: 400,
              opacity: 0.7,
              mb: 3
            }}
          >
            {query.subtitle}
          </Text>
          <Text
            sx={{
              fontFamily: 'Inter',
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.4
            }}
          >
            {query.title}
          </Text>
          <Text
            sx={{
              fontFamily: 'IBM Plex Mono',
              fontSize: 16,
              fontWeight: 400,
              opacity: 0.7,
              marginTop: 'auto'
            }}
          >
            {query.domain}
          </Text>
        </Flex>
        <Image
          src={query.logo}
          sx={{
            width: '50px'
          }}
        />
      </Flex>
    </Flex>
  </Inline>
)

export const smhutch = { name: 'smhutch', code, query }
