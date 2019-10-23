import Taro, { useState, useEffect, pxTransform } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
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
import { provinceArr, getAreaData } from "../../components/utils/area";
import ClMenuList from "../../components/menuList";
import ClSwiperAction from "../../components/swiperAction/index";
import ClActionSheet from "../../components/actionSheet/index";
import ClCurtain from "../../components/curtain/index";
import ClTabs from "../../components/tabs";
import ClSelect from "../../components/select/index";
import ClNoticeBar from "../../components/noticebar/index";
import ClAvatar from "../../components/avatar";

console.log(Taro);
export default function Index() {
  return (
    <View>
      <ClCard
        title={{
          text: "阿里巴巴",
          textColor: "cyan",
          size: "large"
        }}
      >
        我是内容太打了我是内容太打了我是内容太打了我是内容太打了我是内容太打了我是内容太打了
      </ClCard>
    </View>
  );
}
