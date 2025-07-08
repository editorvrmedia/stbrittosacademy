import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Governance from './components/about/Governance';
import VisionMission from './components/about/VisionMission';
import WhyStBrittos from './components/about/WhyStBrittos';
import ChairmanDesk from './components/about/ChairmanDesk';
import CorrespondentDesk from './components/about/CorrespondentDesk';
import PrincipalDesk from './components/about/PrincipalDesk';
import VicePrincipalDesk from './components/about/VicePrincipalDesk';
import Infrastructure from './components/about/Infrastructure';
import VirtualTour from './components/about/VirtualTour';
import MandatoryDisclosure from './components/about/MandatoryDisclosure';
import AnnualReport from './components/about/AnnualReport';
import Academics from './components/Academics';
import Curriculum from './components/academics/Curriculum';
import Kindergarten from './components/academics/Kindergarten';
import LowerPrimary from './components/academics/LowerPrimary';
import UpperPrimary from './components/academics/UpperPrimary';
import MiddleSchool from './components/academics/MiddleSchool';
import SecondarySchool from './components/academics/SecondarySchool';
import SeniorSecondary from './components/academics/SeniorSecondary';
import Results from './components/academics/Results';
import Activities from './components/Activities';
import EightQuotients from './components/activities/EightQuotients';
import BelieveYouCan from './components/activities/BelieveYouCan';
import Achievements from './components/Achievements';
import SchoolAchievements from './components/achievements/SchoolAchievements';
import StudentAchievements from './components/achievements/StudentAchievements';
import Admissions from './components/Admissions';
import AdmissionsProcedure from './components/admissions/AdmissionsProcedure';
import CodeOfConduct from './components/admissions/CodeOfConduct';
import Gallery from './components/Gallery';
import Photos from './components/gallery/Photos';
import GalleryMain from './components/gallery/GalleryMain';
import Blog from './components/Blog';
import PrincipalBlog from './components/blog/PrincipalBlog';
import VicePrincipalBlog from './components/blog/VicePrincipalBlog';
import Careers from './components/Careers';
import ApplyForPost from './components/careers/ApplyForPost';
import TeacherERPLogin from './components/login/TeacherERPLogin';
import StudentERPLogin from './components/login/StudentERPLogin';
import StudentLoginPage from './pages/StudentLoginPage';
import TeacherLoginPage from './pages/TeacherLoginPage';
import EventDetails from './components/events/EventDetails';
import AdmissionPopup from './components/AdmissionPopup';
import { FaComments } from 'react-icons/fa';
import HeroSection from './components/HeroSection';
import InvestitureCeremony2025Page from './components/events/InvestitureCeremony2025Page';
import PongalCelebration2025Page from './components/events/PongalCelebration2025Page';
import ChristmasCelebration2024Page from './components/events/ChristmasCelebration2024Page';
import ChildrensDayCelebration2024Page from './components/events/ChildrensDayCelebration2024Page';
import DiwaliCelebration2024Page from './components/events/DiwaliCelebration2024Page';
import RoyalGridlock2024Page from './components/events/RoyalGridlock2024Page';
import YoungForum2024Page from './components/events/YoungForum2024Page';
import GrandparentsDay2024Page from './components/events/GrandparentsDay2024Page';
import ZestRegalia2024Page from './components/events/ZestRegalia2024Page';
import InvestitureCeremony2024Page from './components/events/InvestitureCeremony2024Page';
import KGGraduationDay2024Page from './components/events/KGGraduationDay2024Page';
import DiwaliCelebrationNov2023Page from './components/events/DiwaliCelebrationNov2023Page';
import Asset2023Page from './components/events/Asset2023Page';
import RoyalGridlock2023Page from './components/events/RoyalGridlock2023Page';
import YoungForum2023Page from './components/events/YoungForum2023Page';
import ArrayOfSumptuousness2023Page from './components/events/ArrayOfSumptuousness2023Page';
import InvestitureCeremony2023Page from './components/events/InvestitureCeremony2023Page';
import ZestRegalia2023Page from './components/events/ZestRegalia2023Page';

