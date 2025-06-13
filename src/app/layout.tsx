"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./global.scss";
import Header from "./components/Header/Header";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
