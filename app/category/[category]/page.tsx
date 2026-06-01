import React from 'react'
import { fetchArticlesByCategory } from '@/utils/actions'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Props = {
  params:{
    category:string
  }
}

async function page({params}:Props) {

  const articles = await fetchArticlesByCategory(params.category)
  return (
    <div>
      {articles.length === 0 &&(
        <p>No Articles found</p>
      )}
      <ul>
        {articles.map(article =>(
          <li key={article.id} className='flex items-center gap-2 text-muted-foreground cursor-pointer uppercase'><MdOutlineKeyboardArrowRight />
            <h2>{article.title}</h2>
          </li>
        ))
        }
      </ul>

    </div>
  )
}

export default page