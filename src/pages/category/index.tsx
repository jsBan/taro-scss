import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { useState, useEffect} from "react"


import "./index.scss"

const  Category = () =>  {
    const [style, setStyle] = useState<any>()
    const [current, setCount] = useState(0)
    const [current2, setCount2] = useState(0)
    const [current3, setCount3] = useState(0)
    const [url, setUrl] = useState(require("../../access/images/level3.png"))

    const [tabList, setTabList] = useState([{ title: '手机' }, { title: '平板/电脑' }])
    const [tabList1, setTabList1] = useState([
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
    ])
    const [tabList2, setTabList2] = useState([
        { title: 'iPad' },
        { title: '苹果电脑' },
        { title: '苹果一体机' },
        { title: '苹果平板' },
    ])

    const [card, setCart] = useState([
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone XR'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone XS Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone X'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone XS'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 12'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 12Pro'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
        {
            image: require("../../access/images/IPHONE.png"),
            title:'iPhone 13Pro Max'
        },
    ])

    const handleClick = (index) => {
        setCount(index)
    }
    const handleClick2 = (index) => {
        setCount2(index)
    }
    const handleClick3 = (index) => {
        setCount3(index)
    }

    const CategoryCard = (props) => {
        return (
            <View className="category-card">
                <View className="card-top">
                    <Image src={props.card.image}></Image>
                </View>
                <View className="card-bottom">{props.card.title}</View>
            </View>
        )
    }

    useEffect(() => {
        setStyle((Taro as any).$navBarMarginTop + 'px')
    },[])

    return (
        <View className="category" style={`paddingTop: ${style}`}> 
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
                              tabList={tabList1}
                              onClick={handleClick2.bind(this)}
                            >
                            <AtTabsPane tabDirection='vertical' current={current2} index={0}>
                                <View  className="image">
                                    <Image src={url}></Image>
                                </View>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPhone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                                <View className="card">
                                    {
                                        card && card.map((item, index) => (
                                            <CategoryCard key={index} card={item} />
                                        ))
                                    }
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={1}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实用配件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={2}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;华为&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={3}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荣耀&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={4}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={5}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;红米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={6}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OPPO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={7}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIVO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={8}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一加&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={9}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三星&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={10}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全新安卓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={11}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全新苹果&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current2} index={12}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;精品配件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
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
                              tabList={tabList2}
                              onClick={handleClick3.bind(this)}
                            >
                            <AtTabsPane tabDirection='vertical' current={current3} index={0}>
                                <View style='height:100vh;' className="image">
                                    <Image src={url}></Image>
                                </View>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                                <View className="card">
                                    {
                                        card && card.map((item, index) => (
                                            <CategoryCard key={index} card={item} />
                                        ))
                                    }
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current3} index={1}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苹果电脑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current3} index={2}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苹果一体机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={current3} index={3}>
                                <View className="title">
                                    —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安卓平板&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—
                                </View>
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