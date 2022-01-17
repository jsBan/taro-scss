import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { useEffect, useState } from "react"
import { NavBar, Card } from "../../components"
import { AtCheckbox, AtInputNumber, AtSwipeAction  } from 'taro-ui'
import './index.scss'


const Car = () => {

    const [visableLogo, setVisableLogo] = useState(true)
    const [noSearch, setNoSearch] = useState(true)
    const [title, setTitle] = useState('购物车')
    const [check, setCheck] = useState(['list1'])
    const [inputValue, setInputValue] = useState(1)

    useEffect(() => {
        console.log('hooks');
        
    })

    const handleChange = (e) => {
        console.log(e);
        setCheck(e)
        
    }

    const handleChangeNumber = (e) => {
        console.log(e);
        setInputValue(e)
        
    }


    return (
        <View className="card">
            <NavBar visableLogo={visableLogo} title={title} noSearch={noSearch}></NavBar>
            {/* <AtSwipeAction 
              options={[
                    {
                        text: '加入收藏',
                        style: {
                        backgroundColor: '#f3f3f3'
                        }
                    },
                    {
                        text: '删除',
                        style: {
                        backgroundColor: '#d71515'
                        }
                    }
                    ]}
              autoClose
              isOpened={false}
              maxDistance={300}
              areaWidth={Taro.getSystemInfoSync().windowWidth * 0.88} 
            > */}
                <View className="card-item">
                    <View className="cards-item-left">
                        <View className="cards-item-left-rand"></View>
                    </View>
                    <View className="cards-item-center">
                        <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                    </View>
                    <View className="cards-item-right">
                        <View className="cards-item-right-top">
                            <View className="cards-item-right-top-desc">iPhone11 ProMax 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）</View>
                        </View>
                        <View className="cards-item-right-center">
                            <View className="cards-item-right-center-desc">银色 256G 95新 套餐一：嗨嗨标配 （精品手机）</View>
                        </View>
                        <View className="cards-item-right-bottom">
                            <View className="cards-item-right-bottom-left">￥4799.00</View>
                            <View className="cards-item-right-bottom-right">
                                <AtInputNumber
                                  min={1}
                                  step={1}
                                  type="number"
                                  value={inputValue}
                                  onChange={(e) => handleChangeNumber(e)}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                {/* </AtSwipeAction> */}
        </View>
    )
}

export default Car