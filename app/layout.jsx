import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "StudySpace",
  description: "A peaceful digital study environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(outfit.variable, "font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