function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScroll(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-blue-600 z-[9999]"
      style={{ width: `${scroll * 100}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scroll * 100}%` }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am BrittoBot. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Gemini API call
  async function fetchGeminiReply(userInput: string) {
    const apiKey = "AIzaSyC84aOHnGHKex68ck6q510RUMT_y4DrOMA";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    const body = {
      contents: [
        { parts: [{ text: userInput }] }
      ]
    };
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not get a response.';
    } catch (err) {
      return 'Sorry, there was an error connecting to the AI.';
    }
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setLoading(true);
    setInput('');
    const reply = await fetchGeminiReply(input);
    setMessages(msgs => [...msgs, { from: 'bot', text: reply }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Chatbot Icon */}
      <button
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl p-3 sm:p-4 flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={() => setOpen(true)}
        aria-label="Open BrittoBot Chatbot"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
      >
        <FaComments className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
      {/* Chatbot Panel */}
      {open && (
        <div className="fixed bottom-0 left-0 w-full max-w-sm sm:max-w-md md:max-w-lg h-[70vh] sm:h-[70vh] bg-white shadow-2xl rounded-tr-2xl z-[9999] flex flex-col border border-green-500 animate-fadeInUp" style={{ maxHeight: '90vh' }}>
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-green-500 rounded-tr-2xl">
            <span className="text-white font-bold text-base sm:text-lg">BrittoBot – Ask Me Anything</span>
            <button onClick={() => setOpen(false)} className="text-white text-xl sm:text-2xl font-bold focus:outline-none hover:text-green-100 transition-colors">×</button>
          </div>
          <div className="flex-1 overflow-hidden px-3 sm:px-4 py-2 sm:py-3 space-y-2 bg-green-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-xl px-3 sm:px-4 py-2 max-w-[80%] text-sm ${msg.from === 'user' ? 'bg-green-200 text-green-900' : 'bg-white text-gray-800 border border-green-200'}`}>{msg.text}</div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-3 sm:px-4 py-2 max-w-[80%] text-sm bg-white text-gray-400 border border-green-200 animate-pulse">BrittoBot is typing...</div>
              </div>
            )}
          </div>
          <form onSubmit={handleSend} className="p-2 sm:p-3 flex gap-2 border-t bg-white">
            <input
              type="text"
              className="flex-1 rounded-lg border border-green-300 px-2 sm:px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
              autoComplete="off"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 sm:px-4 py-2 font-semibold transition-colors text-sm">Send</button>
          </form>
        </div>
      )}
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// ErrorBoundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error?: Error }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) { 
    console.error('ErrorBoundary caught error:', error);
    return { hasError: true, error }; 
  }
  componentDidCatch(error: any, info: any) { 
    console.error('ErrorBoundary caught:', error, info); 
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: 40, 
          textAlign: 'center', 
          color: 'red',
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          margin: '20px'
        }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Refresh Page
          </button>
          {this.state.error && (
            <details style={{ marginTop: '20px', textAlign: 'left' }}>
              <summary>Error Details</summary>
              <pre style={{ 
                backgroundColor: '#f3f4f6', 
                padding: '10px', 
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '12px'
              }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
// Simple loading spinner
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    <span className="ml-4 text-blue-700 font-semibold">Loading...</span>
  </div>
);

function App() {
  const [isAdmissionPopupOpen, setIsAdmissionPopupOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const location = useLocation();

  // Paths where header/footer should be hidden
  const standalonePaths = ['/teacher-login', '/student-login'];
  const isStandalone = standalonePaths.includes(location.pathname);

  useEffect(() => {
    setIsClient(true);
    console.log('App component mounted');
  }, []);

  // Prevent hydration issues by not rendering until client-side
  if (!isClient) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollProgressBar />
        <Chatbot />
        <ScrollToTop />
        <div className="min-h-screen bg-transparent flex flex-col">
          <AdmissionPopup 
            isOpen={isAdmissionPopupOpen} 
            onClose={() => setIsAdmissionPopupOpen(false)} 
          />
          {!isStandalone && <Header />}
          {/* Show video after both headers, only on homepage */}
          {!isStandalone && location.pathname === '/' && <HeroSection />}
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/about/governance" element={<Governance />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/why-stbrittos" element={<WhyStBrittos />} />
              <Route path="/about/chairmans-desk" element={<ChairmanDesk />} />
              <Route path="/about/correspondents-desk" element={<CorrespondentDesk />} />
              <Route path="/about/principals-desk" element={<PrincipalDesk />} />
              <Route path="/about/vice-principals-desk" element={<VicePrincipalDesk />} />
              <Route path="/about/infrastructure" element={<Infrastructure />} />
              <Route path="/about/virtual-tour" element={<VirtualTour />} />
              <Route path="/about/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/about/annual-report" element={<AnnualReport />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/curriculum" element={<Curriculum />} />
              <Route path="/academics/kindergarten" element={<Kindergarten />} />
              <Route path="/academics/lower-primary" element={<LowerPrimary />} />
              <Route path="/academics/upper-primary" element={<UpperPrimary />} />
              <Route path="/academics/middle-school" element={<MiddleSchool />} />
              <Route path="/academics/secondary-school" element={<SecondarySchool />} />
              <Route path="/academics/senior-secondary" element={<SeniorSecondary />} />
              <Route path="/academics/results" element={<Results />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/activities/8-quotients" element={<EightQuotients />} />
              <Route path="/activities/believe-you-can" element={<BelieveYouCan />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/achievements/school" element={<SchoolAchievements />} />
              <Route path="/achievements/students" element={<StudentAchievements />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions/procedure" element={<AdmissionsProcedure />} />
              <Route path="/admissions/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/photos" element={<Photos />} />
              <Route path="/gallery/videos" element={<GalleryMain />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/principal" element={<PrincipalBlog />} />
              <Route path="/blog/vice-principal" element={<VicePrincipalBlog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/apply" element={<ApplyForPost />} />
              <Route path="/login/teacher-erp" element={<TeacherERPLogin />} />
              <Route path="/login/student-erp" element={<StudentERPLogin />} />
              <Route path="/student-login" element={<StudentERPLogin />} />
              <Route path="/teacher-login" element={<TeacherLoginPage />} />
              <Route path="/events/investiture-ceremony-2025-26" element={<InvestitureCeremony2025Page />} />
              <Route path="/events/pongal-celebration-2025" element={<PongalCelebration2025Page />} />
              <Route path="/events/christmas-celebration-2024" element={<ChristmasCelebration2024Page />} />
              <Route path="/events/childrens-day-2024" element={<ChildrensDayCelebration2024Page />} />
              <Route path="/events/diwali-celebration-2024" element={<DiwaliCelebration2024Page />} />
              <Route path="/events/byc-royal-gridlock-2024" element={<RoyalGridlock2024Page />} />
              <Route path="/events/young-forum-2024" element={<YoungForum2024Page />} />
              <Route path="/events/grandparents-day-2024" element={<GrandparentsDay2024Page />} />
              <Route path="/events/zest-regalia-2024" element={<ZestRegalia2024Page />} />
              <Route path="/events/investiture-ceremony-2024" element={<InvestitureCeremony2024Page />} />
              <Route path="/events/kg-graduation-day-2024" element={<KGGraduationDay2024Page />} />
              <Route path="/events/diwali-celebration-nov-2023" element={<DiwaliCelebrationNov2023Page />} />
              <Route path="/events/asset-2023" element={<Asset2023Page />} />
              <Route path="/events/royal-gridlock-2023" element={<RoyalGridlock2023Page />} />
              <Route path="/events/young-forum-2023" element={<YoungForum2023Page />} />
              <Route path="/events/array-of-sumptuousness-2023" element={<ArrayOfSumptuousness2023Page />} />
              <Route path="/events/investiture-ceremony-2023" element={<InvestitureCeremony2023Page />} />
              <Route path="/events/zest-regalia-2023" element={<ZestRegalia2023Page />} />
              <Route path="/events/:eventId" element={<EventDetails />} />
            </Routes>
          </main>
          {!isStandalone && <Footer />}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

// Wrap App in Router to allow useLocation
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;