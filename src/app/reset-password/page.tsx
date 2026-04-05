import { Suspense } from 'react';
import { ResetPasswordRedirect } from './ResetPasswordRedirect';

function ResetPasswordFallback() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <p>Loading...</p>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordFallback />}>
      <ResetPasswordRedirect />
    </Suspense>
  );
}
