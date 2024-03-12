import './App.css';
import Counter from './Components/Counter';
import UserDataForm from './Components/UserDataForm';
import RichTextEditor from './Components/RichTextEditor';
// import SignIn from './Components/SignIn';
// import SignUp from './Components/SignUp';
// import UserProfileChart from './Components/UserProfileChart';
// import AuthProvider from './Components/AuthProvider';



function App() {
  return (
    <>
      <Counter />
      <UserDataForm />
      <br></br>
      <RichTextEditor />
      <br></br>
      {/* <SignIn />
      <br></br>
      <SignUp />
      <br></br> */}
      {/* <AuthProvider /> */}

    </>
  );
}

export default App;
