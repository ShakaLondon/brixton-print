import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "@/layout/main-layout";
import theme from "../theme/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
