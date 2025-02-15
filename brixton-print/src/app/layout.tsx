import "./globals.css";
import { Provider as ChakraProvider } from "@chakraui/provider";
import MainLayout from "@/layout/main-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider>
          <MainLayout>{children}</MainLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
