import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import utils from '../utils/index';
import { IProps } from '../../../@types/floatButton';
import ClIcon from '../icon';

import './index.scss';
import ClAnimation from '../animation';
import ClLayout from '../layout';

let tempPageX = 0;
let tempPageY = 0;
let pageX = 25;
let pageY = 100;
export default function ClFloatButton(props: IProps) {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [animation, setAnimation] = useState({});
  const {
    move,
    open,
    icon,
    bgColor,
    iconColor,
    direction,
    shadow,
    shape,
    size,
    actionList,
    onClick,
    onActionClick,
    closeWithShadow
  } = props;
  const dealSize = utils.model.SIZE[size || 'normal'];
  const dealBgColor = utils.model.BG_COLOR_LIST[bgColor || 'blue'];
  const dealShadow = shadow ? 'shadow' : '';
  const dealIconColor = iconColor || '';
  let dealActionList = actionList || [];
  const len = dealActionList.length;
  const type = () => {
    if (direction === 'vertical') {
      return show ? 'slide-bottom' : 'slide-top';
    } else {
      return show ? 'slide-right' : 'slide-left';
    }
  };
  const actionListComponent = dealActionList.map((item, index) => (
    <View key={index} style={{position: show ? 'relative' : 'absolute'}}>
      <ClAnimation
        type={type()}
        delay={show ? (len - index - 1) / 10 : 0}
        duration={0.2}
      >
        <ClLayout
          padding='small'
          paddingDirection={direction === 'vertical' ? 'bottom' : 'right'}
        >
          <View
            className={`cu-avatar ${shape} ${dealSize} ${
              item.bgColor
                ? utils.model.BG_COLOR_LIST[item.bgColor]
                : dealBgColor
            } ${dealShadow}`}
            onClick={e => {
              e.stopPropagation();
              clickButton();
              onActionClick && onActionClick(index);
            }}
          >
            <View className={`${item.iconColor || dealIconColor}`}>
              <ClIcon iconName={item.icon} size={size} />
            </View>
          </View>
        </ClLayout>
      </ClAnimation>
    </View>
  ));
  const directionClass = direction === 'vertical' ? '' : 'flex';
  const clickButton = () => {
    open && setShow(!show);
    open && setRotate(rotate ? 0 : 45);
  };
  return (
    <View
      className={`${show ? 'float_button__mask' : ''}`}
      onClick={e => {
        closeWithShadow && clickButton();
      }}
    >
      <View
        className='float_button__fixed'
        animation={animation}
        onTouchStart={e => {
          if (!move) return;
          const touchs = e.touches[0];
          tempPageX = touchs.pageX;
          tempPageY = touchs.pageY;
        }}
        onTouchMove={e => {
          e.stopPropagation();
          if (!move) return;
          const touchs = e.touches[0];
          let newAnimation = Taro.createAnimation(animation);
          pageX = pageX - (touchs.pageX - tempPageX);
          pageY = pageY - (touchs.pageY - tempPageY);
          const length = Math.sqrt(Math.pow(pageX, 2) + Math.pow(pageY, 2))
          newAnimation.right(pageX);
          newAnimation.bottom(pageY).step({
            duration: 13 * length / 100
          });
          setAnimation(newAnimation.export());
          tempPageX = touchs.pageX;
          tempPageY = touchs.pageY;
        }}
        onTouchCancel={e => {
          e.stopPropagation();
        }}
      >
        <View className={`float_button__content ${directionClass}`}>
          {actionListComponent}
          <View
            className={`cu-avatar ${shape} ${dealSize} ${dealBgColor} ${dealShadow}`}
            onClick={e => {
              e.stopPropagation();
              clickButton();
              onClick && onClick();
            }}
          >
            <View
              className={`${dealIconColor}`}
              style={{
                transform: `rotate(${rotate}deg)`,
                transition: 'all 0.15s linear'
              }}
            >
              <ClIcon iconName={icon} size={size} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

ClFloatButton.options = {
  addGlobalClass: true
};

ClFloatButton.defaultProps = {
  move: false,
  open: true,
  icon: 'add',
  bgColor: 'blue',
  iconColor: undefined,
  direction: 'vertical',
  onClick: () => {},
  shadow: true,
  onActionClick: index => {},
  actionList: [],
  size: 'normal',
  shape: 'round',
  closeWithShadow: false
} as IProps;
