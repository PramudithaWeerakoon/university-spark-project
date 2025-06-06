
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  FileText, 
  User, 
  Settings,
  Users,
  BarChart3,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  
  // Determine if we're in instructor mode
  const isInstructorMode = location.pathname.includes('instructor');

  const studentMenuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/courses' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: MessageSquare, label: 'Discussions', path: '/discussions' },
    { icon: FileText, label: 'Assignments', path: '/assignments' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const instructorMenuItems = [
    { icon: Home, label: 'Dashboard', path: '/instructor-dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/instructor/courses' },
    { icon: Users, label: 'Students', path: '/instructor/students' },
    { icon: FileText, label: 'Assignments', path: '/instructor/assignments' },
    { icon: BarChart3, label: 'Analytics', path: '/instructor/analytics' },
    { icon: MessageSquare, label: 'Discussions', path: '/instructor/discussions' },
    { icon: Calendar, label: 'Schedule', path: '/instructor/schedule' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const menuItems = isInstructorMode ? instructorMenuItems : studentMenuItems;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Role Indicator */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            {isInstructorMode ? (
              <>
                <GraduationCap className="w-4 h-4" />
                Instructor View
              </>
            ) : (
              <>
                <User className="w-4 h-4" />
                Student View
              </>
            )}
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => onClose()}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Switch */}
        <div className="absolute bottom-4 left-4 right-4">
          <Link
            to={isInstructorMode ? '/dashboard' : '/instructor-dashboard'}
            className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => onClose()}
          >
            {isInstructorMode ? <User className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
            Switch to {isInstructorMode ? 'Student' : 'Instructor'} View
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
