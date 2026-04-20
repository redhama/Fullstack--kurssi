const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testingBlogs = require('./bloglistfortesting')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const emptyList = []
    const result = listHelper.totalLikes(emptyList)
    assert.strictEqual(result, 0)
  })

  test('of a bigger list is calculated right', () => {
    const bigList = testingBlogs
    const result = listHelper.totalLikes(bigList)
    assert.strictEqual(result, 36)
  })
  
  test('when list has only one blog equals the likes of that', () => {
    const listWithOneBlog = [
      testingBlogs[1]
    ]
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, listWithOneBlog[0].likes)
  })

})

describe('favoriteBlog, tests for most likes', () => {
  test('Blog with most likes',() => {
    const blogList = testingBlogs
    const result = listHelper.favoriteBlog(blogList)
    assert.deepStrictEqual(result, testingBlogs[2])
  })
})

