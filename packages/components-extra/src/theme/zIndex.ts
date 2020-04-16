// eslint-disable-next-line @typescript-eslint/no-unused-vars
import zIndex from '@material-ui/core/styles/zIndex'

declare module '@material-ui/core/styles/zIndex' {
  interface ZIndex {
    cookiesBanner: number
    backToTop: number
  }
}
