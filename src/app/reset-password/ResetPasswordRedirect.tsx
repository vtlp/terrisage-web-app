'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ResetPasswordRedirect() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isAndroid && token) {
      window.location.href = `terrisage://reset-password?token=${token}`;

      setTimeout(() => {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.terrisage.app';
      }, 2500);
      return;
    }

    if (isIOS && token) {
      return;
    }
  }, [token]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <p>Opening Terrisage app...</p>
      <p style={{ fontSize: '14px', color: '#888' }}>
        Don&apos;t have the app?{' '}
        <a href="https://play.google.com/store/apps/details?id=com.terrisage.app">
          Download it here
        </a>
      </p>
    </div>
  );
}
