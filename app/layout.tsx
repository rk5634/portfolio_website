import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rajiv Kumar Yadav - Backend + Machine Learning Engineer',
  description: 'Passionate Backend + Machine Learning Engineer building scalable systems and intelligent ML solutions. Expertise in Go, Python, cloud-native architectures, and ML deployment.',
  keywords: [
    'Backend Engineer',
    'Machine Learning Engineer',
    'Go Developer',
    'Python Developer',
    'MLOps',
    'Cloud Architecture',
    'API Development',
    'Data Science',
    'San Francisco'
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  authors: [{ name: 'Rajiv Kumar Yadav' }],
  creator: 'Rajiv Kumar Yadav',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajivyadav.dev',
    title: 'Rajiv Kumar Yadav - Backend + Machine Learning Engineer',
    description: 'Building scalable backend systems and intelligent ML solutions',
    siteName: 'Rajiv Kumar Yadav Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rajiv Kumar Yadav - Backend + ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajiv Kumar Yadav - Backend + Machine Learning Engineer',
    description: 'Building scalable backend systems and intelligent ML solutions',
    creator: '@rajivyadav',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}