import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../Components/Home/BookTable.jsx';
import BooksCard from '../Components/Home/BookCard.jsx';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (bookId) => {
    // Logic to delete the book
    console.log(`Delete book with ID: ${bookId}`);
    // You can add axios delete request here to remove the book from the backend
  };

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
      {/* Adding actions to each book item */}
      <div className='mt-8'>
        {books.map((book) => (
          <div key={book._id} className='flex items-center justify-between p-4 border rounded-lg my-2'>
            <div className='flex flex-col'>
              <span className='font-bold'>{book.title}</span>
              <span className='text-sm'>{book.author}</span>
            </div>
            <div className='flex gap-x-4'>
              <Link to={`/books/${book._id}`} title='View Details'>
                <BsInfoCircle className='text-blue-500 text-2xl' />
              </Link>
              <Link to={`/books/edit/${book._id}`} title='Edit Book'>
                <AiOutlineEdit className='text-green-500 text-2xl' />
              </Link>
              <button onClick={() => handleDelete(book._id)} title='Delete Book'>
                <MdOutlineDelete className='text-red-500 text-2xl' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
