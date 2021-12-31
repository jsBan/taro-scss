import Taro from '@tarojs/taro'
import { Component , useEffect} from 'react'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss'

const  App = (props) =>  {
  useEffect(() => {
    Taro.getSystemInfo({}).then((res) => {
      (Taro as any).$navBarMarginTop = res.statusBarHeight + 4 || 0
    })
  })
  

  // this.props.children 是将要会渲染的页面
  return props.children
  // render () {
    
  //   return this.props.children
  // }
}

export default App
