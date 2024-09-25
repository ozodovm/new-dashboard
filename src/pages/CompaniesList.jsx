import React, { useState } from 'react';

function CompaniesList() {
  const [companies, setCompanies] = useState([
    // Masalan, bo'sh ro'yxat bilan ishlash:
    // { id: 1, name: 'Tech Solutions', address: '123 Silicon Valley' }
  ]);

  return (
    <div className="p-6 bg-[#014E56] h-[85vh]">
      <h1 className="text-3xl font-bold mx-auto mt-[200px] mb-6 text-center text-white">Companies</h1>
      {companies.length === 0 ? (
        <div className="text-center text-red-600 text-xl font-semibold">
          404 - Companies Not Found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b text-left text-gray-600">ID</th>
                <th className="py-3 px-4 border-b text-left text-gray-600">Name</th>
                <th className="py-3 px-4 border-b text-left text-gray-600">Address</th>
                <th className="py-3 px-4 border-b text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <tr key={company.id} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="border-b px-4 py-2">{company.id}</td>
                  <td className="border-b px-4 py-2">{company.name}</td>
                  <td className="border-b px-4 py-2">{company.address}</td>
                  <td className="border-b px-4 py-2">
                    <button
                      onClick={() => alert(`Delete company with ID: ${company.id}`)}
                      className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600 transition-colors duration-200"
                    >
                      Delete
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors duration-200">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CompaniesList;
