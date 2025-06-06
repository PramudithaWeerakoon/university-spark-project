
import { useState } from 'react';
import { MessageSquare, ThumbsUp, Reply, Search, Plus, Pin, Clock } from 'lucide-react';

const Discussions = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const discussions = [
    {
      id: 1,
      title: 'Understanding Binary Search Tree Complexity',
      course: 'Data Structures & Algorithms',
      author: 'Alex Chen',
      authorAvatar: 'AC',
      content: 'Can someone explain why the average case time complexity for BST operations is O(log n) but worst case is O(n)?',
      timestamp: '2 hours ago',
      replies: 12,
      likes: 8,
      isPinned: true,
      tags: ['algorithms', 'complexity'],
      lastReply: {
        author: 'Prof. Michael Chen',
        timestamp: '1 hour ago'
      }
    },
    {
      id: 2,
      title: 'Portfolio Project Feedback Request',
      course: 'Web Development Fundamentals',
      author: 'Maria Garcia',
      authorAvatar: 'MG',
      content: 'I just finished my portfolio website project. Would love to get some feedback from peers and instructors!',
      timestamp: '4 hours ago',
      replies: 6,
      likes: 15,
      isPinned: false,
      tags: ['project', 'feedback'],
      lastReply: {
        author: 'John Smith',
        timestamp: '2 hours ago'
      }
    },
    {
      id: 3,
      title: 'Study Group for Midterm Exam',
      course: 'Introduction to Computer Science',
      author: 'Sarah Johnson',
      authorAvatar: 'SJ',
      content: 'Looking to form a study group for the upcoming midterm. Anyone interested in meeting this weekend?',
      timestamp: '6 hours ago',
      replies: 9,
      likes: 12,
      isPinned: false,
      tags: ['study-group', 'exam'],
      lastReply: {
        author: 'David Lee',
        timestamp: '3 hours ago'
      }
    },
    {
      id: 4,
      title: 'Question about Async/Await in JavaScript',
      course: 'Web Development Fundamentals',
      author: 'Tom Wilson',
      authorAvatar: 'TW',
      content: 'I\'m having trouble understanding when to use async/await vs promises. Can someone provide some clear examples?',
      timestamp: '1 day ago',
      replies: 18,
      likes: 22,
      isPinned: false,
      tags: ['javascript', 'async'],
      lastReply: {
        author: 'Dr. Emily Rodriguez',
        timestamp: '4 hours ago'
      }
    }
  ];

  const courses = [
    'Introduction to Computer Science',
    'Data Structures & Algorithms',
    'Web Development Fundamentals',
    'Database Systems'
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'pinned' && discussion.isPinned) ||
                      (activeTab === 'my-posts' && discussion.author === 'Current User');
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discussions</h1>
          <p className="text-gray-600">Connect with classmates and instructors</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4 md:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          New Discussion
        </button>
      </div>

      {/* Search and Tabs */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="">All Courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        <div className="flex border-b">
          {[
            { key: 'all', label: 'All Posts' },
            { key: 'pinned', label: 'Pinned' },
            { key: 'my-posts', label: 'My Posts' },
            { key: 'following', label: 'Following' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Discussion Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900">284</p>
            </div>
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Today</p>
              <p className="text-2xl font-bold text-green-600">42</p>
            </div>
            <Clock className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">My Posts</p>
              <p className="text-2xl font-bold text-purple-600">8</p>
            </div>
            <MessageSquare className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Replies</p>
              <p className="text-2xl font-bold text-amber-600">23</p>
            </div>
            <Reply className="w-8 h-8 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        {filteredDiscussions.map((discussion) => (
          <div key={discussion.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                {discussion.authorAvatar}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {discussion.isPinned && (
                    <Pin className="w-4 h-4 text-amber-500" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                    {discussion.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <span className="font-medium text-blue-600">{discussion.course}</span>
                  <span>•</span>
                  <span>by {discussion.author}</span>
                  <span>•</span>
                  <span>{discussion.timestamp}</span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2">{discussion.content}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  {discussion.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      {discussion.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <Reply className="w-4 h-4" />
                      {discussion.replies} replies
                    </button>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Last reply by {discussion.lastReply.author} {discussion.lastReply.timestamp}
                    </div>
                  </div>
                  
                  <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    View Discussion
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDiscussions.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No discussions found</h3>
          <p className="text-gray-600">Try adjusting your search terms or create a new discussion</p>
        </div>
      )}
    </div>
  );
};

export default Discussions;
