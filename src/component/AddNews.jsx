import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const AddNews = () => {

    const handleAddNews = (e) => {
        e.preventDefault()
        const form = e.target
        const headline = form.headline.value
        const reporter = form.reporter.value
        const category = form.category.value
        const imgUrl = form.imgUrl.value
        const description = form.description.value

        const news = { headline, reporter, category, imgUrl, description }

        axios.post('http://localhost:5000/news', news)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'News added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }


    return (
        <div>
            <div className="card bg-base-100 w-full shadow-2xl mt-[70px] pt-[50px] bg-slate-50">
                <h2 className='text-5xl font-semibold text-gray-700 text-center mt-5'>Add News</h2>
                <form onSubmit={handleAddNews} className="card-body text-center space-y-10">
                    {/* headline and reporter */}
                    <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Headline</span>
                            </label>
                            <input type="text" name='headline' placeholder="Headline" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Reporter</span>
                            </label>
                            <input type="text" name='reporter' placeholder="Reporter" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='imgUrl' placeholder="Image URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                        <div className="form-control flex-1">
                            <label className="label mr-3">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6 w-1/4 mx-auto ">
                        <button className="btn w-full md:text-lg  bg-orange-300 hover:bg-orange-400 text-gray-700">Add News</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNews;