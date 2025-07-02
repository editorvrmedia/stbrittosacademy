import React from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

const UpcomingEventsAside = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const events = [
    { date: '17.06.2025', description: 'Class Assembly- Investing-RISK', classInfo: 'XII C&D' },
    { date: '18.06.2025', description: 'IVC 2025', classInfo: '' },
    { date: '19.06.2025', description: 'Class Assembly- Time Management-POMODORO.', classInfo: 'X A' },
    { date: '20.06.2025', description: 'Hardwork (Sardar Vallabhbhai Patel)', classInfo: 'IV A' },
    { date: '24.06.2025', description: 'Class Assembly- Stress Management-BREATHE', classInfo: 'X B' },
    { date: '25.06.2025', description: 'Care', classInfo: 'UKG A' },
    { date: '26.06.2025', description: 'Class Assembly-Self-Motivation-DRIVE', classInfo: 'X C' },
    { date: '27.06.2025', description: 'Responsible', classInfo: 'UKG B' },
  ];

  // Filter and sort events based on today's date
  const today = new Date();
  const filteredSortedEvents = events
    .map(event => ({
      ...event,
      dateObj: new Date(event.date.split('.').reverse().join('-')),
    }))
    .filter(event => {
      // Remove time part for comparison
      const eventDate = new Date(event.dateObj.getFullYear(), event.dateObj.getMonth(), event.dateObj.getDate());
      const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      return eventDate >= now;
    })
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  const [isLocalOpen, setIsLocalOpen] = React.useState(isOpen);
  const [minimized, setMinimized] = React.useState(false);

  React.useEffect(() => {
    setIsLocalOpen(isOpen);
  }, [isOpen]);

  if (!isLocalOpen) return null;

  return (
    <div className={`fixed right-0 bottom-0 mb-2 mr-2 z-40 ${minimized ? 'w-28' : 'w-full max-w-[220px] sm:max-w-[300px]'} bg-white shadow-lg rounded-lg transform transition-transform duration-500 text-[10px] sm:text-xs`}>
      {minimized ? (
        <div className="flex items-center justify-between px-4 py-2 cursor-pointer" onClick={() => setMinimized(false)}>
                  <span className="font-bold text-blue-900 text-sm">Upcoming Events</span>
        <ChevronUp className="h-5 w-5 text-blue-600" />
        </div>
      ) : (
        <div className="p-1 sm:p-2">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-sm sm:text-base font-bold text-blue-900">Upcoming Events</h2>
            <div className="flex gap-2">
              <button onClick={() => setMinimized(true)} className="text-blue-600 hover:text-blue-800 mr-1">
                <ChevronDown className="h-5 w-5" />
              </button>
              <button onClick={() => {
                setIsLocalOpen(false);
                onClose();
              }} className="text-blue-600 hover:text-blue-800">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-[10px] sm:text-xs table-fixed">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th scope="col" className="px-1 py-1 text-left font-medium uppercase tracking-wider rounded-tl-lg w-[60px]">Date</th>
                  <th scope="col" className="px-1 py-1 text-left font-medium uppercase tracking-wider w-[110px] sm:w-[160px]">Event</th>
                  <th scope="col" className="px-1 py-1 text-left font-medium uppercase tracking-wider rounded-tr-lg w-[45px] sm:w-[60px]">Class/Section</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSortedEvents.map((event, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-sky-50' : 'bg-white'}>
                    <td className="px-1 py-1 whitespace-nowrap font-medium text-blue-900 align-top">{event.date}</td>
                    <td className="px-1 py-1 break-words text-blue-800 align-top leading-snug max-w-[110px] sm:max-w-[160px]">{event.description}</td>
                    <td className="px-0 py-1 whitespace-nowrap text-blue-700 align-top text-[9px] sm:text-xs w-[45px] sm:w-[60px] truncate" title={event.classInfo}>{event.classInfo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEventsAside;