import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import {useState} from "react"

import "./index.scss"

const  Category = () =>  {
    const style = {
        paddingTop: (Taro as any).$navBarMarginTop + 'px',
    }

    const [current, setCount] = useState(0)
    const [current2, setCount2] = useState(0)
    const [current3, setCount3] = useState(0)
    const [tabList, setTabList] = useState([{ title: '手机' }, { title: '平板/电脑' }])

    const handleClick = (index) => {
        setCount(index)
    }
    const handleClick2 = (index) => {
        setCount2(index)
    }
    const handleClick3 = (index) => {
        setCount3(index)
    }

    return (
        <View className="category" style={style}> 
            <View className="search">搜索你想要的机型</View>
            <View className="category-info">
                <View className="category-nav">
                <AtTabs current={current} tabList={tabList} onClick={handleClick.bind(this)}>
                    <AtTabsPane current={current} index={0}>
                        <View className="phone-nav" style="padding-bottom: 140px">
                            <AtTabs
                              current={current2}
                              scroll
                              height='100vh'
                              tabDirection='vertical'
                              tabList={[
                                    { title: 'iPhone' },
                                    { title: '实用配件' },
                                    { title: '华为' },
                                    { title: '荣耀' },
                                    { title: '小米' },
                                    { title: '红米' },
                                    { title: 'OPPO' },
                                    { title: 'VIVO' },
                                    { title: '一加' },
                                    { title: '三星' },
                                    { title: '全新安卓' },
                                    { title: '全新苹果' },
                                    { title: '精品配件' },
                                ]}
                              onClick={handleClick2.bind(this)}
                              
                            >
                            <AtTabsPane tabDirection='vertical' current={current2} index={0}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>0</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={1}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>1</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={2}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>2</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={3}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>3</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={4}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>4</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={5}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>5</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={6}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>6</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={7}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>7</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={8}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>8</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={9}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>9</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={10}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>10</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={11}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>11</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={12}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>12</View>
                            </AtTabsPane>
                            </AtTabs>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={1}>
                    <View className="phone-nav" style="padding-bottom: 140px">
                            <AtTabs
                              current={current3}
                              scroll
                              height='100vh'
                              tabDirection='vertical'
                              tabList={[
                                    { title: 'iPad' },
                                    { title: '苹果电脑' },
                                    { title: '苹果一体机' },
                                    { title: '苹果平板' },
                                ]}
                              onClick={handleClick3.bind(this)}
                            >
                            <AtTabsPane tabDirection='vertical' current={current3} index={0}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>0</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current3} index={1}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>1</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current3} index={2}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>2</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current3} index={3}>
                                <View style='font-size:18px;text-align:center;height:100vh;'>3</View>
                            </AtTabsPane>
                            </AtTabs>
                        </View>
                    </AtTabsPane>
                </AtTabs>
                </View>
            </View>
        </View>
    )
} 

export default Category