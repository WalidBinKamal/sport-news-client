import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const NewsList = () => {
    const { isPending, data: news, refetch } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/news')
            return res.json()
        }
    })

    const handleDeleteNews = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/news/${id}`, {
                    method: 'delete',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your news has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    if (isPending) {
        return <span className="loading loading-infinity loading-lg"></span>
    }


    return (
        <div className='m-5'>
            <h1 className='text-3xl text-center font-semibold text-gray-700'>News List</h1>
            <div className="">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Headline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            news.map((news, index) =>
                                <tr key={news._id}>
                                    <th>{index+1}</th>
                                    <td>{news.reporter}</td>
                                    <td>{news.headline}</td>
                                    <td><div>
                                        <button onClick={() => handleDeleteNews(news._id)} className="btn">X</button>
                                    </div></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewsList;