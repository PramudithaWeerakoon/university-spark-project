
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Clock, Users, Star, BookOpen, FileText, MessageSquare, Award } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data
  const course = {
    id: id,
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Sarah Johnson',
    description: 'This comprehensive course introduces students to the fundamental concepts of computer science, including programming, data structures, algorithms, and computational thinking. Perfect for beginners with no prior programming experience.',
    duration: '12 weeks',
    students: 245,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    price: 'Free',
    level: 'Beginner',
    language: 'English',
    certificate: true,
    enrolled: false
  };

  const modules = [
    {
      id: 1,
      title: 'Introduction to Programming',
      lessons: [
        { id: 1, title: 'What is Programming?', duration: '15 min', type: 'video', completed: true },
        { id: 2, title: 'Setting Up Your Environment', duration: '20 min', type: 'video', completed: true },
        { id: 3, title: 'Your First Program', duration: '25 min', type: 'video', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Variables and Data Types',
      lessons: [
        { id: 4, title: 'Understanding Variables', duration: '18 min', type: 'video', completed: false },
        { id: 5, title: 'Data Types in Programming', duration: '22 min', type: 'video', completed: false },
        { id: 6, title: 'Practice Exercise', duration: '30 min', type: 'assignment', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Control Structures',
      lessons: [
        { id: 7, title: 'Conditional Statements', duration: '20 min', type: 'video', completed: false },
        { id: 8, title: 'Loops and Iteration', duration: '25 min', type: 'video', completed: false },
        { id: 9, title: 'Quiz: Control Structures', duration: '15 min', type: 'quiz', completed: false }
      ]
    }
  ];

  const instructor = {
    name: 'Dr. Sarah Johnson',
    title: 'Professor of Computer Science',
    bio: 'Dr. Johnson has over 15 years of experience in computer science education and research. She specializes in algorithms and data structures.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    courses: 12,
    students: 3420,
    rating: 4.9
  };

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{course.level}</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{course.language}</span>
              {course.certificate && (
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Certificate
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
            <p className="text-lg text-blue-600 mb-4">by {course.instructor}</p>
            <p className="text-gray-600 mb-6">{course.description}</p>
            
            <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {course.students} students
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-amber-500 fill-current" />
                {course.rating} ({course.reviews} reviews)
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                {course.enrolled ? 'Continue Learning' : 'Enroll Now'}
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'curriculum', label: 'Curriculum', icon: FileText },
              { id: 'instructor', label: 'Instructor', icon: User },
              { id: 'reviews', label: 'Reviews', icon: MessageSquare }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-2 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Fundamental programming concepts',
                    'Problem-solving techniques',
                    'Data structures and algorithms',
                    'Programming best practices',
                    'Debugging and testing',
                    'Software development lifecycle'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                <p className="text-gray-600">No prior programming experience required. Basic computer literacy is helpful.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Course Format</h3>
                <p className="text-gray-600">
                  This course includes video lectures, hands-on coding exercises, quizzes, and programming assignments. 
                  You'll have access to a supportive community of learners and instructors.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              {modules.map((module) => (
                <div key={module.id} className="border border-gray-200 rounded-lg">
                  <div className="p-4 bg-gray-50 border-b">
                    <h4 className="font-semibold text-gray-900">Module {module.id}: {module.title}</h4>
                  </div>
                  <div className="divide-y">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                        <div className="flex items-center">
                          {lesson.type === 'video' && <Play className="w-4 h-4 mr-3 text-blue-600" />}
                          {lesson.type === 'assignment' && <FileText className="w-4 h-4 mr-3 text-green-600" />}
                          {lesson.type === 'quiz' && <BookOpen className="w-4 h-4 mr-3 text-purple-600" />}
                          <div>
                            <p className="font-medium text-gray-900">{lesson.title}</p>
                            <p className="text-sm text-gray-600">{lesson.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {lesson.completed && (
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                          <Link
                            to={`/lesson/${lesson.id}`}
                            className="text-blue-600 hover:text-blue-500 text-sm"
                          >
                            {lesson.completed ? 'Review' : 'Start'}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'instructor' && (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full mx-auto md:mx-0"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-blue-600 mb-4">{instructor.title}</p>
                <p className="text-gray-600 mb-6">{instructor.bio}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{instructor.courses}</p>
                    <p className="text-sm text-gray-600">Courses</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{instructor.students.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Students</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{instructor.rating}</p>
                    <p className="text-sm text-gray-600">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{course.rating}</div>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-5 h-5 ${star <= Math.floor(course.rating) ? 'text-amber-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">{course.reviews} reviews</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Alex Chen', rating: 5, comment: 'Excellent course! The instructor explains concepts clearly and the hands-on projects are very helpful.', date: '2 weeks ago' },
                  { name: 'Maria Garcia', rating: 4, comment: 'Great introduction to computer science. Well structured and easy to follow.', date: '1 month ago' },
                  { name: 'John Smith', rating: 5, comment: 'Perfect for beginners. I had no programming experience and now I feel confident to continue learning.', date: '1 month ago' }
                ].map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-medium">{review.name[0]}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{review.name}</p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`w-4 h-4 ${star <= review.rating ? 'text-amber-500 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
