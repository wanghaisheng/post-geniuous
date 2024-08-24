/* globals ResizeObserver */

import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useContext, useEffect, useRef, useMemo, Fragment, useState } from 'react'
import AspectRatio from 'react-aspect-ratio'
import { Box, Flex } from 'theme-ui'

import {
  InternalLink,
  ExternalLink,
  Button,
  LiveError,
  LivePreview
} from '@/components'

import { OVERLAY_STATE, PREVIEW_CARD_WIDTH } from '@/constants'
import { AppContext } from '@/context'
import { theme } from '@/theme'
import { useQueryVariables } from '@/context/QueryVariablesContext'

const getWidth = el => (el ? el.getBoundingClientRect().width : 0)

const DEFAULT_MAIN_WIDTH = PREVIEW_CARD_WIDTH + parseInt(theme.space[4]) * 2

const PreviewScaler = ({ mainRef, ...props }) => {
  const motionMainWidth = useMotionValue(DEFAULT_MAIN_WIDTH)
  const springMainWidth = useTransform(
    motionMainWidth,
    [300, DEFAULT_MAIN_WIDTH],
    [0.3, 1]
  )
  const scale = useSpring(springMainWidth, {
    stiffness: 150,
    damping: 120,
    mass: 1.5
  })

  useEffect(() => {
    if (mainRef.current) {
      const onResize = () => motionMainWidth.set(getWidth(mainRef.current))

      onResize()

      const resizeObserver = new ResizeObserver(onResize)
      resizeObserver.observe(mainRef.current)

      window.addEventListener('resize', onResize)

      return () => {
        window.removeEventListener('resize', onResize)
        resizeObserver.disconnect()
      }
    }
  }, [mainRef, motionMainWidth])

  return <motion.div style={{ scale }} {...props} />
}

export const PreviewArea = ({ isEditor }) => {
  const {
    downloadScreenshot,
    showOverlay,
    theme: { bg, color }
  } = useContext(AppContext)

  const { queryVariables } = useQueryVariables()
  const [previewKey, setPreviewKey] = useState(0)

  const mainRef = useRef()

  const PreviewWrap = useMemo(() => (isEditor ? PreviewScaler : Fragment), [isEditor])

  const wrapProps = useMemo(() => (isEditor ? { mainRef } : {}), [isEditor, mainRef])

  useEffect(() => {
    setPreviewKey(prevKey => prevKey + 1)
  }, [queryVariables])

  return (
    <Box
      as='main'
      ref={mainRef}
      id="preview-area"
      sx={{
        flex: ['none', '', 1],
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: [4, '', 0],
        mt: [-4, 3, 0],
        minHeight: 0
      }}
    >
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AspectRatio ratio='16/9' style={{ minWidth: PREVIEW_CARD_WIDTH }}>
          <PreviewWrap {...wrapProps}>
            <LivePreview
              key={previewKey}
              onClick={isEditor ? showOverlay(OVERLAY_STATE.PREVIEW) : undefined}
              isEditor={isEditor}
              queryVariables={queryVariables}
            />
          </PreviewWrap>
        </AspectRatio>
      </Box>

      {isEditor && (
        <>
          <Flex
            sx={{
              alignItems: 'center',
              position: 'absolute',
              left: 3,
              top: 3
            }}
          >
            <ExternalLink
              href='https://cards.n0nft.com'
              title='Microlink – Browser as API'
              sx={{
                mr: 2,
                width: '24px',
                height: '24px',
                background:
                  "url('https://cdn.cards.n0nft.com/logo/logo.svg') no-repeat center center / 22px",
                fontSize: '0px',
                color: 'transparent',
                userSelect: 'none'
              }}
              rel=''
            >
              Microlink – Browser as API
            </ExternalLink>
            {[
              {
                href:
                  'https://cards.n0nft.com/docs/cards/getting-started/overview',
                children: 'Docs',
                title: 'Read documentation',
                rel: ''
              },
              {
                href: 'https://github.com/wanghaisheng/cards',
                title: 'See source code on GitHub',
                children: 'GitHub'
              },
              {
                href: 'https://twitter.com/wanghaisheng',
                title: 'Follow us on Twitter',
                children: 'Twitter'
              }
            ].map((props, key) => (
              <ExternalLink
                {...props}
                key={key}
                sx={{ color, fontSize: 0, mr: 2 }}
              />
            ))}
          </Flex>

          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: ['-18vw', '-6vw', 0],
              mb: [3, '', 0],
              position: 'relative'
            }}
          >
            <InternalLink href='#' sx={{ color }} onClick={downloadScreenshot}>
              Download
            </InternalLink>
            <Box sx={{ ml: 3 }}>
              <Button
                sx={{ color: bg, bg: color }}
                onClick={showOverlay(OVERLAY_STATE.PREVIEW)}
              >
                Embed
              </Button>
            </Box>
          </Flex>

          <Box sx={{ bottom: 0, position: 'absolute', width: '100%' }}>
            <LiveError />
          </Box>
        </>
      )}
    </Box>
  )
}