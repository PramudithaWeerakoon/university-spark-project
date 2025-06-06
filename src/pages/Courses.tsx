import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Sarah Johnson',
      description: 'Learn the fundamentals of programming and computational thinking with hands-on projects.',
      duration: '12 weeks',
      students: 245,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500',
      category: 'computer-science'
    },
    {
      id: '2',
      title: 'Data Structures & Algorithms',
      instructor: 'Prof. Michael Chen',
      description: 'Master essential data structures and algorithmic problem solving techniques.',
      duration: '16 weeks',
      students: 189,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500',
      category: 'computer-science'
    },
    {
      id: '3',
      title: 'Web Development Fundamentals',
      instructor: 'Dr. Emily Rodriguez',
      description: 'Build modern web applications with HTML, CSS, JavaScript, and popular frameworks.',
      duration: '14 weeks',
      students: 312,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500',
      category: 'web-development'
    },
    {
      id: '4',
      title: 'Digital Marketing Strategy',
      instructor: 'Prof. Amanda Wilson',
      description: 'Learn modern digital marketing techniques and strategies for business growth.',
      duration: '10 weeks',
      students: 156,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500',
      category: 'business'
    },
    {
      id: '5',
      title: 'Machine Learning Basics',
      instructor: 'Dr. Robert Kim',
      description: 'Introduction to machine learning algorithms and practical applications.',
      duration: '18 weeks',
      students: 203,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500',
      category: 'data-science'
    },
    {
      id: '6',
      title: 'Graphic Design Principles',
      instructor: 'Sarah Thompson',
      description: 'Master the fundamentals of visual design and creative composition.',
      duration: '8 weeks',
      students: 174,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500',
      category: 'design'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'business', label: 'Business' },
    { value: 'design', label: 'Design' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4 md:space-y-6 px-2 md:px-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Course Catalog</h1>
        <p className="text-gray-600 text-sm md:text-base">Discover and enroll in courses to advance your learning</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses, instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 md:p-6 rounded-lg text-white">
          <h3 className="text-base md:text-lg font-semibold mb-2">Total Courses</h3>
          <p className="text-2xl md:text-3xl font-bold">{courses.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 md:p-6 rounded-lg text-white">
          <h3 className="text-base md:text-lg font-semibold mb-2">Available Now</h3>
          <p className="text-2xl md:text-3xl font-bold">{courses.length}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 md:p-6 rounded-lg text-white">
          <h3 className="text-base md:text-lg font-semibold mb-2">New This Month</h3>
          <p className="text-2xl md:text-3xl font-bold">3</p>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 space-y-2 md:space-y-0">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
          </h2>
          <select className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
            <option>Sort by Popularity</option>
            <option>Sort by Rating</option>
            <option>Sort by Newest</option>
            <option>Sort by Price</option>
          </select>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            </div>
            <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 text-sm md:text-base">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
