import { ImageProvider } from "./context/ImageContext";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <ImageProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ImageProvider>
  );
};

export default RootLayout;
