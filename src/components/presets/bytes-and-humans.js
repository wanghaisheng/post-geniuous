import Inline from '../inline.macro'
import { Link, Box, Flex, Paragraph } from './scope'

const query = {
  title: 'Paradigmas con emoji',
  image: 'https://i.imgur.com/mt12ihX.png',
  textColor: 'black',
  primaryColor: '#85FFE0'
}

const code = (
  <Inline>
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${query.image})`,
        border: `10px solid ${query.primaryColor}`,
        boxShadow: `0.5em 0.5em 0px ${query.textColor}`
      }}
    >
      <Link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=block'
        rel='stylesheet'
      />
      <Box
        sx={{
          p: 6,
          textAlign: 'center'
        }}
      >
        <Paragraph
          sx={{
            lineHeight: 1.25,
            bg: query.primaryColor,
            color: query.textColor,
            fontFamily: 'Open Sans',
            fontSize: 7,
            px: '60px',
            py: 4,
            fontWeight: 700
          }}
        >
          {query.title}
        </Paragraph>
      </Box>
    </Flex>
  </Inline>
)

export const bytesAndHumans = { name: 'Bytes and Humans', code, query }
