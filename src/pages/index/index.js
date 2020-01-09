import Taro, { useState, useEffect, pxTransform } from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem, Video } from "@tarojs/components";
import ClLayout from "../../components/layout";
import ClAccordion from "../../components/accordion";
import ClCard from "../../components/card";
import ClText from "../../components/text";
import ClTitleBar from "../../components/titleBar";
import ClFlex from "../../components/flex";
import ClButton from "../../components/button";
import ClTip from "../../components/tip";
import ClIcon from "../../components/icon";
import ClForm from "../../components/form";
import ClFormItem from "../../components/form/formItem";
import ClInput from "../../components/input";
import ClCheckbox from "../../components/checkbox";
import ClVerticalTabCell from "../../components/verticalTab/verticalTabCell";
import ClVerticalTab from "../../components/verticalTab";
import ClImagePicker from "../../components/imagePicker";
import ClSearchBar from "../../components/searchBar";
import ClRadio from "../../components/radio";
// import { provinceArr, getAreaData } from "../../components/utils/area";
import ClMenuList from "../../components/menuList";
import ClSwiperAction from "../../components/swiperAction/index";
import ClActionSheet from "../../components/actionSheet/index";
import ClCurtain from "../../components/curtain/index";
import ClTabs from "../../components/tabs";
import ClSelect from "../../components/select/index";
import ClNoticeBar from "../../components/noticebar/index";
import ClAvatar from "../../components/avatar";
import ClShopBar from "../../components/shopBar";
import ClSwiper from "../../components/swiper";
import ClTextarea from "../../components/textarea";
import ClTree from "../../components/tree";

import PCAA from "area-data/pcaa";
import ClCalendar from "../../components/calendar";

import "./index.scss";

export default function Tree() {
  const data = [
    {
      name: "中国",
      checked: true,
      children: [
        {
          name: "江苏"
        },
        {
          name: "浙江",
          children: [
            {
              name: "杭州"
            },
            {
              name: "台州"
            }
          ]
        }
      ]
    },
    {
      name: "美国",
      open: true,
      children: [
        {
          name: "旧金山",
          checked: true
        },
        {
          name: "洛杉矶"
        }
      ]
    }
  ];
  return (
    <View>
      <ClTitleBar title="选择选项" textColor="black" type="icon" />
      <ClCard>
        <ClTree data={data} showCheck />
      </ClCard>
      <ClCard>
        <ClTree
          data={data}
          onClickItem={item => {
            Taro.showToast({
              icon: "none",
              title: item.name
            });
          }}
        />
      </ClCard>
      <ClTitleBar title="颜色" textColor="black" type="icon" />
      <ClCard>
        <ClTree data={data} color="brown" showCheck />
      </ClCard>
    </View>
  );
}
