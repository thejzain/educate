// pages/index.js or pages/index.tsx

import SignIn from '../components/SignIn';
import SignInPage from './signin';
import DashboardPage from './dashboard';
import AttendancePage from './attendance';

export default function Home() {
  return (
    <div>
    <AttendancePage/>
<SignInPage/>
    <SignInPage/>
    </div>
  );
}
