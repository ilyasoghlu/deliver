import { fetchLastArticles, fetchArticelsByCategory } from '@/utils/actions'
import React from 'react'
import LastPosts from './LastPosts'
import PostCategories from './PostCategories'
import PopularPosts from './PopularPosts'


async function ContentContainer() {
  const articles = await fetchLastArticles()
  const artcilesCategory = await fetchArticelsByCategory()
  return (
    <>
      <LastPosts articles={articles}/>
      <PostCategories articlesCategory={artcilesCategory} />
      <PopularPosts />
    </>
  )
}

export default ContentContainer