import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useState } from "react"
import { NavBar, ProductCard } from "../../components"
import "./index.scss"
import { AtTabs, AtTabsPane,  } from 'taro-ui'
import { iPhoneData, AnZhuoData,iPadData } from "../../mock"

const Product = (options) => {
    const [visableLogo, setVisableLogo] = useState(true)
    const [goBack, setGoBack] = useState(false)
    const [title, setTitle] = useState('')
    const [current, setCurrent] = useState(0)
    const [tabList, setTabList] = useState([{ title: '默认' }, { title: '销量' }, { title: '价格' }])
    const [goryId, setGoryId] = useState(Number(options.tid.substr(options.tid.indexOf("=")+1 ,1)))
    const [productDatas, setProductData] = useState<any>( () => {
         if(goryId == 0) {
             return iPhoneData
        }else if(goryId == 1) {
            return AnZhuoData
        }else {
            return iPadData
        }
    })
    

    const handleClick = (e)=> {
        setCurrent(e)
        switch (e) {
            case 0:
                if(goryId == 0) {
                    setProductData(iPhoneData)
                }else if(goryId == 1) {
                    setProductData(AnZhuoData)
                }else {
                    setProductData(iPadData)
                }
                return 
            case 1:
                setProductData(productDatas.sort((x,y) => Number(y.sold) - Number(x.sold)))
                return 
            case 2:
                setProductData(productDatas.sort((x,y) => Number(y.price) - Number(x.price)))
                return 
            default:
                return
        }
    }

    const handlerCLickDetail = (id) =>{
        Taro.navigateTo({
            url: '/pages/product/detail/index?id='+JSON.stringify(id),
        })
    }
    

    useEffect(() =>{
        for (let index = 0; index <=7; index++) {
            switch (goryId) {
                case 0:
                    setTitle('iPhone')
                    break;
                case 1:
                     setTitle('安卓')
                    break;
                case 2:
                     setTitle('平板/iPad')
                    break;
                case 3:
                     setTitle('电脑')
                    break;
                case 4:
                     setTitle('配件')
                    break;
                case 5:
                     setTitle('捡漏专区')
                    break;
                case 6:
                     setTitle('领券中心')
                    break;
                case 7:
                     setTitle('爆品推荐')
                    break;
                default:
                    break;
            }   
        }
        setGoBack(true)
    },[])
    return (
        <View className="product">
                <NavBar visableLogo={visableLogo} title={title} goBack={goBack} ></NavBar>
                <View className="product-tabs">
                <AtTabs current={current} tabList={tabList} onClick={(e) => handleClick(e)}>
                    <AtTabsPane current={current} index={0} >
                        <View className="product-card-info">
                            <ProductCard card={productDatas} clickDetail={handlerCLickDetail} />
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={1}>
                        <View className="product-card-info">
                            <ProductCard card={productDatas} />
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={2}>
                        <View className="product-card-info">
                            <ProductCard card={productDatas} />
                        </View>
                    </AtTabsPane>
                </AtTabs>
                </View>
        </View>
    )
} 

export default Product