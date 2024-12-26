function RepositoryCard({ repository }) {
  const { name, type, size, status, updatedAt } = repository;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <h3 className="text-base lg:text-lg font-medium text-gray-900">{name}</h3>
            <span className={`px-2 py-1 text-xs rounded-md ${
              status === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-gray-600">
            <span>{type}</span>
            <span>{size}</span>
            <span>Updated {updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;