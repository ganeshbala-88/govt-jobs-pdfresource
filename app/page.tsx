import Header from "./components/Header";
import Hero from "./components/Hero";
import ResourceList from "./components/ResourceList";
import Footer from "./components/Footer";

import { seoKeywords } from "./data/seoKeywords";

export const metadata = {
  title: "All India Govt Jobs Resources 2026 | Notifications, Syllabus & PDFs",
  description:
    "Latest Central and State government job notifications, Indian Army, Police, SSC, UPSC, and official syllabus PDFs. All resources linked directly from authentic government websites.",
  keywords: seoKeywords.join(", "),
};

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ResourceList />
      <Footer />
    </>
  );
}
