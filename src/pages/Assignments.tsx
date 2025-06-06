
import { useState } from 'react';
import { Calendar, Clock, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Assignments = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const assignments = [
    {
      id: 1,
      title: 'Binary Search Tree Implementation',
      course: 'Data Structures & Algorithms',
      dueDate: '2024-01-15',
      submittedDate: null,
      status: 'pending',
      priority: 'high',
      description: 'Implement a binary search tree with insert, delete, and search operations.',
      points: 100,
      timeLeft: '3 days'
    },
    {
      id: 2,
      title: 'Portfolio Website Project',
      course: 'Web Development Fundamentals',
      dueDate: '2024-01-18',
      submittedDate: '2024-01-16',
      status: 'submitted',
      priority: 'medium',
      description: 'Create a responsive personal portfolio website using HTML, CSS, and JavaScript.',
      points: 150,
      grade: 'A-'
    },
    {
      id: 3,
      title: 'Algorithm Analysis Report',
      course: 'Introduction to Computer Science',
      dueDate: '2024-01-22',
      submittedDate: null,
      status: 'pending',
      priority: 'low',
      description: 'Write a comparative analysis of sorting algorithms including time complexity.',
      points: 75,
      timeLeft: '1 week'
    },
    {
      id: 4,
      title: 'Database Design Project',
      course: 'Database Systems',
      dueDate: '2024-01-10',
      submittedDate: '2024-01-09',
      status: 'graded',
      priority: 'high',
      description: 'Design and implement a database schema for an e-commerce application.',
      points: 200,
      grade: 'A+'
    }
  ];

  const filteredAssignments = assignments.filter(assignment => {
    if (activeFilter === 'all') return true;
    return assignment.status === activeFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'submitted':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case 'graded':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'graded':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assignments</h1>
        <p className="text-gray-600">Track and manage your course assignments</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{assignments.length}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {assignments.filter(a => a.status === 'pending').length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Submitted</p>
              <p className="text-2xl font-bold text-blue-600">
                {assignments.filter(a => a.status === 'submitted').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Graded</p>
              <p className="text-2xl font-bold text-green-600">
                {assignments.filter(a => a.status === 'graded').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All Assignments' },
            { key: 'pending', label: 'Pending' },
            { key: 'submitted', label: 'Submitted' },
            { key: 'graded', label: 'Graded' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {getStatusIcon(assignment.status)}
                  <h3 className="text-xl font-semibold text-gray-900">{assignment.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)}`}>
                    {assignment.status}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(assignment.priority)}`}>
                    {assignment.priority} priority
                  </span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{assignment.course}</p>
                <p className="text-gray-600 mb-4">{assignment.description}</p>
              </div>
              <div className="text-right ml-6">
                <p className="text-sm text-gray-600">Points</p>
                <p className="text-lg font-bold text-gray-900">{assignment.points}</p>
                {assignment.grade && (
                  <p className="text-lg font-bold text-green-600 mt-1">{assignment.grade}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </div>
                {assignment.submittedDate && (
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}
                  </div>
                )}
                {assignment.timeLeft && assignment.status === 'pending' && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-yellow-500" />
                    {assignment.timeLeft} left
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                {assignment.status === 'pending' && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Assignment
                  </button>
                )}
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments found</h3>
          <p className="text-gray-600">No assignments match the selected filter</p>
        </div>
      )}
    </div>
  );
};

export default Assignments;
