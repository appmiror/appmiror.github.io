import { Card } from "@/components/ui/card";
import { Twitter, MessageCircle, Send, Rss } from "lucide-react";

const Sidebar = () => {
  const popularApps = [
    { name: "MusicFX 1.4", downloads: "105K", icon: "🎵" },
    { name: "Google Services Framework 16", downloads: "90K", icon: "📱" },
    { name: "Google Play Store 48.3.25", downloads: "75K", icon: "🏪" },
    { name: "XCIPTY PLAYER 7.0", downloads: "69K", icon: "▶️" },
    { name: "Google Play Store 48.2.19", downloads: "41K", icon: "🏪" },
    { name: "Google Play services 25.31.33", downloads: "38K", icon: "⚙️" },
    { name: "Android Easter Egg 1.0", downloads: "38K", icon: "🥚" },
    { name: "CapCut - Video Editor 15.3.0", downloads: "38K", icon: "✂️" },
  ];

  return (
    <aside className="space-y-6">
      <Card className="p-4">
        <h3 className="font-bold text-lg mb-4">Follow APK Mirror</h3>
        <div className="flex gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[hsl(var(--apk-orange))] text-white hover:opacity-80 transition-opacity"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://mastodon.social"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[hsl(var(--apk-orange))] text-white hover:opacity-80 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[hsl(var(--apk-orange))] text-white hover:opacity-80 transition-opacity"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href="/feed"
            className="p-2 rounded-full bg-[hsl(var(--apk-orange))] text-white hover:opacity-80 transition-opacity"
          >
            <Rss className="h-5 w-5" />
          </a>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-bold text-lg mb-4">Popular in Last 30 Days</h3>
        <div className="space-y-3">
          {popularApps.map((app, index) => (
            <div key={index} className="flex items-center justify-between hover:bg-muted/50 p-2 rounded transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{app.icon}</span>
                <span className="text-sm font-medium">{app.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{app.downloads}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-bold text-lg mb-4">Popular in Last 7 Days</h3>
        <div className="space-y-3">
          {popularApps.slice(0, 5).map((app, index) => (
            <div key={index} className="flex items-center justify-between hover:bg-muted/50 p-2 rounded transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{app.icon}</span>
                <span className="text-sm font-medium">{app.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{app.downloads}</span>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
