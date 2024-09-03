// import { Component, PropsWithChildren } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import headerBg from "../../assets/headerBg.jpg"
import GlobalFooter from '../../components/GlobalFooter'
import questionResults from '../../data/question_results.json'
import Taro from '@tarojs/taro'

// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

// 测试结果页面

function resultPage() {
  const result = questionResults[0]

  return (
    <View className='resultPage'>
      <View className='at-article__h1 title'>
        {result.resultName}
      </View>
      <View className='at-article__h2 subTitle'>
        {result.resultDesc}
      </View>
      <AtButton type='primary' circle className='enterBtn' onClick={() => {
        Taro.reLaunch({
          url: "/pages/index/index"
        })
      }}>
        返回主页
      </AtButton>
      <Image src={headerBg} />
      <GlobalFooter />
    </View>
  )
}

export default resultPage
