import { Box } from 'theme-ui'

export const Label = ({ sx, ...props }) => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
      px: 2,
      py: 1,
      borderLeft: 1,
      borderRight: 1,
      fontFamily: 'mono',
      borderBottom: 1,
      mr: 4,
      fontSize: 0,
      pointerEvents: 'none',
      ...sx
    }}
    {...props}
  />
)
