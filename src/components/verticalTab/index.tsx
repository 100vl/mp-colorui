import Taro, {pxTransform, useState} from '@tarojs/taro'
import {ScrollView, View} from "@tarojs/components";
import {IProps} from '../../../@types/verticalTab'

import './index.scss'

export default function ClVerticalTab(props: IProps) {
  let scrollTab = false;
  let id = '';
  const currentId = props.current ? props.current : props.tabs[0].id;
  const tabs: {
    name: string;
    id: string;
    top: number;
    bottom: number;
  }[] = props.tabs || [];
  const [current, setCurrent] = useState(currentId);
  const [verticalNavTop, setVerticalNavTop] = useState(tabs.findIndex(item => item.name === props.tabs[0].name));
  const [scrollId, setScrollId] = useState(currentId);
  const [scrollContent, setScrollContent] = useState(0);
  const onScroll = (e) => {
    let tabHeight = 0;
    for (let i = 0; i < tabs.length; i++) {
      const query = Taro.createSelectorQuery()
      const view = query.select('#' + tabs[i].id);
      view.fields({
        size: true
      }, (data: any) => {
        tabs[i].top = tabHeight;
        tabHeight = tabHeight + data.height;
        tabs[i].bottom = tabHeight;
      }).exec();
    }
    let scrollTop = e.detail.scrollTop + 20;
    if (!scrollTab) {
      for (let i = 0; i < tabs.length; i++) {
        if (scrollTop > tabs[i].top && scrollTop < tabs[i].bottom) {
          setVerticalNavTop(i);
          setCurrent(tabs[i].id);
          return false
        }
      }
    }
  }
  const tabsComponent = tabs.map((item, index) => (
    <View key={index} className={`cu-item ${current === item.id ? 'cur' : ''}`} onClick={() => {
      id = item.id;
      scrollTab = true;
      changeTop(id);
      setCurrent(item.id);
      setVerticalNavTop(tabs.findIndex(tab => tab.name === item.name));
      setScrollId(item.id);
    }}
    >{item.name}</View>
  ));
  const changeTop = (id) => {
    const query = Taro.createSelectorQuery()
    const view = query.select('#' + id);
    const topView = query.select('#' + tabs[0].id);
    let top = 0;
    topView.fields({
      rect: true
    }, (data: any) => {
      top = data.top;
    })
    view.fields({
      rect: true
    }, (data: any) => {
      setTimeout(() => {
        const endTop = Math.abs(top - data.top);
        setScrollContent(endTop);
        scrollTab = false;
      }, 300)

    }).exec();
  };
  return (
    <View className='flex'>
      <ScrollView scrollY scrollWithAnimation className='VerticalNav nav' style={{height: pxTransform(props.height)}}
                  scrollTop={(verticalNavTop - 1) * 50} enableBackToTop={props.backTop}>
        {tabsComponent}
      </ScrollView>
      <ScrollView scrollY scrollWithAnimation style={{height: pxTransform(props.height)}} scrollIntoView={scrollId}
                  onScroll={onScroll} scrollTop={scrollContent} enableBackToTop={props.backTop}>
        {this.props.children}
      </ScrollView>
    </View>

  )
}

ClVerticalTab.options = {
  addGlobalClass: true
}

ClVerticalTab.defaultProps = {
  tabs: [{name: '', id: ''}],
  height: 0,
  current: '',
  backTop: false
} as IProps
