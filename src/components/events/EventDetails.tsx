import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-16">
      <h1 className="text-3xl font-bold mb-4">Event Details</h1>
      <p className="text-lg">Event ID: <span className="font-mono text-blue-600">{eventId}</span></p>
      <p className="mt-6 text-gray-600">This is a placeholder page for event details. You can customize this page to show more information about the event.</p>
    </div>
  );
};

export default EventDetails; 