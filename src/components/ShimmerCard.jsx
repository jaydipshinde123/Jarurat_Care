const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden animate-pulse">
      {/* Profile Header Shimmer */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4">
          {/* Avatar Shimmer */}
          <div className="w-16 h-16 rounded-2xl bg-gray-200" />
          <div className="flex-1 space-y-2">
            {/* Name Shimmer */}
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            {/* Age & Gender Shimmer */}
            <div className="flex gap-3">
              <div className="h-5 bg-gray-200 rounded w-16" />
              <div className="h-5 bg-gray-200 rounded w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Shimmer */}
      <div className="px-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>

      {/* Button Shimmer */}
      <div className="p-6 pt-4">
        <div className="w-full h-12 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
};

export default ShimmerCard;