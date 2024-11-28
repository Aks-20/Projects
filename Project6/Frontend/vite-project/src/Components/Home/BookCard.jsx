// Import statements (uncommented)
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard.jsx';

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {books.map((item) => (
        <div key={item._id} className="relative">
          <BookSingleCard book={item} />
          {/* Icons for actions on the book */}
          <div className="absolute top-0 right-0 flex space-x-2 p-2">
            <Link to={`/books/${item._id}`}>
              <BsInfoCircle size={20} title="View Details" />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit size={20} title="Edit Book" />
            </Link>
            <button onClick={() => handleDelete(item._id)}>
              <MdOutlineDelete size={20} title="Delete Book" />
            </button>
            <Link to={`/author/${item.authorId}`}>
              <BiUserCircle size={20} title="Author Info" />
            </Link>
            <PiBookOpenTextLight size={20} title="Read Book" />
          </div>
        </div>
      ))}
    </div>
  );
};

const handleDelete = (bookId) => {
    // Logic to delete the book
    console.log(`Delete book with ID: ${bookId}`);
  };

export default BooksCard;