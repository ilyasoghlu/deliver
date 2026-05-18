import React from 'react'
import ArticleHeader from './components/ArticleHeader'
import ArticleContent from './components/ArticleContent'
import ArticleSidebar from './components/ArticleSidebar'
import ReleatedPosts from './components/ReleatedPosts'
import { fetchArticleDetail } from '@/utils/actions'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id: string
  }
}

async function Page({ params }: PageProps) {
  const detail = await fetchArticleDetail(params.id)

  if (!detail) {
    notFound()
  }

  const {
    id,
    title,
    description,
    image,
    category,
    avgRating,
    ratingCount,
    createdAt,
    updatedAt,
  } = detail

  return (
    <div key={id}>
      <ArticleHeader
        title={title}
        category={category}
      />

      <div className="flex gap-8">
        <ArticleSidebar />

        <ArticleContent
          image={image}
          description={description}
          avgRating={avgRating}
          rating={ratingCount}
          created={createdAt}
          updated={updatedAt}
        />
      </div>

      <ReleatedPosts category={category} />
    </div>
  )
}

export default Page