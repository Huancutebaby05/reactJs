import React from "react";

// function StudentsList(student) {
//   return (
//     <table>
//       <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Address</th>
//       </tr>
      
//       {student.students.map((i) => (
//         <tr>
//           <td>{i.ID}</td>
//           <td>{i.Name}</td>
//           <td>{i.Age}</td>
//           <td>{i.Add}</td>
//         </tr>
//       ))}
//     </table>
//   );
// }
class StudentsList extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
          {this.props.student.map((i) => (
            <tr>
              <td>{i.ID}</td>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Add}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default StudentsList;
