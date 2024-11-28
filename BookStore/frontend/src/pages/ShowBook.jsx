import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BackButton = () => <button onClick={() => window.history.back()}>Back</button>;
const Spinner = () => <div>Loading...</div>;

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
    <BackButton />
    <h1 className='text-4xl font-bold my-6 text-center text-gray-700'>Show Book</h1>
    {loading ? (
      <div className='flex justify-center items-center'>
        <Spinner />
      </div>
    ) : (
      <div className='flex flex-col border-2 border-sky-500 rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto p-6 bg-white'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-600 font-semibold'>Id:</span>
          <span className='text-gray-500'>{book._id || 'N/A'}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-600 font-semibold'>Title:</span>
          <span className='text-gray-500'>{book.title || 'N/A'}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-600 font-semibold'>Author:</span>
          <span className='text-gray-500'>{book.author || 'N/A'}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-600 font-semibold'>Publish Year:</span>
          <span className='text-gray-500'>{book.publishYear || 'N/A'}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-600 font-semibold'>Create Time:</span>
          <span className='text-gray-500'>{book.createdAt ? new Date(book.createdAt).toString() : 'N/A'}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-600 font-semibold'>Last Update Time:</span>
          <span className='text-gray-500'>{book.updatedAt ? new Date(book.updatedAt).toString() : 'N/A'}</span>
        </div>
      </div>
    )}
  </div>
  )
}
export default ShowBook;
