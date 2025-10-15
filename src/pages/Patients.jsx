import { useState, useEffect } from "react";
import { Search, AlertCircle, Users, Filter } from "lucide-react";
import PatientCard from "../components/PatientCard";
import ShimmerCard from "../components/ShimmerCard";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";
import Footer from "../components/Footer";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    const filtered = patients.filter((patient) => {
      const fullName =
        `${patient.name.first} ${patient.name.last}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });
    setFilteredPatients(filtered);
  }, [searchQuery, patients]);

  const fetchPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api/?results=12");
      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }
      const data = await response.json();
      setPatients(data.results);
      setFilteredPatients(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleAddPatient = (newPatient) => {
    setPatients([newPatient, ...patients]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center fade-in">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Patient Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Patient Records
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage and access comprehensive patient information with our secure healthcare platform
          </p>
        </div>

        {/* Stats and Controls */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search patients by name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 h-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <AddPatientForm onAddPatient={handleAddPatient} />
              </div>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{patients.length}</div>
              <div className="text-blue-100 text-sm font-medium">Total Patients</div>
              <div className="text-blue-200 text-xs mt-2">Active Records</div>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 fade-in bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-red-800 mb-1">Connection Error</h3>
              <p className="text-red-600 text-sm">{error}. Please try again later.</p>
            </div>
            <button 
              onClick={fetchPatients}
              className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredPatients.length === 0 && (
          <div className="text-center py-16 fade-in">
            <div className="inline-flex p-8 bg-white rounded-3xl shadow-sm border border-gray-200 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No patients found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              {searchQuery
                ? `No patients found matching "${searchQuery}". Try adjusting your search terms.`
                : "No patients available in the system."}
            </p>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        )}

        {/* Patient Cards */}
        {!loading && filteredPatients.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPatients.map((patient, index) => (
              <PatientCard
                key={patient.id?.value || index}
                patient={patient}
                onViewDetails={() => handleViewDetails(patient)}
              />
            ))}
          </div>
        )}

        {/* Patient Details Modal */}
        <PatientModal
          patient={selectedPatient}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
    
  );
};

export default Patients;