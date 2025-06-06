
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl text-gray-500">404</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          We couldn't find the page you're looking for.
        </p>
        <div className="space-y-4">
          <Link
            to="/dashboard"
            className="block w-full md:w-auto md:inline-block px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Go to Dashboard
          </Link>
          <div className="block mt-4">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-500 hover:underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
