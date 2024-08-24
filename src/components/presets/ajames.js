import Inline from '../inline.macro'
import { Link, Flex, Box, Paragraph, Image } from './scope'

const query = {
  domain: 'ajames.dev',
  title: 'Multiple entry points in Create React App without ejecting',
  subtitle: 'June 02, 2020 | 6 min read',
  logo: 'https://i.imgur.com/EMrjD2G.png',
  image: 'https://i.imgur.com/unfZ8Bw.jpg',
  imageMask: 'rgba(0,0,0,0)',
  bgBase: 'rgb(255,255,255)',
  bgMask:
    'linear-gradient(75deg,rgb(255,255,255) 69%,rgb(66,153,225) 69%,rgb(229,62,62) 70%,transparent 0%)',
  colorPrimary: 'rgb(0,0,0)',
  colorSecondary: 'rgb(74,85,104)',
  font: {
    primary: {
      name: 'Rubik',
      weight: 300,
      url: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=block'
    },
    secondary: {
      name: 'Roboto',
      weight: 400,
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=block'
    }
  }
}

const code = (
  <Inline>
    <Box
      sx={{
        position: 'relative',
        border: 1,
        borderColor: 'black',
        backgroundColor: query.bgBase,
        backgroundImage: `url(${query.image})`,
        backgroundSize: 'contain',
        zIndex: 1,
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: query.imageMask,
          zIndex: 2
        }
      }}
    >
      <Link href={query.font.primary.url} rel='stylesheet' />
      <Link href={query.font.secondary.url} rel='stylesheet' />
      <Flex
        sx={{
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '90%',
          height: '100%',
          padding: 30,
          background: query.bgMask,
          color: query.colorPrimary,
          zIndex: 3
        }}
      >
        <Flex sx={{ alignItems: 'center' }}>
          <Image sx={{ width: '50px' }} src={query.logo} />
          <Paragraph
            sx={{
              marginLeft: 3,
              color: query.colorSecondary,
              textTransform: 'uppercase'
            }}
          >
            {query.domain}
          </Paragraph>
        </Flex>

        <Box>
          <Paragraph
            sx={{
              marginBottom: 3,
              width: '70%',
              fontFamily: query.font.primary.name,
              fontSize: 6,
              fontWeight: query.font.primary.weight,
              lineHeight: 'normal'
            }}
          >
            {query.title}
          </Paragraph>
          <Paragraph
            sx={{
              marginBottom: 3,
              fontFamily: query.font.secondary.name,
              fontSize: 2,
              fontWeight: query.font.secondary.weight,
              lineHeight: 'normal',
              color: query.colorSecondary
            }}
          >
            {query.subtitle}
          </Paragraph>
        </Box>
      </Flex>
    </Box>
  </Inline>
)

export const ajames = { name: 'ajames', code, query }
