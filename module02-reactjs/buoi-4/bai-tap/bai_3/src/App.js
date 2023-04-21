import logo from './logo.svg';
import './App.css';
import ListStudent from './components/ListStudent';
import FormStudent from './components/FormStudent';
import { useContext, useState } from 'react';
import studentInfoContext from './context/list-student-context';

const initialStudentList = [
  {
    id: 'SV001',
    name: 'Nguyễn Văn A',
    age: 20,
    sex: 'Nam',
  },
  {
    id: 'SV002',
    name: 'Nguyễn Văn B',
    age: 21,
    sex: 'Nữ',
  },
  {
    id: 'SV003',
    name: 'Nguyễn Văn C',
    age: 19,
    sex: 'Nam',
  },
];
function App() {
  const [showFormStudent, setShowFormStudent] = useState(false);
  const [studentList, setStudentList] = useState(initialStudentList);

  const showFormHandler = () => {
    setShowFormStudent(true);
  };

  const closeFormHandler = () => {
    setShowFormStudent(false);
  };

  const onAddStudentHandler = student => {
    console.log('in handler');
    let existStudent = studentList.find(item => item.id === student.id);
    if (!existStudent) {
      setStudentList([...studentList, student]);
      return;
    }

    existStudent = student;
    setStudentList([...studentList]);
  };

  return (
    <div class='row'>
      <ListStudent
        showFormStudent={showFormHandler}
        studentList={studentList}
      />
      {showFormStudent && (
        <FormStudent
          closeFormHandler={closeFormHandler}
          addStudentHandler={onAddStudentHandler}
        />
      )}
    </div>
  );
}

export default App;
