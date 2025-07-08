import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: any, info: any) { console.error('ErrorBoundary caught:', error, info); }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: 40, textAlign: 'center', color: 'red' }}>Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 