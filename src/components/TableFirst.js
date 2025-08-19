import React from "react";
import Table from "react-bootstrap/Table";
const TableFirst = () => {
    return ( 
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Last Edited</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The art of Story telling</td>
          <td>Published</td>
          <td>2 days ago</td>
        </tr>
        <tr>
          <td>Crafting Compeling Characters</td>
          <td>Draft</td>
          <td>1 week ago</td>
        </tr>
        <tr>
          <td>Mastering Dialogue</td>
          <td>Published</td>
          <td>2 weeks ago</td>
        </tr>
      </tbody>
    </Table>
     );
}
 
export default TableFirst;