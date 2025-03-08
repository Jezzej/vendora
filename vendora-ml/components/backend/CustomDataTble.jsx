"use client";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CsvUploader() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.text())
      .then((csvText) => {
        const result = Papa.parse(csvText, { header: false });
        if (result.data.length > 0) {
          setHeaders(result.data[0]);
          setData(result.data.slice(1));
        }
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, []);
  
  

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="p-4">
      {data.length > 0 && (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                {headers.map((header, index) => (
                  <th key={index} className="border border-gray-300 p-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border border-gray-300">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 p-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              <ChevronLeft /> Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next <ChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
