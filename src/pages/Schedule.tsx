
import { useState } from 'react';
import { Calendar, Clock, MapPin, Video, Plus } from 'lucide-react';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week');

  const events = [
    {
      id: 1,
      title: 'Computer Science Lecture',
      course: 'Introduction to Computer Science',
      type: 'lecture',
      startTime: '09:00',
      endTime: '10:30',
      date: '2024-01-15',
      location: 'Room 101, Science Building',
      instructor: 'Dr. Sarah Johnson',
      isOnline: false
    },
    {
      id: 2,
      title: 'Web Development Lab',
      course: 'Web Development Fundamentals',
      type: 'lab',
      startTime: '14:00',
      endTime: '16:00',
      date: '2024-01-15',
      location: 'Computer Lab A',
      instructor: 'Dr. Emily Rodriguez',
      isOnline: false
    },
    {
      id: 3,
      title: 'Data Structures Quiz',
      course: 'Data Structures & Algorithms',
      type: 'assessment',
      startTime: '11:00',
      endTime: '12:00',
      date: '2024-01-16',
      location: 'Online',
      instructor: 'Prof. Michael Chen',
      isOnline: true
    },
    {
      id: 4,
      title: 'Office Hours',
      course: 'Introduction to Computer Science',
      type: 'office-hours',
      startTime: '15:00',
      endTime: '16:00',
      date: '2024-01-17',
      location: 'Office 205, Faculty Building',
      instructor: 'Dr. Sarah Johnson',
      isOnline: false
    },
    {
      id: 5,
      title: 'Algorithm Design Workshop',
      course: 'Data Structures & Algorithms',
      type: 'workshop',
      startTime: '10:00',
      endTime: '12:00',
      date: '2024-01-18',
      location: 'Online',
      instructor: 'Prof. Michael Chen',
      isOnline: true
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-500';
      case 'lab':
        return 'bg-green-500';
      case 'assessment':
        return 'bg-red-500';
      case 'office-hours':
        return 'bg-purple-500';
      case 'workshop':
        return 'bg-amber-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getWeekDates = () => {
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay());
    
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule</h1>
          <p className="text-gray-600">Manage your classes and academic calendar</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex bg-gray-100 rounded-lg">
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'week' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'month' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Month
            </button>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            Previous
          </button>
          <h2 className="text-xl font-semibold text-gray-900">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            Next
          </button>
        </div>
      </div>

      {/* Week View */}
      {viewMode === 'week' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-7 border-b">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <div key={day} className="p-4 bg-gray-50 text-center font-medium text-gray-700 border-r last:border-r-0">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 min-h-[400px]">
            {getWeekDates().map((date, index) => {
              const dayEvents = getEventsForDate(date);
              const isToday = date.toDateString() === new Date().toDateString();
              
              return (
                <div key={index} className="border-r last:border-r-0 p-2">
                  <div className={`text-center p-2 rounded-lg mb-2 ${
                    isToday ? 'bg-blue-100 text-blue-800 font-bold' : 'text-gray-700'
                  }`}>
                    {date.getDate()}
                  </div>
                  
                  <div className="space-y-1">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`p-2 rounded text-xs text-white ${getEventTypeColor(event.type)} cursor-pointer hover:opacity-80`}
                      >
                        <div className="font-medium truncate">{event.title}</div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.startTime}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">Upcoming Events</h3>
        </div>
        <div className="divide-y">
          {events.slice(0, 5).map((event) => (
            <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)}`}></div>
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {event.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 mb-2">{event.course}</p>
                  <p className="text-sm text-gray-600 mb-2">Instructor: {event.instructor}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.startTime} - {event.endTime}
                    </div>
                    <div className="flex items-center">
                      {event.isOnline ? (
                        <>
                          <Video className="w-4 h-4 mr-1" />
                          Online
                        </>
                      ) : (
                        <>
                          <MapPin className="w-4 h-4 mr-1" />
                          {event.location}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {event.isOnline && (
                    <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                      Join Online
                    </button>
                  )}
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { type: 'lecture', label: 'Lectures' },
            { type: 'lab', label: 'Labs' },
            { type: 'assessment', label: 'Assessments' },
            { type: 'office-hours', label: 'Office Hours' },
            { type: 'workshop', label: 'Workshops' }
          ].map((item) => (
            <div key={item.type} className="flex items-center">
              <div className={`w-4 h-4 rounded ${getEventTypeColor(item.type)} mr-2`}></div>
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
