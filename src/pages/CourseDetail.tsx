
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Star, 
  Users, 
  Play, 
  Download, 
  MessageSquare,
  CheckCircle,
  Calendar,
  FileText,
  ExternalLink
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [enrollmentStatus, setEnrollmentStatus] = useState('not_enrolled');
  const [activeTab, setActiveTab] = useState('overview');

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
        duration: '3 hours',
        materials: ['Lecture Video', 'Reading Assignment', 'Practice Exercises']
      },
      {
        week: 2,
        title: 'Data Structures',
        topics: ['Arrays', 'Lists', 'Stacks and Queues'],
        duration: '4 hours',
        materials: ['Lecture Video', 'Lab Assignment', 'Quiz']
      },
      {
        week: 3,
        title: 'Algorithms',
        topics: ['Sorting', 'Searching', 'Recursion'],
        duration: '4 hours',
        materials: ['Lecture Video', 'Programming Assignment', 'Discussion Forum']
      },
      {
        week: 4,
        title: 'Object-Oriented Programming',
        topics: ['Classes and Objects', 'Inheritance', 'Polymorphism'],
        duration: '5 hours',
        materials: ['Lecture Video', 'Project Assignment', 'Peer Review']
      }
    ],
    assignments: [
      { 
        id: 1,
        title: 'Basic Calculator', 
        dueDate: '2024-01-20', 
        points: 100,
        type: 'Programming',
        status: 'upcoming',
        description: 'Create a basic calculator using fundamental programming concepts.'
      },
      { 
        id: 2,
        title: 'Data Structure Implementation', 
        dueDate: '2024-01-27', 
        points: 150,
        type: 'Programming',
        status: 'in_progress',
        description: 'Implement and test various data structures including arrays and linked lists.'
      },
      { 
        id: 3,
        title: 'Algorithm Analysis', 
        dueDate: '2024-02-03', 
        points: 200,
        type: 'Research',
        status: 'upcoming',
        description: 'Analyze the time and space complexity of different sorting algorithms.'
      }
    ],
    reviews: [
      {
        id: 1,
        student: 'Alex Chen',
        rating: 5,
        date: '2024-01-10',
        comment: 'Excellent course! Dr. Johnson explains complex concepts in a very understandable way.',
        helpful: 24
      },
      {
        id: 2,
        student: 'Maria Garcia',
        rating: 4,
        date: '2024-01-08',
        comment: 'Great content and structure. The assignments are challenging but fair.',
        helpful: 18
      },
      {
        id: 3,
        student: 'John Smith',
        rating: 5,
        date: '2024-01-05',
        comment: 'Perfect for beginners. I learned so much in just a few weeks!',
        helpful: 31
      }
    ]
  };

  const handleEnrollment = () => {
    setEnrollmentStatus('enrolled');
  };

  const handleJoinOnline = () => {
    // Simulate joining online session
    alert('Joining online session... (Demo feature)');
  };

  const handleViewDiscussion = (assignmentId?: number) => {
    navigate('/discussions');
  };

  const handleSubmitAssignment = (assignmentId: number) => {
    navigate('/assignments');
  };

  const handleViewDetails = (assignmentId: number) => {
    // For demo, just show alert with assignment details
    const assignment = course.assignments.find(a => a.id === assignmentId);
    alert(`Assignment Details:\n\nTitle: ${assignment?.title}\nDue Date: ${assignment?.dueDate}\nPoints: ${assignment?.points}\n\nDescription: ${assignment?.description}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
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
        );

      case 'syllabus':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Course Syllabus</h3>
            <div className="space-y-6">
              {course.syllabus.map((week) => (
                <div key={week.week} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-blue-900">
                      Week {week.week}: {week.title}
                    </h4>
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {week.duration}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">Topics Covered:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {week.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Learning Materials:</h5>
                    <div className="flex flex-wrap gap-2">
                      {week.materials.map((material, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'assignments':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Course Assignments</h3>
            <div className="space-y-4">
              {course.assignments.map((assignment) => (
                <div key={assignment.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{assignment.title}</h4>
                      <p className="text-gray-600 mb-3">{assignment.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {new Date(assignment.dueDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {assignment.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          assignment.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                          assignment.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {assignment.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <p className="text-sm text-gray-600">Points</p>
                      <p className="text-lg font-bold text-gray-900">{assignment.points}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewDetails(assignment.id)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleViewDiscussion(assignment.id)}
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      View Discussion
                    </button>
                    {enrollmentStatus === 'enrolled' && (
                      <button 
                        onClick={() => handleSubmitAssignment(assignment.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Submit Assignment
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Student Reviews</h3>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current text-amber-400" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-gray-600">({course.reviews.length} reviews)</span>
              </div>
            </div>

            <div className="space-y-6">
              {course.reviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                        {review.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.student}</h4>
                        <p className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${star <= review.rating ? 'fill-current text-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{review.helpful} people found this helpful</span>
                    <button className="text-sm text-blue-600 hover:text-blue-800">Mark as helpful</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
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
                  className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium mb-3"
                >
                  Enroll Now
                </button>
              ) : (
                <div className="space-y-2 mb-3">
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

              {enrollmentStatus === 'enrolled' && (
                <button
                  onClick={handleJoinOnline}
                  className="w-full bg-amber-500 text-blue-900 py-2 rounded-lg hover:bg-amber-400 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Join Online
                </button>
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
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'syllabus', label: 'Syllabus' },
              { key: 'assignments', label: 'Assignments' },
              { key: 'reviews', label: 'Reviews' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
