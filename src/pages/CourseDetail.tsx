
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Star, 
  Users, 
  Play, 
  Download, 
  MessageSquare,
  CheckCircle,
  Calendar
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [enrollmentStatus, setEnrollmentStatus] = useState('not_enrolled');

  // Mock course data
  const course = {
    id: id || '1',
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Sarah Johnson',
    description: 'Learn the fundamentals of programming and computational thinking. This comprehensive course covers basic programming concepts, data structures, algorithms, and problem-solving techniques.',
    duration: '12 weeks',
    students: 245,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500',
    price: '$299',
    category: 'Computer Science',
    level: 'Beginner',
    language: 'English',
    lastUpdated: '2024-01-15',
    objectives: [
      'Understand fundamental programming concepts',
      'Learn basic data structures and algorithms',
      'Develop problem-solving skills',
      'Build simple applications'
    ],
    syllabus: [
      {
        week: 1,
        title: 'Introduction to Programming',
        topics: ['Variables and Data Types', 'Control Structures', 'Functions'],
        duration: '3 hours'
      },
      {
        week: 2,
        title: 'Data Structures',
        topics: ['Arrays', 'Lists', 'Stacks and Queues'],
        duration: '4 hours'
      },
      {
        week: 3,
        title: 'Algorithms',
        topics: ['Sorting', 'Searching', 'Recursion'],
        duration: '4 hours'
      }
    ],
    assignments: [
      { title: 'Basic Calculator', dueDate: '2024-01-20', points: 100 },
      { title: 'Data Structure Implementation', dueDate: '2024-01-27', points: 150 },
      { title: 'Algorithm Analysis', dueDate: '2024-02-03', points: 200 }
    ]
  };

  const handleEnrollment = () => {
    setEnrollmentStatus('enrolled');
  };

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="university-gradient rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-amber-500 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                {course.category}
              </span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">
                {course.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-blue-100 text-lg mb-6">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current text-amber-400" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated {course.lastUpdated}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-gray-900">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{course.price}</div>
              <div className="text-sm text-gray-600 mb-4">One-time payment</div>
              
              {enrollmentStatus === 'not_enrolled' ? (
                <button
                  onClick={handleEnrollment}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  Enroll Now
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Enrolled</span>
                  </div>
                  <Link
                    to={`/course/${course.id}/learn`}
                    className="block w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                  >
                    Continue Learning
                  </Link>
                </div>
              )}
              
              <div className="text-xs text-gray-500 mt-4">
                30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            <button className="py-4 px-2 border-b-2 border-blue-900 text-blue-900 font-medium">
              Overview
            </button>
            <button className="py-4 px-2 text-gray-500 hover:text-gray-700">
              Syllabus
            </button>
            <button className="py-4 px-2 text-gray-500 hover:text-gray-700">
              Assignments
            </button>
            <button className="py-4 px-2 text-gray-500 hover:text-gray-700">
              Reviews
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Learning Objectives */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Info */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Instructor</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{course.instructor}</h4>
                <p className="text-gray-600">Professor of Computer Science</p>
                <p className="text-sm text-gray-500">15+ years of teaching experience</p>
              </div>
            </div>
          </div>

          {/* Course Requirements */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• No prior programming experience required</li>
              <li>• Access to a computer with internet connection</li>
              <li>• Willingness to learn and practice regularly</li>
              <li>• Basic computer literacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
