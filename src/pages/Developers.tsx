import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Developers = () => {
  const developers = [
    { name: "Google LLC", apps: 250, icon: "🔍" },
    { name: "Microsoft Corporation", apps: 89, icon: "💻" },
    { name: "Meta Platforms, Inc.", apps: 45, icon: "📱" },
    { name: "Samsung Electronics", apps: 120, icon: "📱" },
    { name: "Telegram FZ-LLC", apps: 15, icon: "✈️" },
    { name: "WhatsApp LLC", apps: 8, icon: "💬" },
    { name: "Spotify Ltd.", apps: 12, icon: "🎵" },
    { name: "Netflix, Inc.", apps: 18, icon: "🎬" },
    { name: "Amazon Mobile LLC", apps: 67, icon: "🛒" },
    { name: "Twitter, Inc.", apps: 22, icon: "🐦" },
    { name: "Adobe Inc.", apps: 34, icon: "🎨" },
    { name: "TikTok Pte. Ltd.", apps: 19, icon: "🎵" },
    { name: "Snapchat, Inc.", apps: 14, icon: "👻" },
    { name: "Discord Inc.", apps: 11, icon: "🎮" },
    { name: "Epic Games, Inc.", apps: 8, icon: "🎮" },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Developers</h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="px-3 py-1 bg-card hover:bg-[hsl(var(--apk-orange))] hover:text-white rounded transition-colors text-sm font-medium"
            >
              {letter}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {developers.map((developer, index) => (
            <Link key={index} to={`/developer/${developer.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <Card className="p-4 hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{developer.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold">{developer.name}</h3>
                    <p className="text-sm text-muted-foreground">{developer.apps} apps</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-card border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 APKMirror. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Developers;
