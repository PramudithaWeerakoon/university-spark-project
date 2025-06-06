
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, TrendingUp, Award, Users } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Sarah Johnson',
      description: 'Learn the fundamentals of programming and computational thinking.',
      duration: '12 weeks',
      students: 245,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500',
      progress: 65
    },
    {
      id: '2',
      title: 'Data Structures & Algorithms',
      instructor: 'Prof. Michael Chen',
      description: 'Master essential data structures and algorithmic problem solving.',
      duration: '16 weeks',
      students: 189,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500',
      progress: 30
    },
    {
      id: '3',
      title: 'Web Development Fundamentals',
      instructor: 'Dr. Emily Rodriguez',
      description: 'Build modern web applications with HTML, CSS, and JavaScript.',
      duration: '14 weeks',
      students: 312,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500',
      progress: 80
    }
  ];

  const upcomingAssignments = [
    { title: 'Binary Search Tree Implementation', course: 'Data Structures', dueDate: '2024-01-15', priority: 'high' },
    { title: 'Portfolio Website Project', course: 'Web Development', dueDate: '2024-01-18', priority: 'medium' },
    { title: 'Algorithm Analysis Report', course: 'Computer Science', dueDate: '2024-01-22', priority: 'low' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="university-gradient rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-blue-100">Ready to continue your learning journey?</p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-blue-900" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <Award className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Study Hours</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </div>
            <Clock className="w-8 h-8 text-amber-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Grade</p>
              <p className="text-2xl font-bold text-gray-900">A-</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Current Courses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Continue Learning</h2>
          <Link to="/courses" className="text-blue-600 hover:text-blue-500 font-medium">
            View all courses →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* Quick Actions & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Assignments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Assignments</h3>
          <div className="space-y-3">
            {upcomingAssignments.map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{assignment.title}</p>
                  <p className="text-sm text-gray-600">{assignment.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{assignment.dueDate}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    assignment.priority === 'high' ? 'bg-red-100 text-red-800' :
                    assignment.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {assignment.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/assignments" className="block mt-4 text-center text-blue-600 hover:text-blue-500">
            View all assignments
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/schedule" className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Calendar className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-blue-900">Schedule</span>
            </Link>
            <Link to="/discussions" className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Users className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-green-900">Discussions</span>
            </Link>
            <Link to="/courses" className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <BookOpen className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-purple-900">Browse Courses</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
              <Award className="w-8 h-8 text-amber-600 mb-2" />
              <span className="text-sm font-medium text-amber-900">Certificates</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
