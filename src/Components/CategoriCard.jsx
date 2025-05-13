import React from 'react';
import { FaStar,FaRegEye,FaDashcube} from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const CategoriCard = ({news}) => {
    const formatDate=new Date(news.author.published_date).toLocaleDateString();
    return (
         <div className="border rounded-xl p-4 shadow-md bg-white">
      {/* Header: Author & Actions */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{news.author.name}</h3>
            <p className="text-xs text-gray-500">{formatDate}</p>
          </div>
        </div>
        <div className="flex gap-2 ">
         <CiShare2 size={22} />
         <FaDashcube size={22} />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mb-2">{news.title}</h2>

      {/* Image */}
      <img
        src={news.image_url}
        alt="news"
        className="w-full rounded-lg mb-3"
      />

      {/* Description */}
      <p className="text-sm text-gray-600 mb-2">
        {news.details.length > 250 ? news.details.slice(0, 250) + '...' : news.details}
        <span className="text-orange-500 font-medium ml-1 cursor-pointer">Read More</span>
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center pt-2 border-t mt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black font-medium ml-1">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
    );
};

export default CategoriCard;