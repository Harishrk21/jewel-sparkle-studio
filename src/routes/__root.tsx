import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ToastProvider } from "@/context/ToastContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";
import WhatsAppFab from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-heading font-light text-gold">404</h1>
        <h2 className="mt-4 text-xl font-heading text-ivory">Page not found</h2>
        <p className="mt-2 text-sm text-ivory-muted font-body">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-gold rounded-lg inline-block text-sm">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumière Jewels — Luxury Handcrafted Jewellery" },
      { name: "description", content: "Born in Jaipur, crafted for the world. Discover handcrafted luxury jewellery in 18K & 22K gold, diamonds, and precious gemstones." },
      { property: "og:title", content: "Lumière Jewels — Luxury Handcrafted Jewellery" },
      { property: "og:description", content: "Discover handcrafted luxury jewellery in 18K & 22K gold, diamonds, and precious gemstones." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ToastProvider>
          <Navbar />
          <Outlet />
          <Footer />
          <CartDrawer />
          <WishlistDrawer />
          <WhatsAppFab />
        </ToastProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
