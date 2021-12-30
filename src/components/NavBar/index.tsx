// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro'
import { View, Image,Text } from "@tarojs/components"
import Search  from "./components/Search/index"
import "./index.scss"


export default function NavBar(props) {
    const style = {
        // paddingTop: (Taro as any).$navBarMarginTop + 'px'
        paddingTop: '48px'
    }
    return (
        <View className='navbarWrap' style={style}>
            <View className='warpper'>
                <View className='navbar'>
                    <View className='logo'>
                        <Image src='https://storage.360buyimg.com/mtd/home/111543234387022.jpg'  />
                    </View>
                    <View className='desc'>
                        <View className='black'>只做原装正品二手机</View> 
                        <View className='gray'>原装<Text className='spot'>.</Text>正品<Text className='spot'>.</Text>一年质保</View>
                    </View>
                </View>
                <View>
                <Search />
                </View>
            </View>
        </View>
    )
}