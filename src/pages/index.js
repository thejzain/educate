// pages/index.js or pages/index.tsx

import SignIn from '../components/SignIn';
import SignInPage from './signin';
import DashboardPage from './dashboard';
import apistorecheck from './apicheck';

export default function Home() {
  return (
    <div>
        <apistorecheck/>
    </div>
  );
}
