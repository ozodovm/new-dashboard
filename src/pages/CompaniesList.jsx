import React, { useState } from 'react';

function CompaniesList() {
  const [companies, setCompanies] = useState([
    // Masalan, bo'sh ro'yxat bilan ishlash:
    // { id: 1, name: 'Tech Solutions', address: '123 Silicon Valley' }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Companies</h1>
      {companies.length === 0 ? (
        // Agar ro'yxat bo'sh bo'lsa, 404 xabarini ko'rsatadi
        <div className="text-center text-red-500 text-xl">
          404 - Companies Not Found
        </div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Address</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company.id}>
                <td className="border px-4 py-2">{company.id}</td>
                <td className="border px-4 py-2">{company.name}</td>
                <td className="border px-4 py-2">{company.address}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => alert(`Delete company with ID: ${company.id}`)}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CompaniesList;
