import { createContext, useCallback, useMemo, useRef } from 'react'

import { LiveProvider, presets } from '@/components'
import { useQueryState, useScreenshotUrl } from '@/hooks'
import { getPresetBySlug } from '@/lib'
import { DEFAULT_PRESET } from '@/constants'

import editorContext from './editor-context'
import overlayContext from './overlay-context'
import presetsContext from './presets-context'
import themeContext from './theme-context'

export const AppContext = createContext({})

const getDefaultPreset = slug =>
  getPresetBySlug(presets, slug) || getPresetBySlug(presets, DEFAULT_PRESET)

const safeDecode = value => {
  try {
    return decodeURIComponent(value)
  } catch (_) {
    return value
  }
}

export default function AppContextProvider ({ children }) {
  const [query, setQuery] = useQueryState(undefined, parsedQuery =>
    Object.entries(parsedQuery).reduce((acc, [key, value]) => {
      acc[key] = safeDecode(value)
      return acc
    }, {})
  )

  const presetRef = useRef(getDefaultPreset(query?.preset ?? DEFAULT_PRESET))

  const {
    code,
    handleCode,
    handleQueryVariables,
    queryVariables,
    setCode,
    setQueryVariables
  } = editorContext(presetRef, query, setQuery)

  const [
    screenshotUrl,
    syncScreenshotUrl,
    downloadScreenshot
  ] = useScreenshotUrl(queryVariables)

  const onOverlayShow = useCallback(() => syncScreenshotUrl(queryVariables), [
    queryVariables,
    syncScreenshotUrl
  ])

  const { isOverlay, showOverlay, hideOverlay } = overlayContext(onOverlayShow)

  const onPresetChange = useCallback(
    (presetSlug, newPreset) => {
      presetRef.current = newPreset
      setCode(presetRef.current.code)
      setQueryVariables(presetRef.current.query)
      setQuery({ p: undefined, preset: presetSlug }, { replace: true })
    },
    [setCode, setQuery, setQueryVariables]
  )

  const { handlePresetChange, presetOptions } = presetsContext(onPresetChange)

  const { colorMode, changeTheme, theme } = themeContext()

  const value = useMemo(
    () => ({
      changeTheme,
      code,
      colorMode,
      downloadScreenshot,
      handleCode,
      handlePresetChange,
      handleQueryVariables,
      hideOverlay,
      isOverlay,
      presetOptions,
      presetRef,
      query,
      queryVariables,
      screenshotUrl,
      showOverlay,
      theme
    }),
    [
      changeTheme,
      code,
      colorMode,
      downloadScreenshot,
      handleCode,
      handlePresetChange,
      handleQueryVariables,
      hideOverlay,
      isOverlay,
      presetOptions,
      presetRef,
      query,
      queryVariables,
      screenshotUrl,
      showOverlay,
      theme
    ]
  )

  return (
    <AppContext.Provider value={value}>
      <LiveProvider queryVariables={queryVariables} code={code}>
        {children}
      </LiveProvider>
    </AppContext.Provider>
  )
}
