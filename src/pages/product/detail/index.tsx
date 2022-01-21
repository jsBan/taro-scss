import { Component } from 'react'
import { View, Image,Swiper, SwiperItem, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useState } from "react"
import "./index.scss"
import { AtFloatLayout,AtToast ,AtButton  } from 'taro-ui'
import { iPhoneData, AnZhuoData, iPadData, productDetails } from "../../../mock"
import { NavBar, ProductCard } from "../../../components"

const ProductDetail = (options) => {
    const [detailId, setDetailId] = useState(Number(options.tid.substr(options.tid.indexOf("=")+1 ,1)))
    const [detailDate, setDetailDate] = useState(() => {
        // if(detailId == 0) {
        //     iPhoneData.map(item => {
        //         if(item.id == detailId) {
        //             return item
        //         }
        //     })
        // }else if(detailId == 1) {
        //     AnZhuoData.map(item => {
        //         if(item.id == detailId) {
        //             return item
        //         }
        //     })
        // }else {
        //     iPadData.map(item => {
        //         if(item.id == detailId) {
        //             return item
        //         }
        //     })
        // }
    })

    const [image, setImage] = useState(require("../../../access/images/card-info.png"))
    const [openFlag, setOpenFlag] = useState(false)
    const [toastFlag, setToastFlag] = useState(false)
    const [productDetailss, setproductDetailss] = useState(productDetails)

    

  

    const handlerCLickDetail = (id) =>{
        console.log(id);
    }
    /**
     * 领取优惠券弹框
     */
    const handerClickCoupon = ()=> {
        setOpenFlag(true)
        setToastFlag(false)
    }
    const handleCouponClose = ()=> {
        setOpenFlag(false)
    }
    const handlerToastClose = ()=> {
        setToastFlag(false)
    }
    
    /**
     * 优惠券
     */
    const handlerCoupon = async(id) => {
        setOpenFlag(false)
        setToastFlag(true)
        productDetailss.couponList && productDetailss.couponList.map(async (item) => {
            if(item.id === id) {    
                console.log(item);
                await setproductDetailss( 
                    () => {
                    item.receive = true
                    return {...productDetailss}
                })
            }
        })
    }
    /**
     * 选择规格属性
     */
    const handleRelationInfo = () => {
        console.log(123);
        
    }

    useEffect(() =>{
        console.log(detailDate);
        console.log(detailId);
    })
    return (
        <View className="product-detail">
            <NavBar visableLogo title='商品详情' goBack noSearch />
            <AtToast isOpened={toastFlag} onClose={handlerToastClose} text="领取成功" status="success" /> 
            <View className="product-detail-swiper">
            <Swiper
              className='swiper-container'
              circular
              indicatorDots
              indicatorColor='#999'
              indicatorActiveColor='#bf708f'
              autoplay
            >
                {
                    productDetailss && productDetailss.images.map((item, index) => (
                    <SwiperItem key={index}>
                        <View className='images'>
                            <Image className='swiper-img' src={item} mode='widthFix'></Image>
                        </View>
                    </SwiperItem>
                    ) )
                }
                </Swiper>
            </View>    
            <View className="product-detail-card">
                <View className="product-detail-card-info">
                    <View className="product-detail-card-info-price">
                        <View className="product-detail-card-info-price-top">￥<Text>3799.00</Text></View>
                        <View className="product-detail-card-info-price-bottom">券后到手价￥<Text>3599.00</Text></View>
                    </View>
                    <View className="product-detail-card-info-coupon">
                        <View className="product-detail-card-info-coupon-left">
                            <Text >满999减50</Text>
                            <Text >满1999减200</Text>
                            <Text>满999减20</Text>
                        </View>
                        <View className="product-detail-card-info-coupon-right" onClick={handerClickCoupon}>
                                领取 <Text className="at-icon at-icon-chevron-right"></Text>
                        </View>
                        <AtFloatLayout className="product-detail-card-info-coupon-modal" isOpened={openFlag} title="优惠券" onClose={handleCouponClose}>
                            {
                                 productDetailss && productDetailss.couponList.map((item, coupon_index) => (
                                    <View className="coupon-modal-item" key={coupon_index}>
                                        <View className="coupon-modal-item-left">
                                            <View className="coupon-modal-item-left-top">
                                                ￥<Text>{item.price}</Text>
                                            </View>
                                            <View className="coupon-modal-item-left-bottom">
                                                满{item.full}元可用
                                            </View>
                                        </View>
                                        <View className="coupon-modal-item-right">
                                            <View className="coupon-modal-item-right-top">
                                                <Text>优惠券</Text> {item.coupon_name}
                                            </View>
                                            <View className="coupon-modal-item-right-center">
                                                <Text>通用</Text> 全场通用
                                            </View>
                                            <View className="coupon-modal-item-right-bottom">
                                                <View className="coupon-modal-item-right-bottom-left">
                                                   {item.start_time}—{item.end_time}
                                                </View>
                                                <View className="coupon-modal-item-right-bottom-right" >
                                                    <AtButton size="small" circle disabled={item.receive} onClick={() => handlerCoupon(item.id)} >立即领取</AtButton>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                 ))
                            }
                        </AtFloatLayout>
                    </View>
                    <View className="product-detail-card-info-title">
                        【全新】 iPad mini 6
                    </View>
                    <View className="product-detail-card-info-image">
                        <Image src={image}></Image>
                    </View>
                </View>
            </View>
            <View className="product-detail-relation">
               <View className="product-detail-relation-info">
                    <View className="product-detail-relation-seleted" onClick={handleRelationInfo}>
                        <View className="seleted-desc">
                            <Text>已选</Text> 黑色,64G,正常款,95新,套餐一:嗨嗨标配(精美数值)
                        </View>
                        <View className="at-icon at-icon-chevron-right seleted-desc-right"></View>
                    </View>
                    <View className="product-detail-relation-active">
                        <Text>活动</Text><Text className="active-tag">赠品</Text>购机送充电器套装、指环套（限二手机）
                    </View>
                    <View className="product-detail-relation-after">
                        <Text>售后</Text>7天无理由退换&nbsp;&nbsp;<Text className="relation-after-spot">.</Text> &nbsp;&nbsp;一年质保
                    </View>
                    <View className="product-detail-relation-recovery">
                        <Text>回收</Text>卖旧机换新机、可回本30%
                    </View>
               </View>
            </View>
            <View className="product-detail-footer">
                <View className="product-detail-footer-title">
                    注明：iPhone XR默认是美版无锁单卡的哈~
                </View>
                <View className="product-detail-footer-image">
                    <Image src="https://img2.baidu.com/it/u=2302947820,3934982105&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1526"></Image>
                </View>
            </View>
            {/* <View className=""></View> */}
        </View>
    )
} 

export default ProductDetail