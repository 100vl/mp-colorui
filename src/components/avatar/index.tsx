import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import utils from '../utils/index';

import {
  iconType,
  bgColorType,
  normalSizeType,
  bgColorMoreType,
  lightBgColorType
} from '../utils/types';

interface IProps {
  onClick?(index?: number): void;
  readonly shape?: 'radius' | 'round';
  readonly size?: normalSizeType;
  readonly url?: string;
  readonly text?: string;
  readonly type?: 'normal' | 'array';
  readonly tag?: iconType;
  readonly tagColor?: bgColorType | bgColorMoreType | lightBgColorType;
  readonly icon?: iconType;
  readonly bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
  readonly shadow?: boolean;
  readonly headerArray?: {
    readonly text?: string;
    readonly tag?: iconType;
    readonly icon?: iconType;
    readonly url?: string;
    readonly bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
    readonly tagColor?: bgColorType | bgColorMoreType | lightBgColorType;
  }[];
}

interface IState {}

export default class ClAvatar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  static options = {
    addGlobalClass: true
  };
  state = {};
  static defaultProps = {
    size: 'normal',
    shape: 'radius',
    url: '',
    bgColor: 'blue',
    type: 'normal',
    text: '',
    tagColor: 'blue',
    headerArray: [],
    shadow: true
  } as IProps;
  componentWillMount() {}
  click(index = undefined) {
    index === null
      ? this.props.onClick && this.props.onClick(index)
      : this.props.onClick && this.props.onClick(index);
  }
  render() {
    const avatar = (
      <View
        onClick={this.click.bind(this, null)}
        className={`${this.props.shape} ${
          utils.model.SIZE[this.props.size || 'normal']
        } ${utils.model.BG_COLOR_LIST[this.props.bgColor || 'black']} ${
          this.props.shadow ? 'shadow' : ''
        } cu-avatar`}
        style={
          this.props.url
            ? {
                backgroundImage: `${this.props.url}`
              }
            : ''
        }
      >
        <Text className={`icon-${this.props.icon}`}>{this.props.text}</Text>
        {this.props.tag ? (
          <View
            className={`cu-tag badge icon-${this.props.tag} bg-${
              this.props.tagColor
            }`}
          />
        ) : (
          ''
        )}
      </View>
    );
    const avatarArray =
      this.props.headerArray &&
      this.props.headerArray.map((item, index) => {
        return (
          <View
            key={index}
            onClick={this.click.bind(this, index)}
            className={`${this.props.shape} ${
              utils.model.SIZE[this.props.size || 'normal']
            } ${utils.model.BG_COLOR_LIST[item.bgColor || 'black']} ${
              this.props.shadow ? 'shadow' : ''
            } cu-avatar`}
            style={item.url ? { backgroundImage: `url(${item.url})` } : ''}
          >
            <Text className={`icon-${item.icon}`}>{item.text}</Text>
            {item.tag ? (
              <View
                className={`cu-tag badge icon-${item.tag} bg-${item.tagColor}`}
              />
            ) : (
              ''
            )}
          </View>
        );
      });
    const avatarArrayComponent = (
      <View
        className={'cu-avatar-group'}
      >
        {avatarArray}
      </View>
    );
    return (
      this.props.type === 'array' ? avatarArrayComponent : avatar
    );
  }
}
