import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { initGlobalFadeInAnimation, cleanupGlobalFadeInAnimation } from './utils/fadeInAnimation';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { ParallaxProvider } from './components/parallax';
import { AOSProvider } from './components/aos';
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
import UpcomingEvents from './components/gallery/UpcomingEvents';
import Blog from './components/Blog';
import StudentBlog from './components/blog/StudentBlog';
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
import OnlineAdmissionProcedure from './components/admissions/OnlineAdmissionProcedure';
import OnlineApplicationForm from './components/admissions/OnlineApplicationForm';

// PageFade wrapper for transitions
const PageFade = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    style={{ minHeight: '100%' }}
  >
    {children}
  </motion.div>
);

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
  const standalonePaths = ['/teacher-login', '/student-login', '/admissions/online-admission'];
  const isStandalone = standalonePaths.includes(location.pathname);

  useEffect(() => {
    setIsClient(true);
    console.log('App component mounted');
    
    // Initialize global fade-in animation system
    initGlobalFadeInAnimation({
      delay: 150,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Cleanup on unmount
    return () => {
      cleanupGlobalFadeInAnimation();
    };
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
        <ParallaxProvider>
          <AOSProvider>
        <div className="min-h-screen bg-transparent flex flex-col">
          <AdmissionPopup 
            isOpen={isAdmissionPopupOpen} 
            onClose={() => setIsAdmissionPopupOpen(false)} 
          />
          {!isStandalone && <Header />}
          {/* Show video after both headers, only on homepage */}
          {!isStandalone && location.pathname === '/' && <HeroSection />}
          <main className="flex-1 w-full">
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                {[
                  <Route key="/" path="/" element={<PageFade><HomePage /></PageFade>} />,
                  <Route key="/about" path="/about" element={<PageFade><AboutUs /></PageFade>} />,
                  <Route key="/about/governance" path="/about/governance" element={<PageFade><Governance /></PageFade>} />,
                  <Route key="/about/vision-mission" path="/about/vision-mission" element={<PageFade><VisionMission /></PageFade>} />,
                  <Route key="/about/why-stbrittos" path="/about/why-stbrittos" element={<PageFade><WhyStBrittos /></PageFade>} />,
                  <Route key="/about/chairmans-desk" path="/about/chairmans-desk" element={<PageFade><ChairmanDesk /></PageFade>} />,
                  <Route key="/about/correspondents-desk" path="/about/correspondents-desk" element={<PageFade><CorrespondentDesk /></PageFade>} />,
                  <Route key="/about/principals-desk" path="/about/principals-desk" element={<PageFade><PrincipalDesk /></PageFade>} />,
                  <Route key="/about/vice-principals-desk" path="/about/vice-principals-desk" element={<PageFade><VicePrincipalDesk /></PageFade>} />,
                  <Route key="/about/infrastructure" path="/about/infrastructure" element={<PageFade><Infrastructure /></PageFade>} />,
                  <Route key="/about/virtual-tour" path="/about/virtual-tour" element={<PageFade><VirtualTour /></PageFade>} />,
                  <Route key="/about/mandatory-disclosure" path="/about/mandatory-disclosure" element={<PageFade><MandatoryDisclosure /></PageFade>} />,
                  <Route key="/about/annual-report" path="/about/annual-report" element={<PageFade><AnnualReport /></PageFade>} />,
                  <Route key="/academics" path="/academics" element={<PageFade><Academics /></PageFade>} />,
                  <Route key="/academics/curriculum" path="/academics/curriculum" element={<PageFade><Curriculum /></PageFade>} />,
                  <Route key="/academics/kindergarten" path="/academics/kindergarten" element={<PageFade><Kindergarten /></PageFade>} />,
                  <Route key="/academics/lower-primary" path="/academics/lower-primary" element={<PageFade><LowerPrimary /></PageFade>} />,
                  <Route key="/academics/upper-primary" path="/academics/upper-primary" element={<PageFade><UpperPrimary /></PageFade>} />,
                  <Route key="/academics/middle-school" path="/academics/middle-school" element={<PageFade><MiddleSchool /></PageFade>} />,
                  <Route key="/academics/secondary-school" path="/academics/secondary-school" element={<PageFade><SecondarySchool /></PageFade>} />,
                  <Route key="/academics/senior-secondary" path="/academics/senior-secondary" element={<PageFade><SeniorSecondary /></PageFade>} />,
                  <Route key="/academics/results" path="/academics/results" element={<PageFade><Results /></PageFade>} />,
                  <Route key="/activities" path="/activities" element={<PageFade><Activities /></PageFade>} />,
                  <Route key="/activities/8-quotients" path="/activities/8-quotients" element={<PageFade><EightQuotients /></PageFade>} />,
                  <Route key="/activities/believe-you-can" path="/activities/believe-you-can" element={<PageFade><BelieveYouCan /></PageFade>} />,
                  <Route key="/achievements" path="/achievements" element={<PageFade><Achievements /></PageFade>} />,
                  <Route key="/achievements/school" path="/achievements/school" element={<PageFade><SchoolAchievements /></PageFade>} />,
                  <Route key="/achievements/students" path="/achievements/students" element={<PageFade><StudentAchievements /></PageFade>} />,
                  <Route key="/admissions" path="/admissions" element={<PageFade><Admissions /></PageFade>} />,
                  <Route key="/admissions/procedure" path="/admissions/procedure" element={<PageFade><AdmissionsProcedure /></PageFade>} />,
                  <Route key="/admissions/code-of-conduct" path="/admissions/code-of-conduct" element={<PageFade><CodeOfConduct /></PageFade>} />,
                  <Route key="/admissions/online-admission" path="/admissions/online-admission" element={<PageFade><OnlineAdmissionProcedure /></PageFade>} />,
                  <Route key="/admissions/online-application-form" path="/admissions/online-application-form" element={<PageFade><OnlineApplicationForm /></PageFade>} />,
                  <Route key="/gallery" path="/gallery" element={<PageFade><Gallery /></PageFade>} />,
                  <Route key="/gallery/photos" path="/gallery/photos" element={<PageFade><Photos /></PageFade>} />,
                  <Route key="/gallery/videos" path="/gallery/videos" element={<PageFade><GalleryMain /></PageFade>} />,
                  <Route key="/gallery/upcoming-events" path="/gallery/upcoming-events" element={<PageFade><UpcomingEvents /></PageFade>} />,
                  <Route key="/blog" path="/blog" element={<PageFade><Blog /></PageFade>} />,
                  <Route key="/blog/student" path="/blog/student" element={<PageFade><StudentBlog /></PageFade>} />,
                  <Route key="/careers" path="/careers" element={<PageFade><Careers /></PageFade>} />,
                  <Route key="/careers/apply" path="/careers/apply" element={<PageFade><ApplyForPost /></PageFade>} />,
                  <Route key="/login/teacher-erp" path="/login/teacher-erp" element={<PageFade><TeacherERPLogin /></PageFade>} />,
                  <Route key="/login/student-erp" path="/login/student-erp" element={<PageFade><StudentERPLogin /></PageFade>} />,
                  <Route key="/student-login" path="/student-login" element={<PageFade><StudentERPLogin /></PageFade>} />,
                  <Route key="/teacher-login" path="/teacher-login" element={<PageFade><TeacherLoginPage /></PageFade>} />,
                  <Route key="/events/investiture-ceremony-2025-26" path="/events/investiture-ceremony-2025-26" element={<PageFade><InvestitureCeremony2025Page /></PageFade>} />,
                  <Route key="/events/pongal-celebration-2025" path="/events/pongal-celebration-2025" element={<PageFade><PongalCelebration2025Page /></PageFade>} />,
                  <Route key="/events/christmas-celebration-2024" path="/events/christmas-celebration-2024" element={<PageFade><ChristmasCelebration2024Page /></PageFade>} />,
                  <Route key="/events/childrens-day-2024" path="/events/childrens-day-2024" element={<PageFade><ChildrensDayCelebration2024Page /></PageFade>} />,
                  <Route key="/events/diwali-celebration-2024" path="/events/diwali-celebration-2024" element={<PageFade><DiwaliCelebration2024Page /></PageFade>} />,
                  <Route key="/events/byc-royal-gridlock-2024" path="/events/byc-royal-gridlock-2024" element={<PageFade><RoyalGridlock2024Page /></PageFade>} />,
                  <Route key="/events/young-forum-2024" path="/events/young-forum-2024" element={<PageFade><YoungForum2024Page /></PageFade>} />,
                  <Route key="/events/grandparents-day-2024" path="/events/grandparents-day-2024" element={<PageFade><GrandparentsDay2024Page /></PageFade>} />,
                  <Route key="/events/zest-regalia-2024" path="/events/zest-regalia-2024" element={<PageFade><ZestRegalia2024Page /></PageFade>} />,
                  <Route key="/events/investiture-ceremony-2024" path="/events/investiture-ceremony-2024" element={<PageFade><InvestitureCeremony2024Page /></PageFade>} />,
                  <Route key="/events/kg-graduation-day-2024" path="/events/kg-graduation-day-2024" element={<PageFade><KGGraduationDay2024Page /></PageFade>} />,
                  <Route key="/events/diwali-celebration-nov-2023" path="/events/diwali-celebration-nov-2023" element={<PageFade><DiwaliCelebrationNov2023Page /></PageFade>} />,
                  <Route key="/events/asset-2023" path="/events/asset-2023" element={<PageFade><Asset2023Page /></PageFade>} />,
                  <Route key="/events/royal-gridlock-2023" path="/events/royal-gridlock-2023" element={<PageFade><RoyalGridlock2023Page /></PageFade>} />,
                  <Route key="/events/young-forum-2023" path="/events/young-forum-2023" element={<PageFade><YoungForum2023Page /></PageFade>} />,
                  <Route key="/events/array-of-sumptuousness-2023" path="/events/array-of-sumptuousness-2023" element={<PageFade><ArrayOfSumptuousness2023Page /></PageFade>} />,
                  <Route key="/events/investiture-ceremony-2023" path="/events/investiture-ceremony-2023" element={<PageFade><InvestitureCeremony2023Page /></PageFade>} />,
                  <Route key="/events/zest-regalia-2023" path="/events/zest-regalia-2023" element={<PageFade><ZestRegalia2023Page /></PageFade>} />,
                  <Route key="/events/:eventId" path="/events/:eventId" element={<PageFade><EventDetails /></PageFade>} />
                ]}
              </Routes>
            </AnimatePresence>
          </main>
          {!isStandalone && <Footer />}
        </div>
        </AOSProvider>
        </ParallaxProvider>
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