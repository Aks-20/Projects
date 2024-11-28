import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookModal from './BookModal.jsx';

const BookSingleCard = ({ book = {} }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      {/* Publish Year Badge */}
      {book.publishYear && (
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
      )}

      {/* Book ID */}
      {book._id && <h4 className="my-2 text-gray-500">{book._id}</h4>}

      {/* Book Title */}
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" aria-label="Book Icon" />
        <h2 className="my-1">{book.title || 'Unknown Title'}</h2>
      </div>

      {/* Book Author */}
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" aria-label="Author Icon" />
        <h2 className="my-1">{book.author || 'Unknown Author'}</h2>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          aria-label="View Details"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id || ''}`} aria-label="Book Details">
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id || ''}`} aria-label="Edit Book">
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id || ''}`} aria-label="Delete Book">
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
