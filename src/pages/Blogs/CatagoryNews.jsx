import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import CatagoryNewsCard from './CatagoryNewsCard';

const CatagoryNews = () => {
    const {id} = useParams();
    const catagoryNewsList = useLoaderData();


  return (
    <div className='"menu bg-base-200 w-56 rounded-box'>
        <h3 className='menu-title'>This catagory has value of {catagoryNewsList.length}</h3>
        {
            catagoryNewsList.map(news=><CatagoryNewsCard key={news.id} news={news}></CatagoryNewsCard>)
        }
       
    </div>
  )
}

export default CatagoryNews