import { Metadata } from 'next';
import DashboardClient from '@/components/dashboard/DashboardClient';

// Page metadata - SEO optimization
export const metadata: Metadata = {
  title: 'Dashboard | House of Tech',
  description: 'Manage your courses, track students, and monitor your learning platform performance.',
  keywords: ['dashboard', 'course management', 'edtech', 'learning platform'],
};

// Server Component - Runs on the server for fast initial load
export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content - Client Component for interactivity */}
      <main>
        <DashboardClient />
      </main>
    </div>
  );
}
