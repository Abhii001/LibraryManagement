import  { useState } from 'react';
import { addBookToMockData } from '/src/utilis/MockData';

const AddBooks = () => {
    const [book, setBook] = useState({
        number: '',
        title: '',
        originalTitle: '',
        releaseDate: '',
        description: '',
        pages: '',
        cover: '',
        index: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {0
        e.preventDefault();
        const newBook = {
            ...book,
            number: parseInt(book.number),
            pages: parseInt(book.pages),
            index: parseInt(book.index)
        };

        // Add the new book to the mock data
        addBookToMockData(newBook);

        // Reset form fields after submission
        setBook({
            number: '',
            title: '',
            originalTitle: '',
            releaseDate: '',
            description: '',
            pages: '',
            cover: '',
            index: ''
        });
    };

    return (
        <div className="flex flex-wrap justify-center items-center">
            <form className="w-[75%]" onSubmit={handleSubmit}>
                <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">Add a New Book</h5>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number</label>
                    <input
                        type="number"
                        name="number"
                        value={book.number}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Original Title</label>
                    <input
                        type="text"
                        name="originalTitle"
                        value={book.originalTitle}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release Date</label>
                    <input
                        type="text"
                        name="releaseDate"
                        value={book.releaseDate}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea
                        name="description"
                        value={book.description}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pages</label>
                    <input
                        type="number"
                        name="pages"
                        value={book.pages}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover URL</label>
                    <input
                        type="text"
                        name="cover"
                        value={book.cover}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Index</label>
                    <input
                        type="number"
                        name="index"
                        value={book.index}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBooks;
