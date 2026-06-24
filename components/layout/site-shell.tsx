import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

/**
 * Wraps a page with the shared site Navbar and Footer. Pages provide their own
 * <main> content as children.
 */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-32">{children}</main>
      <Footer />
    </>
  );
}
