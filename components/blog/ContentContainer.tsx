import { fetchLastArticles, fetchCategories } from '@/utils/actions'
import React from 'react'
import LastPosts from './LastPosts'
import PostCategories from './PostCategories'
import PopularPosts from './PopularPosts'


async function ContentContainer() {
  const articles = await fetchLastArticles()
  const categories = await fetchCategories()
  return (
    <>
      <LastPosts articles={articles}/>
      <PostCategories categories={categories} />
      <PopularPosts />
    </>
  )
}

export default ContentContainer