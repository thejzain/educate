// pages/index.js or pages/index.tsx

import SignIn from '../components/SignIn';
import SignInPage from './signin';
<<<<<<<<< Temporary merge branch 1
export default function Home() {
  return (
    <div>
    <SignInPage/>
=========
import DashboardPage from './dashboard';
import AttendancePage from './attendance';

export default function Home() {
  return (
    <div>
    <AttendancePage/>
<SignInPage/>
>>>>>>>>> Temporary merge branch 2
    </div>
  );
}
