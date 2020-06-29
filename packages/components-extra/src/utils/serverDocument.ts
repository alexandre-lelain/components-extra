/*  eslint @typescript-eslint/no-empty-function: 0*/
export default {
  body: {
    scrollTop: (): void => {},
  },
  documentElement: {
    scrollTop: (): void => {},
    scrollIntoView: (): void => {},
  },
}
