import React, { useContext, useState } from 'react';
import studentInfoContext from '../context/list-student-context';

const ListStudent = props => {
  // const studentContext = useContext(studentInfoContext);
  const studentList = props.studentList;
  console.log('in list student', studentList);

  return (
    <div className='col-lg-7 grid-margin stretch-card'>
      <div className='card'>
        {/* START CONTROL */}
        <div className='card-header'>
          <div className='row'>
            <div className='col-3'>
              <button
                type='button'
                className='btn btn-primary btn-icon-text'
                onClick={props.showFormStudent}
              >
                Thêm mới sinh viên
              </button>
            </div>
            <div className='col-6'>
              <form className='search-form' action='#'>
                <i className='icon-search' />
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search Here'
                  title='Search here'
                />
                <button className='btn btn-primary btn-icon-text'>
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className='col-3 d-flex align-items-center'>
              <select className='form-control'>
                <option value=''>Sắp xếp</option>
                <option value=''>ABC def</option>
                <option value=''>ABC def</option>
                <option value=''>ABC def</option>
              </select>
            </div>
          </div>
        </div>
        {/* END CONTROL */}
        {/* START LIST STUDENT */}
        <div className='card-body'>
          <h3 className='card-title'>Danh sách sinh viên</h3>
          <div className='table-responsive pt-3'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sinh viên</th>
                  <th>Tên sinh viên</th>
                  <th>Tuổi</th>
                  <th>Giới tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.sex}</td>
                    <td>
                      <div className='template-demo'>
                        <button
                          type='button'
                          className='btn btn-danger btn-icon-text'
                        >
                          Xem
                        </button>
                        <button
                          type='button'
                          className='btn btn-warning btn-icon-text'
                        >
                          Sửa
                        </button>
                        <button
                          type='button'
                          className='btn btn-success btn-icon-text'
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* END LIST STUDENT */}
      </div>
    </div>
  );
};

export default ListStudent;
