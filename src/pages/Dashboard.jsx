import { useState } from "react";
import { FiSearch, FiRefreshCw, FiPlus } from "react-icons/fi";
import RepositoryCard from "../components/RepositoryCard";

function Dashboard() {
  // Initial repository data to allow for resetting (Refresh functionality)
  const initialRepositories = [
    {
      name: "design-system",
      type: "React",
      size: "7320 KB",
      status: "Public",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      type: "Javascript",
      size: "5871 KB",
      status: "Private",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      type: "Python",
      size: "4521 KB",
      status: "Private",
      updatedAt: "5 days ago",
    },
  ];

  const [repositories, setRepositories] = useState(initialRepositories);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRepo, setNewRepo] = useState({
    name: "",
    type: "",
    size: "",
    status: "Private",
    updatedAt: "Just now",
  });

  // Filter repositories based on search term
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle modal input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRepo((prevRepo) => ({ ...prevRepo, [name]: value }));
  };

  // Add new repository
  const handleAddRepository = () => {
    if (newRepo.name && newRepo.type) {
      setRepositories([...repositories, newRepo]);
      setNewRepo({
        name: "",
        type: "",
        size: "",
        status: "Private",
        updatedAt: "Just now",
      }); // Clear the input fields
      setIsModalOpen(false); // Close modal after adding
    }
  };

  // Refresh the repository list to its initial state
  const handleRefresh = () => {
    setRepositories(initialRepositories);
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      <main className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Repositories
            </h1>
            <p className="text-sm text-gray-600">
              {filteredRepositories.length} total repositories
            </p>
          </div>

          <div className="flex gap-2 lg:gap-4 w-full lg:w-auto">
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 py-2 px-3 lg:px-4 rounded-md border border-gray-300 hover:bg-gray-50 text-sm"
            >
              <FiRefreshCw className="text-lg" />
              <span className="hidden sm:inline">Refresh All</span>
            </button>

            {/* Add Repository Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 py-2 px-3 lg:px-4 bg-primary text-white rounded-md hover:bg-blue-600 text-sm flex-1 lg:flex-initial justify-center"
            >
              <FiPlus className="text-lg" />
              <span className="hidden sm:inline">Add Repository</span>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Repositories"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
          {filteredRepositories.map((repo) => (
            <RepositoryCard key={repo.name} repository={repo} />
          ))}
        </div>
      </main>

      {/* Modal to Add Repository */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-80">
            <h2 className="text-xl font-bold mb-4">Add Repository</h2>

            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Repository Name"
                value={newRepo.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="type"
                placeholder="Repository Type"
                value={newRepo.type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 bg-gray-300 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRepository}
                className="py-2 px-4 bg-blue-500 text-white rounded-md text-sm"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
