import { useState, useEffect, useCallback } from 'react';
import { ScreenJumper } from './components';
import Login from './auth/Login';
import OnbVerify from './auth/onboarding/OnbVerify';
import OnbConsent from './auth/onboarding/OnbConsent';
import OnbBasic from './auth/onboarding/OnbBasic';
import OnbContact from './auth/onboarding/OnbContact';
import OnbCareer from './auth/onboarding/OnbCareer';
import OnbInterests from './auth/onboarding/OnbInterests';
import OnbPrivacy from './auth/onboarding/OnbPrivacy';
import Home from './pages/Home';
import Network from './pages/Network';
import Community from './pages/Community';
import Profile from './pages/Profile';

const DEFAULT_USER = {
  first: 'Maya',
  last: 'Reyes',
  status: 'alumni',
  year: '2018',
  countries: ['🇺🇸 United States', '🇰🇷 South Korea'],
  college: 'University of the Philippines',
  major: 'Computer Science',
  email: 'maya.reyes@gmail.com',
  phone: '+1 415 555 0123',
  linkedin: 'linkedin.com/in/mayareyes',
  instagram: '@mayareyes',
  github: 'github.com/mayareyes',
  company: 'Stripe',
  role: 'Software Engineer',
  industry: 'Technology',
  workCountry: 'United States',
  city: 'San Francisco',
  experience: '6–10 years',
  shareCareer: ['Startup Founding', 'Product Management'],
  shareSkills: ['React', 'Python', 'Data Analysis', 'TypeScript'],
  shareLife: ['Living in SF', 'Raising TCKs', 'Missions'],
  seekCareer: ['VC / Fundraising'],
  seekSkills: ['ML / AI'],
  seekLife: ['Missions abroad'],
  bio: 'Software engineer at Stripe focused on payments infrastructure. Grew up between Manila and Seoul as a missionary kid; now mentoring fellow Vanguards exploring tech careers.',
};
DEFAULT_USER.name = `${DEFAULT_USER.first} ${DEFAULT_USER.last}`;

export default function App() {
  const [screen, setScreen] = useState('login');
  const [user, setUser] = useState(DEFAULT_USER);

  useEffect(() => {
    const saved = localStorage.getItem('fa-screen');
    if (saved) setScreen(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('fa-screen', screen);
  }, [screen]);

  const go = useCallback((s) => setScreen(s), []);
  const setData = useCallback((d) => setUser((prev) => ({
    ...prev,
    ...d,
    name: `${d.first || prev.first} ${d.last || prev.last}`,
  })), []);

  let view;
  switch (screen) {
    case 'login':     view = <Login onSignIn={() => go('onb-1')} />; break;
    case 'onb-1':    view = <OnbVerify onContinue={() => go('onb-2')} />; break;
    case 'onb-2':    view = <OnbConsent onBack={() => go('onb-1')} onContinue={() => go('onb-3')} />; break;
    case 'onb-3':    view = <OnbBasic data={user} setData={setData} onBack={() => go('onb-2')} onContinue={() => go('onb-4')} />; break;
    case 'onb-4':    view = <OnbContact data={user} setData={setData} onBack={() => go('onb-3')} onContinue={() => go('onb-5')} />; break;
    case 'onb-5':    view = <OnbCareer data={user} setData={setData} onBack={() => go('onb-4')} onContinue={() => go('onb-6')} />; break;
    case 'onb-6':    view = <OnbInterests data={user} setData={setData} onBack={() => go('onb-5')} onContinue={() => go('onb-7')} />; break;
    case 'onb-7':    view = <OnbPrivacy onBack={() => go('onb-6')} onContinue={() => go('home')} />; break;
    case 'privacy':  view = <OnbPrivacy onBack={() => go('profile')} onContinue={() => go('profile')} />; break;
    case 'home':     view = <Home go={go} user={user} />; break;
    case 'network':  view = <Network go={go} user={user} />; break;
    case 'community': view = <Community go={go} user={user} />; break;
    case 'profile':  view = <Profile go={go} user={user} />; break;
    default:         view = <Login onSignIn={() => go('onb-1')} />;
  }

  return (
    <div className="app-root">
      <div key={screen} className="fade-in">{view}</div>
      <ScreenJumper screen={screen} setScreen={setScreen} />
    </div>
  );
}
