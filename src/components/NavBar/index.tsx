// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro'
import { View, Image,Text } from "@tarojs/components"
import Search  from "./components/Search/index"
import "./index.scss"
import { useEffect,useState } from 'react'


export default function NavBar(props) {
    const { visableLogo, title, noSearch } = props
    // const style = {
    //     paddingTop: (Taro as any).$navBarMarginTop + 'px'
    //     // paddingTop: '48px'
    // }
    const [style, setStyle] = useState<any>()
    useEffect(() => {
        setStyle((Taro as any).$navBarMarginTop + 'px')
        console.log(style);
        console.log(noSearch);
        
    })

    const handlerSearch = () => {
        Taro.navigateTo({ url: '/pages/search/index' })
    }
    return (
        <View className='navbarWrap' style={`paddingTop: ${style}`}>
            <View className='warpper'>
                <View className='navbar'>
                    <View className='logo'>
                        <Image className={!visableLogo ? '': 'no_desc'} src='https://storage.360buyimg.com/mtd/home/111543234387022.jpg'  />
                    </View>
                    <View className="title">{title}</View>
                    <View className={!visableLogo ? 'desc': 'no_desc'}>
                        <View className='black'>只做原装正品二手机</View> 
                        <View className='gray'>原装<Text className='spot'>.</Text>正品<Text className='spot'>.</Text>一年质保</View>
                    </View>
                </View>
                <View onClick={handlerSearch} className={noSearch ? 'displaysearch': ''}>
                    <View className='no_desc'>
                        <Search  />
                    </View>
                </View>
            </View>
        </View>
    )
}