import React, { useContext, useState } from 'react';
import studentInfoContext from '../context/list-student-context';

const FormStudent = props => {
  const [studentState, setStudentState] = useState({
    id: '',
    name: '',
    age: 0,
    sex: 'Nam',
  });
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(studentState);
    props.addStudentHandler(studentState);
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setStudentState({
      ...studentState,
      [name]: value,
    });
  };
  return (
    <div className='col-5 grid-margin'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>Thông tin sinh viên</h3>
          <form className='form-sample' onSubmit={onSubmitHandler}>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='id'
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tuổi</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='age'
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Giới tính</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  name='sex'
                  value={studentState.sex}
                  onChange={onChangeHandler}
                >
                  <option value='Nam'>Nam</option>
                  <option value='Nữ'>Nữ</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Ngày sinh</label>
              <div className='col-sm-9'>
                <input className='form-control' placeholder='dd/mm/yyyy' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Nơi sinh</label>
              <div className='col-sm-9'>
                <select className='form-control'>
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Địa chỉ</label>
              <div className='col-sm-9'>
                <textarea className='form-control' defaultValue={''} />
              </div>
            </div>
            <button type='submit' className='btn btn-primary me-2'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormStudent;
