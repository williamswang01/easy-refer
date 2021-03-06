import express from 'express'
import Mock from 'mockjs'
import {Job} from '../template'

// '/jobs'
const JobsRouter = express.Router()

// 获取 Job list
JobsRouter.get('/', (req, res) => {
  res.json(Mock.mock({
    'jobList|10': [Job],
    total: 100
  }))
})

// 获取一个 Job
JobsRouter.get('/:jobId', (req, res) => {
  res.json(Mock.mock(Job))
})

// 创建一个 Job
JobsRouter.post('/', (req, res) => {
  res.json(Mock.mock(Job))
})

// 修改一个 Job
JobsRouter.put('/:jobId', (req, res) => {
  res.json(Mock.mock(Job))
})

// 删除一个 Job
JobsRouter.delete('/:jobId', (req, res) => {
  res.json()
})

export default JobsRouter
