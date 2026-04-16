# Pauvn Abarana Maligai — Pure 916 Hallmark Gold Jewellery

A traditional South Indian gold jewellery website built with TanStack Start, React, and Tailwind CSS. Located in Madurai, Tamil Nadu, serving customers since 1987.

## 🌐 Live Demo
[Your Cloudflare Workers URL will appear here after deployment]

## ⚠️ Deployment Note

This project uses TanStack Start with Server-Side Rendering (SSR). It is **pre-configured for Cloudflare Workers** deployment. 

For **Netlify deployment**, additional configuration with Netlify Functions is required. The recommended deployment method is **Cloudflare Workers** for optimal performance and compatibility.

## 🏪 Brand Information

- **Brand Name:** Pauvn Abarana Maligai
- **Tagline:** தங்கத்தின் தரம், மரபின் மகிமை (The Purity of Gold, The Glory of Tradition)
- **Business Name:** M/S PAUVN ABARNA MALIGAI
- **Business Type:** Small Enterprise
- **Industry:** Trading
- **Location:** No. 50, South Avani Moola Street, Madurai, Tamil Nadu - 625001, India
- **Phone:** +91 99866 88313
- **WhatsApp:** +91 99866 88313
- **Email:** kumar84prasanna@yahoo.com
- **Business Hours:** Mon–Sat: 9:30 AM – 8:30 PM | Sunday: 10:00 AM – 6:00 PM
- **Gold Purity:** 916 BIS Hallmark Certified Gold

## 🛠️ Tech Stack

- **Framework:** TanStack Start (React + Vite)
- **Styling:** Tailwind CSS v4
- **Router:** TanStack Router
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Radix UI (via shadcn/ui)
- **Package Manager:** Bun

## 📦 Installation

```bash
# Install dependencies
bun install

# Start development server
bun dev
```

The development server will start at `http://localhost:5173`

## 🚀 Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 🌐 Deploying to Cloudflare Workers (Recommended)

This project is pre-configured for Cloudflare Workers deployment with TanStack Start SSR.

### Option 1: Using Wrangler CLI

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Workers
wrangler deploy
```

### Option 2: Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Workers & Pages
3. Click "Create Application" → "Create Worker"
4. Upload the `dist/` folder or connect your Git repository
5. Configure build settings:
   - **Build command:** `npm install && npm run build`
   - **Build output directory:** `dist/client`
6. Click "Deploy"

## 🌐 Deploying to Netlify (Not Recommended)

⚠️ **Important:** This project uses TanStack Start with Server-Side Rendering (SSR) and is **pre-configured for Cloudflare Workers**. Deploying to Netlify requires significant additional configuration with Netlify Functions and custom adapters.

**For Netlify deployment, you would need to:**
1. Create a custom Netlify Function to handle the TanStack Start SSR server
2. Configure the build output for Netlify Functions
3. Set up proper routing and redirects
4. Handle environment variables and edge compatibility

**Note:** You will also need to specify Node 22 in your `netlify.toml` file:
```toml
[build.environment]
  NODE_VERSION = "22"
```

**This is complex and not recommended for this project.**

**Recommended: Deploy to Cloudflare Workers** - it's already configured and will work out of the box with `wrangler deploy`.

## 📁 Project Structure

```
jewel-sparkle-studio/
├── public/              # Static assets
│   ├── _redirects      # Netlify redirects for SPA routing
│   └── _headers        # Netlify security headers
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── AnnouncementBar.tsx
│   │   └── ...
│   ├── context/        # React Context providers
│   │   ├── CartContext.tsx
│   │   ├── WishlistContext.tsx
│   │   └── ToastContext.tsx
│   ├── data/           # Data files
│   │   ├── products.ts
│   │   ├── categories.ts
│   │   └── testimonials.ts
│   ├── routes/         # TanStack Router pages
│   │   ├── __root.tsx  # Root layout
│   │   ├── index.tsx   # Homepage
│   │   ├── collections.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── privacy-policy.tsx
│   │   └── terms-of-service.tsx
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── netlify.toml        # Netlify configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔧 Configuration Files

### netlify.toml
Configures Netlify build settings, redirects, and security headers. Already set up for this project.

### Environment Variables (Optional)
If you need environment variables, add them in Netlify Dashboard under:
`Site Settings → Environment Variables`

## 📝 Important Notes

### Before Deploying

1. **Update Contact Information:**
   - Phone number: Set to `+91 99866 88313`
   - Email: Set to `kumar84prasanna@yahoo.com`
   - Address: Verify the address is correct

2. **Update WhatsApp Links:**
   - All WhatsApp links use `https://wa.me/919986688313`

3. **Test All Links:**
   - Verify all navigation links work
   - Test the contact form (it shows a toast message)
   - Check social media links (Instagram, Facebook)

4. **Review Content:**
   - Verify all product data is accurate
   - Check pricing information
   - Ensure testimonials are appropriate

### After Deploying

1. **Set Up Custom Domain** (Optional):
   - Go to Netlify → Domain Settings
   - Add your custom domain (e.g., `pauvnabarana.com`)
   - Update DNS records as instructed by Netlify

2. **Enable HTTPS:**
   - Netlify automatically provides SSL certificates
   - HTTPS is enabled by default

3. **Monitor Build Logs:**
   - Check Netlify Dashboard → Deploys for any build errors
   - Review build logs if deployment fails

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear local build artifacts
rm -rf .tanstack dist node_modules

# Reinstall dependencies
bun install

# Rebuild
bun run build
```

### SPA Routing Issues

If you see 404 errors on page refresh:
- The `_redirects` file in `public/` should handle this
- Ensure `netlify.toml` has the redirect configuration

### Images Not Loading

- Ensure all image URLs are correct
- Check that external images are accessible
- Consider moving critical images to `public/` folder

## 📄 Legal Pages

The site includes:
- **Privacy Policy:** Comprehensive policy covering data collection, WhatsApp API usage, and customer rights
- **Terms of Service:** Complete terms covering orders, payments, shipping, returns, and exchanges
- Both pages are fully customized for Pauvn Abarana Maligai

## 🎨 Customization

### Colors
Edit `src/styles/globals.css` to modify the color scheme:
- `--gold`: Primary gold color
- `--ivory`: Primary text color
- `--background`: Dark background
- `--surface`: Card backgrounds

### Fonts
The project uses:
- **Heading:** Playfair Display (or similar serif)
- **Body:** Inter (or similar sans-serif)
- Fonts can be changed in the Tailwind config or CSS

### Products
Edit `src/data/products.ts` to:
- Add/remove products
- Update prices
- Change descriptions
- Modify categories

## 📞 Support

For issues or questions:
- Email: kumar84prasanna@yahoo.com
- Phone: +91 99866 88313

## 📜 License

© 2025 Pauvn Abarana Maligai. All rights reserved.
No. 50, South Avani Moola Street, Madurai, Tamil Nadu - 625001, India.

---

Built with ❤️ for Madurai's trusted gold jeweller since 1987.
