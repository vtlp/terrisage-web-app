'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ResetPasswordRedirect() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isAndroid && token) {
      // Try opening the app first via custom scheme
      window.location.href = `terrisage://reset-password?token=${token}`;

      // App not installed → send to Play Store after 2.5s
      setTimeout(() => {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.terrisage.app';
      }, 2500);
      return;
    }

    if (isIOS && token) {
      // For future iOS support — App Store redirect
      // window.location.href = 'https://apps.apple.com/app/idXXXXXXXXX';
      // For now, just show nothing or a message
      return;
    }

    // Desktop — no mobile app exists, just show a simple message
    // You can style this however you want
  }, [token]);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <p>Opening Terrisage app...</p>
      <p style={{ fontSize: '14px', color: '#888' }}>
        Don't have the app?{' '}
        <a href="https://play.google.com/store/apps/details?id=com.terrisage.app">
          Download it here
        </a>
      </p>
    </div>
  );
}