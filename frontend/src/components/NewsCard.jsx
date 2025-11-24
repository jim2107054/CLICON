import { BsPersonCircle } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewsCard = (props) => {
    const {id, blogId, image, author, date, comment, title, description} = props;
    const navigate = useNavigate();
    
    const handleClick = () => {
        if (blogId) {
            navigate(`/blog-details/${blogId}`);
        } else {
            navigate('/blogs');
        }
    };
  return (
    <div>
        <div 
            key={id} 
            onClick={handleClick}
            className='flex flex-col w-fit gap-3 p-5 border-2 shadow-lg border-gray-300 rounded-md cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
        >
            <div>
                <img className='w-full' src={image} alt="" />
            </div>
            <div>
                <div className='flex gap-5'>
                    <p className='flex items-center font-medium text-gray-800 gap-2'><span><BsPersonCircle className='text-2xl text-btnColor'/></span>{author}</p>
                    <p className='flex items-center font-medium text-gray-800 gap-2'><span><CiCalendar className='text-3xl text-btnColor'/></span>{date}</p>
                    <p className='flex items-center font-medium text-gray-800 gap-2'><span><AiOutlineMessage className='text-3xl text-btnColor'/></span>{comment}</p>
                </div>
                <div>
                    <p className='line-clamp-2 text-xl font-medium text-gray-800 my-2'>{title}</p>
                    <p className='font-light line-clamp-2 leading-tight mb-5'>{description}</p>
                </div>
                <div>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                        className='shop-now flex items-center gap-2'
                    >
                        READ MORE <span><FaArrowRight/></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsCard