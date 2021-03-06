  
  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons"`,
      // Inline Data, taken from ../css/fabric-icons-inline.css
      src: `url('data:application/octet-stream;base64,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') format('truetype');`
    },
    icons: {
      'GlobalNavButton': '\uE700',
      'ChevronDown': '\uE70D',
      'ChevronUp': '\uE70E',
      'Cancel': '\uE711',
      'Settings': '\uE713',
      'ChevronLeft': '\uE76B',
      'ChevronRight': '\uE76C',
      'ChevronUpSmall': '\uE96D',
      'ChevronDownSmall': '\uE96E',
      'ChevronLeftSmall': '\uE96F',
      'ChevronRightSmall': '\uE970',
      'ChevronUpMed': '\uE971',
      'ChevronDownMed': '\uE972',
      'ChevronLeftMed': '\uE973',
      'ChevronRightMed': '\uE974',
      'CircleRing': '\uEA3A',
      'FabricReportLibrary': '\uF0A1',
    }
  };

  registerIcons(subset, options);
}
