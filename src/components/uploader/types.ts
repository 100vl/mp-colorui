export type TChooseImgObj = {
  count?: number;
  sizeType?: ('original' | 'compressed')[];
  sourceType?: ('album' | 'camera')[];
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
};

export type TBeforeDel = (index: number) => boolean