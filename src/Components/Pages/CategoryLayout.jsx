import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CategoriCard from '../CategoriCard';

const CategoryLayout = () => {
    const {id}=useParams()
    const data = useLoaderData();
    const [categoriNews,setCategoriNews] =useState([]);
    useEffect(()=>{
        if(id=='0'){
            setCategoriNews(data);
            return;
        }
        else if(id=='1'){
             const newsFilter=data.filter(news=>news.others.is_today_pick==true)
                setCategoriNews(newsFilter)
        }
        else{
             const newsFilter=data.filter(news=>news.category_id==id)
     
        setCategoriNews(newsFilter)

        }
       
    },[data,id])
    return (
        <div>
           <h2 className='font-bold '>Total <span className='text-red-500'>{categoriNews.length}</span> news found</h2>
           <div className='grid grid-cols-1 gap-2'>
            {
            categoriNews.map((news)=><CategoriCard key={news.id} news={news}></CategoriCard>)
            }
           </div>
        </div>
    );
};

export default CategoryLayout;