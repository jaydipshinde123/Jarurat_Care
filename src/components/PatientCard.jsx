import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in">
      
      {/* Profile Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={patient.picture.large}
              alt={`${patient.name.first} ${patient.name.last}`}
              className="w-16 h-16 rounded-2xl border-4 border-gray-100 object-cover group-hover:border-blue-100 transition-colors duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-1 truncate">
              {patient.name.first} {patient.name.last}
            </h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                {patient.dob.age} years
              </span>
              <span className="capitalize text-gray-500">
                {patient.gender}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-6 space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span className="text-sm font-medium truncate">{patient.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span className="text-sm truncate">{patient.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-sm truncate">
            {patient.location.city}, {patient.location.country}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-6 pt-4">
        <button 
          onClick={onViewDetails} 
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PatientCard;