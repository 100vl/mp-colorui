import {
  normalSizeType,
  iconType,
  bgColorType,
  bgColorMoreType,
  lightBgColorType
} from '../utils/types';

export type TShape = 'radius' | 'round';
export type TSize = normalSizeType;
export type TBgColor = bgColorType | bgColorMoreType | lightBgColorType;
export type THeaderArray = {
  /**
   * 头像内置文字，建议 1 个字符，最多不可超过 2 个
   */
  text?: string;
  /**
   * 头像右上角小标签，可选类型请查看 icon 可选类型
   */
  tag?: iconType;
  /**
   * 头像内图标，可选类型请查看 icon 可选类型
   */
  icon?: iconType;
  /**
   * 外部图片 url
   */
  url?: string;
  /**
   * 提供头像组件背景色设置，可选类型请查看 默认色 可选类型
   */
  bgColor?: TBgColor;
  /**
   * 提供头像组件右上角小标签背景色设置，可选类型请查看 默认色 可选类型
   */
  tagColor?: TBgColor;
};

export type TOnClick = () => void;

export interface IProps {
  /**
   * 提供头像组件点击事件
   */
  onClick?: TOnClick;
  /**
   * 提供头像形状设置
   *
   * 默认值 `radius`
   *
   * `radius` 正常形状
   *
   * `round` 圆形
   */
  shape?: TShape;
  /**
   * 提供头像组件大小设置
   *
   * 默认值 `normal`
   *
   * 可选值 `small`, `normal`, `large`, `xlarge`
   */
  size?: TSize;
  /**
   * 提供头像组件阴影设置
   *
   * 默认值 `true`
   *
   * 可选值 `true`, `false`
   */
  shadow?: boolean;
  /**
   * 头像组数组，可设置以下几个参数
   * `text`, `tag`, `icon`, `url`, `bgColor`, `tagColor`
   */
  headerArray?: THeaderArray[];
}
