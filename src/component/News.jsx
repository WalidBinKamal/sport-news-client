import { useQuery } from '@tanstack/react-query';
import NewsCard from './newsCard';

const News = () => {

    const { isPending, data: news } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await fetch('https://sport-news-server.vercel.app/news')
            return res.json()
        }
    })

    if (isPending) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    return (
        <div className='m-5'>
            <h1 className='lg:text-7xl md:text-5xl text-2xl text-center font-semibold text-gray-700'>Sport News</h1>
            <h2 className='md:text-xl'>Total News: {news.length}</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5'>
                {
                    news.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>            

        </div>
    );
};

export default News;