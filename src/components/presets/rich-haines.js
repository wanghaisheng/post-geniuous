import Inline from '../inline.macro'
import { Link, Flex, Grid, Text } from './scope'

const query = {
  domain: 'richardhaines.dev',
  twitterHandle: '@studio_hungry',
  headline: 'Jamstack and the power of serverless with FaunaDB',
  caption:
    'Tutorial to create a harry potter site using faunadb and serverless functions',
  backgroundImage: 'https://richardhaines.dev/diamonds.png'
}

const code = (
  <Inline>
    <Grid
      sx={{
        gridTemplateRows: '70% 20% 10%',
        gap: 0,
        bg: '#e2a114',
        backgroundImage: `url(${query.backgroundImage})`,
        height: '157px',
        width: '300px'
      }}
    >
      <Link
        href='https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap'
        rel='stylesheet'
      />
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          p: 3
        }}
      >
        <Flex
          sx={{
            bg: '#dee2d7',
            width: '100%',
            height: '100%',
            p: 4,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            sx={{
              fontFamily: 'Jost',
              fontSize: 7,
              fontWeight: 400,
              color: '#1f2127'
            }}
          >
            {query.headline}
          </Text>
        </Flex>
      </Flex>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          p: 3
        }}
      >
        <Flex
          sx={{
            bg: '#000000',
            width: '90%',
            p: 2,
            transform: 'rotate(-7deg)',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 5
          }}
        >
          <Text
            sx={{
              fontFamily: 'Jost',
              fontSize: 3,
              fontWeight: 400,
              color: '#dee2d7'
            }}
          >
            {query.caption}
          </Text>
        </Flex>
      </Flex>
      <Flex
        sx={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexDirection: 'row',
          p: 4
        }}
      >
        <Text
          sx={{
            fontFamily: 'Jost',
            fontSize: 3,
            fontWeight: 400,
            color: '#1f2127'
          }}
        >
          {query.domain}
        </Text>
        <Text
          sx={{
            fontFamily: 'Jost',
            fontSize: 3,
            fontWeight: 400,
            color: '#1f2127'
          }}
        >
          {query.twitterHandle}
        </Text>
      </Flex>
    </Grid>
  </Inline>
)

export const richHaines = { name: 'Rich Haines', code, query }
