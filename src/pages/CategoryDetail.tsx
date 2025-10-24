import Header from "@/components/Header";
import AppCard from "@/components/AppCard";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { categoryName } = useParams();

  const apps = [
    { name: "WhatsApp Messenger", version: "2.24.1.76", developer: "WhatsApp LLC", icon: "💬", variants: 3 },
    { name: "Telegram", version: "10.5.2", developer: "Telegram FZ-LLC", icon: "✈️", variants: 4 },
    { name: "Signal Private Messenger", version: "6.43.4", developer: "Signal Foundation", icon: "🔒", variants: 2 },
    { name: "Discord", version: "209.15", developer: "Discord Inc.", icon: "🎮", variants: 3 },
    { name: "Messenger", version: "446.0.0.27.114", developer: "Meta Platforms, Inc.", icon: "💬", variants: 5 },
    { name: "Skype", version: "8.106.0.213", developer: "Microsoft Corporation", icon: "📞", variants: 2 },
  ];

  const categoryIcons: Record<string, string> = {
    "communication": "💬",
    "social": "👥",
    "games": "🎮",
    "productivity": "📊",
    "entertainment": "🎬",
    "music-audio": "🎵",
  };

  const icon = categoryIcons[categoryName || ""] || "📱";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{icon}</span>
            <div>
              <h1 className="text-3xl font-bold">
                {categoryName?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </h1>
              <p className="text-muted-foreground">{apps.length} apps in this category</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
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

export default CategoryDetail;
