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
        <h2 className="mt-4 text-xl font-heading text-ivory">பக்கம் கிடைக்கவில்லை</h2>
        <p className="mt-2 text-sm text-ivory-muted font-body">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-gold rounded-lg inline-block text-sm">முகப்புக்கு செல்</Link>
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
      { title: "Pauvn Abarana Maligai — தங்கத்தின் தரம், மரபின் மகிமை" },
      { name: "description", content: "Pure 916 BIS Hallmark Gold Jewellery in Madurai since 1987. Traditional South Indian bridal jewelry, thali, bangles, necklaces & more. மதுரையின் முதல் தரம்." },
      { property: "og:title", content: "Pauvn Abarana Maligai — Pure 916 Hallmark Gold Jewellery" },
      { property: "og:description", content: "Madurai's Trusted Gold Jeweller since 1987. 916 BIS Hallmark Certified. தங்கத்தின் தரம், மரபின் மகிமை." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
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
