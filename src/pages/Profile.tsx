
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Edit } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@university.edu',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'September 2023',
    studentId: 'CS2024001',
    major: 'Computer Science',
    year: 'Sophomore',
    gpa: '3.85',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Sarah Johnson',
      progress: 65,
      grade: 'A-',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      instructor: 'Prof. Michael Chen',
      progress: 30,
      grade: 'B+',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      instructor: 'Dr. Emily Rodriguez',
      progress: 80,
      grade: 'A',
      status: 'In Progress'
    }
  ];

  const completedCourses = [
    {
      title: 'Introduction to Programming',
      instructor: 'Prof. David Kim',
      grade: 'A',
      completedDate: 'December 2023'
    },
    {
      title: 'Mathematics for Computer Science',
      instructor: 'Dr. Lisa Wang',
      grade: 'A-',
      completedDate: 'December 2023'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Introduction to Programming',
      issueDate: 'December 2023',
      verificationId: 'CERT-2023-001'
    },
    {
      id: 2,
      title: 'Mathematics for Computer Science',
      issueDate: 'December 2023',
      verificationId: 'CERT-2023-002'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Achieved GPA of 3.5 or higher',
      date: 'Fall 2023',
      icon: '🏆'
    },
    {
      title: 'Perfect Attendance',
      description: 'Attended all classes in Fall 2023',
      date: 'Fall 2023',
      icon: '📅'
    },
    {
      title: 'Top Performer',
      description: 'Scored highest in Programming Fundamentals',
      date: 'December 2023',
      icon: '⭐'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">View and manage your academic profile</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="university-gradient p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <Edit className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <div className="text-center md:text-left text-white">
              <h2 className="text-3xl font-bold mb-2">{userProfile.name}</h2>
              <p className="text-blue-100 text-lg mb-4">{userProfile.major} • {userProfile.year}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  {userProfile.email}
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  {userProfile.phone}
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  {userProfile.location}
                </div>
              </div>
            </div>
            
            <div className="md:ml-auto text-center text-white">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm text-blue-100">Current GPA</p>
                <p className="text-3xl font-bold">{userProfile.gpa}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 border-t">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">Student ID</p>
              <p className="font-semibold text-gray-900">{userProfile.studentId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Joined</p>
              <p className="font-semibold text-gray-900">{userProfile.joinDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Enrolled Courses</p>
              <p className="font-semibold text-gray-900">{enrolledCourses.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed Courses</p>
              <p className="font-semibold text-gray-900">{completedCourses.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'certificates', label: 'Certificates', icon: Award },
              { id: 'achievements', label: 'Achievements', icon: Award }
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Academic Progress */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Academic Progress</h3>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{course.title}</h4>
                        <span className="text-sm font-medium text-blue-600">{course.grade}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
                <div className="space-y-4">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl mr-4">{achievement.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-8">
              {/* Current Courses */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Current Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
                      <p className="text-sm text-blue-600 mb-3">by {course.instructor}</p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">Grade: {course.grade}*</span>
                        <button className="text-sm text-blue-600 hover:text-blue-500">View Course</button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">* Current grades are tentative and may change based on future assessments.</p>
              </div>
              
              {/* Completed Courses */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Completed Courses</h3>
                <div className="bg-white border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {completedCourses.map((course, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{course.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{course.instructor}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {course.grade}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {course.completedDate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">My Certificates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                  <div key={certificate.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6">
                      <Award className="w-12 h-12 text-amber-500 mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{certificate.title}</h4>
                      <div className="text-sm text-gray-600 mb-6">
                        <p className="mb-1">Issued: {certificate.issueDate}</p>
                        <p>ID: {certificate.verificationId}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-transparent bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          View Certificate
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">My Achievements</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 bg-amber-50">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{achievement.date}</span>
                    </div>
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

export default Profile;
