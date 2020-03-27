import Mock from 'mockjs'

Mock.mock(/\/resume\?userId=\S*&page=\d*/, 'get', {
  success: true,
  message: '成功获取数据',
  content: {
    'resumes|20': [{
      'resumeId|+1': 1,
      name: '@CNAME',
      createdAt: "@date('yyyy年MM月dd日')",
      experience: '@INTEGER(0,7)'
    }],
    totalPages: 60
  }
})
