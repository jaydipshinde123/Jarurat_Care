import { useEffect } from "react";
import { Phone, Mail, MapPin, Calendar, User, Flag, X } from "lucide-react";

const PatientModal = ({ patient, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!patient || !isOpen) return null;

  const formattedDate = new Date(patient.dob.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Patient Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header Section */}
          <div className="flex items-start gap-6">
            <img
              src={patient.picture.large}
              alt={`${patient.name.first} ${patient.name.last}`}
              className="w-32 h-32 rounded-2xl border-4 border-blue-100 object-cover shadow-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {patient.name.title} {patient.name.first} {patient.name.last}
              </h3>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                  <User className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium capitalize">{patient.gender}</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">{patient.dob.age} years old</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Information
            </h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="font-semibold text-gray-900">{patient.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Cell</p>
                  <p className="font-semibold text-gray-900">{patient.cell}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="font-semibold text-gray-900 break-all">{patient.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* Address Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Address
            </h4>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="p-2 bg-red-100 rounded-lg mt-1">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-lg">
                  {patient.location.street.number} {patient.location.street.name}
                </p>
                <p className="text-gray-700 mt-1">
                  {patient.location.city}, {patient.location.state}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {patient.location.country} - {patient.location.postcode}
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* Additional Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Additional Information
            </h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Date of Birth</p>
                  <p className="font-semibold text-gray-900">{formattedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Flag className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Nationality</p>
                  <p className="font-semibold text-gray-900">{patient.nat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;