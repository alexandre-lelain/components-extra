// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createMixins from '@material-ui/core/styles/createMixins';

declare module '@material-ui/core/styles/createMixins' {
  interface BackToTopMixin {
    startHeight: number;
  }

  interface Mixins {
    backToTop: BackToTopMixin;
  }

  interface MixinsOptions {
    backToTop?: BackToTopMixin;
  }
}