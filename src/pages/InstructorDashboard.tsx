
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  FileText, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2,
  Calendar,
  Clock,
  Award
} from 'lucide-react';

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to Computer Science',
      students: 245,
      progress: 65,
      status: 'active',
      startDate: '2024-01-15',
      assignments: 8,
      discussions: 12
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      students: 189,
      progress: 30,
      status: 'active',
      startDate: '2024-01-10',
      assignments: 6,
      discussions: 8
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      students: 312,
      progress: 80,
      status: 'completed',
      startDate: '2023-12-01',
      assignments: 10,
      discussions: 15
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    startDate: ''
  });

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now(),
      title: formData.title,
      students: 0,
      progress: 0,
      status: 'draft',
      startDate: formData.startDate,
      assignments: 0,
      discussions: 0
    };
    setCourses([...courses, newCourse]);
    setFormData({ title: '', description: '', duration: '', startDate: '' });
    setShowCreateForm(false);
  };

  const handleEditCourse = (course: any) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: '',
      duration: '',
      startDate: course.startDate
    });
  };

  const handleUpdateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    setCourses(courses.map(course => 
      course.id === editingCourse.id 
        ? { ...course, title: formData.title, startDate: formData.startDate }
        : course
    ));
    setEditingCourse(null);
    setFormData({ title: '', description: '', duration: '', startDate: '' });
  };

  const handleDeleteCourse = (courseId: number) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== courseId));
    }
  };

  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const activeCourses = courses.filter(course => course.status === 'active').length;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="university-gradient rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Johnson!</h1>
            <p className="text-blue-100">Manage your courses and track student progress</p>
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
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Courses</p>
              <p className="text-2xl font-bold text-gray-900">{activeCourses}</p>
            </div>
            <BookOpen className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Assignments</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <FileText className="w-8 h-8 text-amber-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Progress</p>
              <p className="text-2xl font-bold text-gray-900">73%</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Course Management */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create Course
            </button>
          </div>
        </div>

        {/* Create/Edit Course Form */}
        {(showCreateForm || editingCourse) && (
          <div className="p-6 border-b bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">
              {editingCourse ? 'Edit Course' : 'Create New Course'}
            </h3>
            <form onSubmit={editingCourse ? handleUpdateCourse : handleCreateCourse} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter course title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter course description"
                />
              </div>
              <div className="md:col-span-2 flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  {editingCourse ? 'Update' : 'Create'} Course
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateForm(false);
                    setEditingCourse(null);
                    setFormData({ title: '', description: '', duration: '', startDate: '' });
                  }}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Courses List */}
        <div className="divide-y">
          {courses.map((course) => (
            <div key={course.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      course.status === 'active' ? 'bg-green-100 text-green-800' :
                      course.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students} students
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Started {course.startDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {course.assignments} assignments
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.progress}% complete
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/instructor/course/${course.id}`}
                    className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleEditCourse(course)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Course Progress</span>
                  <span className="text-gray-900">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
