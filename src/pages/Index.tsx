import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AppCard from "@/components/AppCard";

const Index = () => {
  const apps = [
    { name: "Trichrome Library Canary", version: "143.0.7492.0", developer: "Google LLC", icon: "📚", variants: 4, date: "October 24" },
    { name: "Microsoft Copilot", version: "30.0.43102200", developer: "Microsoft Corporation", icon: "🤖", variants: 4, date: "October 24" },
    { name: "Premise - Earn Money for Tasks", version: "25.16.0.185787.22929", developer: "Premise Data Corp.", icon: "💰", variants: 4, date: "October 24" },
    { name: "Android System WebView Canary", version: "143.0.7492.0", developer: "Google LLC", icon: "🌐", variants: 5, date: "October 24" },
    { name: "Google Messages (Wear OS)", version: "20251009_00_RC00", developer: "Google LLC", icon: "💬", variants: 1, date: "October 24" },
    { name: "Pocket FM: Audio Series 8.12.3", version: "8.12.3", developer: "Pocket FM Corp.", icon: "🎧", variants: 1, date: "October 24" },
    { name: "Freedom Mortgage", version: "2.878.6", developer: "Freedom Mortgage Corporation", icon: "🏠", variants: 1, date: "October 24" },
    { name: "MISTPLAY: Play to Earn Money", version: "6.6.1", developer: "MISTPLAY", icon: "🎮", variants: 1, date: "October 24" },
    { name: "Solflare - Solana Wallet", version: "2.5.1", developer: "Solrise Research Ltd", icon: "💎", variants: 1, date: "October 24" },
    { name: "Airtm", version: "18.2.3", developer: "Airtm, Inc.", icon: "✈️", variants: 1, date: "October 24" },
    { name: "Regal: Tickets and Showtimes", version: "11.8.0", developer: "Regal Cinemas", icon: "🎬", variants: 1, date: "October 24" },
    { name: "Samsung Internet Browser Beta", version: "29.0.0.59", developer: "Samsung Electronics Co., Ltd.", icon: "🌍", variants: 2, date: "October 24" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Latest APK Uploads</h2>
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <footer className="bg-card border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 APKMirror. All rights reserved.</p>
          <p className="mt-2">Free and safe Android APK downloads</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
