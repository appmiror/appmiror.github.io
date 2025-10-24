import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Communication", count: 1250, icon: "💬" },
    { name: "Social", count: 890, icon: "👥" },
    { name: "Games", count: 2340, icon: "🎮" },
    { name: "Productivity", count: 678, icon: "📊" },
    { name: "Entertainment", count: 1120, icon: "🎬" },
    { name: "Music & Audio", count: 456, icon: "🎵" },
    { name: "Photography", count: 789, icon: "📷" },
    { name: "Video Players & Editors", count: 567, icon: "📹" },
    { name: "Tools", count: 1890, icon: "🔧" },
    { name: "Shopping", count: 345, icon: "🛒" },
    { name: "Finance", count: 234, icon: "💰" },
    { name: "Health & Fitness", count: 567, icon: "💪" },
    { name: "Education", count: 890, icon: "📚" },
    { name: "Travel & Local", count: 456, icon: "✈️" },
    { name: "News & Magazines", count: 345, icon: "📰" },
    { name: "Weather", count: 123, icon: "🌤️" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <Card className="p-6 hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] transition-all cursor-pointer text-center">
                <span className="text-5xl block mb-3">{category.icon}</span>
                <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} apps</p>
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

export default Categories;
