import { View } from '@tarojs/components'
import { useEffect, useState } from "react"
import { NavBar, Card } from "../../components"
import './index.scss'

const Car = () => {

    const [visableLogo, setVisableLogo] = useState(true)
    const [noSearch, setNoSearch] = useState(true)
        const [title, setTitle] = useState('购物车')

    useEffect(() => {
        console.log('hooks');
        
    })




    return (
        <View className="card">
            <NavBar visableLogo={visableLogo} title={title} noSearch={noSearch}></NavBar>
            购物车
        </View>
    )
}

export default Car