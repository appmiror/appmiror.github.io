import Header from "@/components/Header";
import AppCard from "@/components/AppCard";
import { useParams } from "react-router-dom";

const DeveloperDetail = () => {
  const { developerName } = useParams();

  const apps = [
    { name: "Google Chrome", version: "120.0.6099.43", developer: "Google LLC", icon: "🌐", variants: 4 },
    { name: "Google Maps", version: "11.95.0301", developer: "Google LLC", icon: "🗺️", variants: 2 },
    { name: "Gmail", version: "2024.01.21", developer: "Google LLC", icon: "📧", variants: 3 },
    { name: "Google Drive", version: "2.24.017.0", developer: "Google LLC", icon: "☁️", variants: 2 },
    { name: "YouTube", version: "19.01.33", developer: "Google LLC", icon: "📺", variants: 5 },
    { name: "Google Photos", version: "6.70.0.509288562", developer: "Google LLC", icon: "📷", variants: 4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🔍</span>
            <div>
              <h1 className="text-3xl font-bold">
                {developerName?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </h1>
              <p className="text-muted-foreground">{apps.length} apps available</p>
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

export default DeveloperDetail;
