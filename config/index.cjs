/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7b5183d1bae5cae8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a14f767a704a8a1800af88bcffec0e46',

  PROVINCE: '福建',
  CITY: '厦门',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNv-g6pOhEBZeaBF-LHrs8mYJDJY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MIsEkDLc3e9nYSIzTv_Hwf9e6IoQO0pjl4Lo3NgCyW0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1998', date: '05-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '04-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-10' },
      ],
    },
    {
      name: 'R',
      id: 'oNv-g6hAKb8gmBLwURr4rMFbJ1mk',
      useTemplateId: 'rBwzyjL9vpgwCZ1lj_Q9Jt0bAyxGmYDQF81PD2swI3U',
      province: '',
      city: '',
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: 'https://Ringcentral.com',
      festivals: [],
      customizedDateList: [
      { keyword: 'love1_day', date: '2022-10-18' },
      ],
      courseSchedule: null
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'MIsEkDLc3e9nYSIzTv_Hwf9e6IoQO0pjl4Lo3NgCyW0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNv-g6pOhEBZeaBF-LHrs8mYJDJY',
    }
  ],

}

module.exports = USER_CONFIG

