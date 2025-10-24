import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

interface AppCardProps {
  name: string;
  version: string;
  developer: string;
  icon: string;
  variants?: number;
  date?: string;
}

const AppCard = ({ name, version, developer, icon, variants = 4, date = "October 24" }: AppCardProps) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <Link to={`/app/${slug}`}>
      <Card className="p-4 hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] transition-all cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="text-5xl flex-shrink-0">{icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base mb-1 truncate">
              {name} {version}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">by {developer}</p>
            {variants > 0 && (
              <Badge variant="secondary" className="text-xs bg-[hsl(var(--apk-orange))] text-white hover:bg-[hsl(var(--apk-orange-dark))]">
                {variants} variants
              </Badge>
            )}
          </div>
          <div className="flex-shrink-0">
            <Download className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        {date && (
          <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
            {date}
          </div>
        )}
      </Card>
    </Link>
  );
};

export default AppCard;
