
import { Link } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  progress?: number;
}

const CourseCard = ({ 
  id, 
  title, 
  instructor, 
  description, 
  duration, 
  students, 
  rating, 
  image, 
  progress 
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Progress</span>
              <span className="text-sm">{progress}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div 
                className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-blue-600 mb-2">by {instructor}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {students}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-amber-500 fill-current" />
            {rating}
          </div>
        </div>
        
        <Link
          to={`/course/${id}`}
          className="block w-full bg-blue-900 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
        >
          {progress !== undefined ? 'Continue Learning' : 'View Course'}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
