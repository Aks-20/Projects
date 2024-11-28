import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard.jsx';

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {books.map((item) => (
        <div key={item._id} className="relative border p-4 rounded-lg hover:shadow-xl">
          <BookSingleCard book={item} />
          
          {/* Action Icons */}
          <div className="absolute top-2 right-2 flex space-x-3">
            <Link to={`/books/${item._id}`}>
              <BsInfoCircle className="text-xl text-blue-500" title="View Details" />
            </Link>
            <Link to={`/edit/${item._id}`}>
              <AiOutlineEdit className="text-xl text-yellow-500" title="Edit" />
            </Link>
            <Link to={`/delete/${item._id}`}>
              <MdOutlineDelete className="text-xl text-red-500" title="Delete" />
            </Link>
            <Link to={`/author/${item.authorId}`}>
              <BiUserCircle className="text-xl text-green-500" title="Author" />
            </Link>
            <PiBookOpenTextLight className="text-xl text-purple-500" title="Open Book" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
