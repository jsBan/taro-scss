/* eslint-disable import/first */
// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro'
import { View, Image,Text } from "@tarojs/components"
import Search  from "./components/Search/index"
import "./index.scss"
import { useEffect, useState } from "react"


export default function NavBar(props) {
    const { visableLogo, title, noSearch, backGround, goBack } = props
    // const style = {
    //     paddingTop: (Taro as any).$navBarMarginTop + 'px'
    //     // paddingTop: '48px'
    // }
    const [style, setStyle] = useState<any>()
    useEffect(() => {
        setStyle((Taro as any).$navBarMarginTop + 'px')
    },[])

    const handlerSearch = () => {
        Taro.navigateTo({ url: '/pages/search/index' })
    }

    const handlerGoBack = () => {
        Taro.navigateBack({
            delta: 1 // 返回上一级页面。
            });
    }

    const [userName, setUserName] = useState('')
    const [userImage, setUserImage] = useState('')
    useEffect(() => {
        if(backGround) {
            Taro.getUserProfile({
                lang: 'zh_CN',
                desc: "获取你的昵称、头像、地区及性别",
                success: response => {
                        const wxUserInfo = response.userInfo;
                        // // const { openId } = this.state;
                        console.log('getUserProfile', wxUserInfo);
                        Taro.setStorageSync(
                        "UserInfo", {
                            wxUserInfo: wxUserInfo,
                        })
                        Taro.getStorage({
                            key: 'UserInfo',
                            success ({data}) {
                                console.log(' 我是缓存数据', data);
                                setUserName(data.wxUserInfo.nickName)
                                setUserImage(data.wxUserInfo.avatarUrl)
                            }
                        })
                    },
                    fail: () => {
                    //拒绝授权
                        console.error("您拒绝了请求");
                        return;
                    }
                })
        }
    },[])
    return (
        <View className='navbarWrap' style={`paddingTop: ${style}; background: ${backGround ? '#67cab5' : ''}`} >
            <View className='warpper'>
                <View className='navbar'>
                    <View className='logo'>
                        <Image className={!visableLogo ? '': 'no_desc'} src='https://storage.360buyimg.com/mtd/home/111543234387022.jpg'  />
                        <Text onClick={handlerGoBack} className='at-icon at-icon-chevron-left  goback' style={`display: ${goBack ? 'black' : 'none '}`}></Text>
                    </View>
                    <View className="title"  style={` color: ${backGround ? '#fff' : ''}`}>{title}</View>
                    <View className={!visableLogo ? 'desc': 'no_desc'}>
                        <View className='black'>只做原装正品二手机</View> 
                        <View className='gray'>原装<Text className='spot'>.</Text>正品<Text className='spot'>.</Text>一年质保</View>
                    </View>
                </View>
                <View onClick={handlerSearch} className={noSearch ? 'displaysearch': ''}>
                    <View className='no_desc'>
                        <Search goBack={goBack} />
                    </View>
                </View>
                <View className="user-info" style={` display: ${backGround ? 'black' : 'none'}`}>
                    <View className="user-info-image">
                        <Image src={userImage}></Image>
                    </View>
                    <View className="user-info-desc">
                        <View className="user-info-desc-top">{userName}</View>
                        <View className="user-info-desc-bottom" style={userName ? 'display: bolck ': 'display: none '}>让天下旧物找到新的主人！</View>
                    </View>
                 </View>
            </View>
        </View>
    )
}