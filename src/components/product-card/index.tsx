import Taro from '@tarojs/taro'
import { View, Image, Text } from "@tarojs/components"
import "./index.scss"
import { useEffect, useState } from 'react'


export default function ProductCard(props) {

    const [cardList, setCardList] = useState(props.card)

    useEffect(() => {
        console.log(cardList);
        
    })

    return (
        <View className='product-card'>
            {
                cardList && cardList.map((item) => (
                    <View className="product-card-item" key={item.id}>
                        <View className="product-card-image">
                        <Image src={item.image}></Image>
                        </View>
                        <View className="product-card-title">{item.title}</View>
                        <View className="product-card-desc">官方直营 | 品质保障</View>
                        <View className="product-card-price">
                            <View className="product-card-price-left">￥{item.price}</View>
                            <View className="product-card-price-right">{item.sold}件已售</View>
                        </View>
                        <View className="product-card-tips">月供仅需：{item.supply}元</View>
                        <View className="product-card-btn">马上抢</View>
                    </View>
                ))
            }
        </View>
    )
}