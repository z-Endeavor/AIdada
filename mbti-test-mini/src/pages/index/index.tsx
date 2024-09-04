// import { Component, PropsWithChildren } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import headerBg from "../../assets/headerBg.jpg"
import GlobalFooter from '../../components/GlobalFooter'
import Taro from '@tarojs/taro'

// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

function indexPage() {
  return (
    <View className='indexPage'>
      <View className='at-article__h1 title'>
        MBTI 性格测试
      </View>
      <View className='at-article__h2 subTitle'>
        只需 2 分钟，就能非常准确地描述出你是谁，以及你的性格特点
      </View>
      <AtButton type='primary' circle className='enterBtn' onClick={() => {
        Taro.navigateTo({
          url: '/pages/doQuestion/index'
        })
      }}>
        开始测试
      </AtButton>
      <Image className='image' src={headerBg} />
      <GlobalFooter />
    </View>
  )
}

export default indexPage
