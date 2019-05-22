import { bgColorMoreType, bgColorType, lightBgColorType } from '../utils/types';

export type TTtype = 'card' | 'full';
export type TTitle = string;

export interface IProps {
  /**
   * 卡片组件类型选择
   *
   * 默认值 `card`
   *
   * 可选类型 `card`, `full`
   */
  type?: TTtype;
  /**
   * 卡片背景色设置，可选类型请查看 默认背景色 可选类型
   */
  bgColor?: bgColorMoreType | bgColorType | lightBgColorType;
}
