import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/Home/BookTable'; // Add BooksTable import
import BooksCard from '../components/Home/BooksCard'; // Add BooksCard import
import "./Home.css"

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showType, setShowType] = useState('table');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Initialize theme from localStorage

  // Fetch books data
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get('http://localhost:5555/books');
        
        if (response.data && response.data.data) {
          setBooks(response.data.data);
        } else {
          setError('No book data received');
        }
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to fetch books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Toggle between light and dark
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference in localStorage

    if (newTheme === 'dark') {
      document.body.classList.add('dark'); // Add dark class to body
    } else {
      document.body.classList.remove('dark'); // Remove dark class from body
    }
  };

  // Render the content based on loading, error, and selected view (table/card)
  const renderContent = () => {
    if (loading) return <Spinner />;
    if (error) return <div className='text-red-500'>{error}</div>;
    
    return showType === 'table' 
      ? <BooksTable books={books} /> 
      : <BooksCard books={books} />;
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

      <div className='flex justify-between items-center my-4'>
        <h1 className='text-3xl'>Books List</h1>
        <div className="flex gap-4">
          {/* Theme Toggle Button */}
          <button 
            className="px-4 py-2 bg-gray-300 rounded-lg" 
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
          </button>

          {/* Create New Book Button */}
          <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default Home;
