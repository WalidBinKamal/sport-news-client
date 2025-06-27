import React from 'react';

const NewsCard = ({ news }) => {
    const { headline, reporter, category, imgUrl, description } = news
    return (
        <div>
            <div className="card bg-slate-50 shadow-xl">
                <h2 className='text-center text-xl font-semibold pt-5'>Category: {category}</h2>
                <figure className="px-10 pt-10">
                    <img
                        src={imgUrl}
                        alt="Shoes"
                        className="rounded-xl w-full object-cover h-[300px]" />
                </figure>
                <div className="md:w-10/12 mx-auto space-y-3 mt-5">
                    <h2 className="text-center text-xl font-semibold">{headline}</h2>
                    <p className='text-sm'>Reporter: {reporter}</p>
                    <p className='text-lg pb-8'>{description}</p>                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;