import React from 'react'

const BookEntry = ({ formData, setFormData }) => {
    return (
        <div>
            <div className='flex justify-between font-semibold text-2xl mb-6'>
                <h1>Book Information:</h1>
            </div>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Name: <span className='text-rose-600'>*</span></label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="bookname" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Book Name: <span className='text-rose-600'>*</span></label>
                <input type="text" id="bookname" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Name" required
                    value={formData.bookName}
                    onChange={(e) => setFormData({ ...formData, bookName: e.target.value })}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="Age" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Age: <span className='text-rose-600'>*</span></label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <option value="option1">Select Age</option>
                    <option value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: 15 })}>15</option>
                    <option value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: 16 })}>16</option>
                    <option value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: 17 })}>17</option>
                </select>
            </div>
            <div className="mb-6">
                <label htmlFor="Date" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Date: <span className='text-rose-600'>*</span></label>
                <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="page" className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-left">Page: <span className='text-rose-600'>*</span></label>
                <input type="number" name="num" id="num" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                    value={formData.page}
                    onChange={(e) => setFormData({ ...formData, page: e.target.value })} />
            </div>
            <div className="mb-6 flex justify-between">
                <label htmlFor="Booktype" className="mb-2 text-md font-medium text-gray-900 dark:text-white text-left flex space-x-6">Book Type: <span className='text-rose-600'>*</span>
                </label>
                <div className='space-x-6'>
                    <label htmlFor="">Story <input type="checkbox" name="story" id=""
                        value={formData.bookType}
                        onChange={(e) => setFormData({ ...formData, bookType: e.target.value })} />
                    </label>
                    <label htmlFor="">Poem <input type="checkbox" name="poem" id=""
                        value={formData.bookType}
                        onChange={(e) => setFormData({ ...formData, bookType: e.target.value })} />
                    </label>
                    <label htmlFor="">Horror <input type="checkbox" name="Horror" id=""
                        value={formData.bookType}
                        onChange={(e) => setFormData({ ...formData, bookType: e.target.value })} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default BookEntry