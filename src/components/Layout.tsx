import Head from "next/head";
import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "Batnaidan Tsend | Senior Software Engineer",
  description = "Portfolio of Batnaidan Tsend, a Senior Software Engineer specializing in Golang, Vue.js, and AI products.",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen">
        <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
          {children}
        </div>
      </main>
    </>
  );
}
