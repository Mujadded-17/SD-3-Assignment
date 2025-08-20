import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Pagination } from "react-bootstrap";

const TableFirst = () => {
  // Sample data
  const data = [
    { title: "The Art of Storytelling: A Guide to Captivating Your Audience", status: "Published", edited: "2 days ago" },
    { title: "Crafting Compelling Characters: A Step-by-Step Approach", status: "Draft", edited: "1 week ago" },
    { title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations", status: "Published", edited: "2 weeks ago" },
    { title: "World-Building Essentials for Fantasy Writers", status: "Draft", edited: "3 weeks ago" },
    { title: "How to Write Engaging Blog Posts", status: "Published", edited: "1 month ago" },
    { title: "Editing Tips for Polished Writing", status: "Draft", edited: "2 months ago" },
    { title: "Narrative Structures Explained", status: "Published", edited: "3 months ago" },
    { title: "Building Tension in Thriller Novels", status: "Draft", edited: "4 months ago" },
    { title: "Creating Memorable Villains", status: "Published", edited: "5 months ago" },
  ];

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      {/* Internal CSS */}
      <style>
        {`
          table {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          th {
            background: #f8f9fa;
            text-align: left;
            font-weight: 600;
            font-size: 15px;
            padding: 12px;
          }
          td {
            font-size: 14px;
            padding: 12px;
            vertical-align: middle;
          }
          tr:hover {
            background: #f5f5f5;
          }
          .pagination {
            margin-top: 20px;
          }
          .page-item .page-link {
            border-radius: 50% !important;
            width: 36px;
            height: 36px;
            text-align: center;
            padding: 6px;
            margin: 0 4px;
            font-size: 14px;
          }
          .page-item.active .page-link {
            background-color: #333;
            border-color: #333;
            color: white;
          }
        `}
      </style>

      <Table striped hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.status}</td>
              <td>{item.edited}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, idx) => (
          <Pagination.Item
            key={idx + 1}
            active={idx + 1 === currentPage}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default TableFirst;
