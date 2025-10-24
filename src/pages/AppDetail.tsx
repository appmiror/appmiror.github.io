import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Clock, FileText } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const AppDetail = () => {
  const { appName } = useParams();

  const handleDownload = () => {
    toast.success("Download started!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-7xl">📱</div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">
                  {appName?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </h1>
                <p className="text-muted-foreground mb-4">by Google LLC</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-[hsl(var(--apk-orange))] text-white">Version 143.0.7492.0</Badge>
                  <Badge variant="outline">Android 5.0+</Badge>
                  <Badge variant="outline">4 Variants</Badge>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleDownload}
              className="w-full bg-[hsl(var(--apk-orange))] hover:bg-[hsl(var(--apk-orange-dark))] text-lg py-6"
            >
              <Download className="h-5 w-5 mr-2" />
              Download APK
            </Button>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 mx-auto mb-3 text-[hsl(var(--apk-orange))]" />
              <h3 className="font-semibold mb-1">Verified Safe</h3>
              <p className="text-sm text-muted-foreground">Signature verified</p>
            </Card>

            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-3 text-[hsl(var(--apk-orange))]" />
              <h3 className="font-semibold mb-1">Updated</h3>
              <p className="text-sm text-muted-foreground">October 24, 2024</p>
            </Card>

            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto mb-3 text-[hsl(var(--apk-orange))]" />
              <h3 className="font-semibold mb-1">File Size</h3>
              <p className="text-sm text-muted-foreground">45.2 MB</p>
            </Card>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">About this app</h2>
            <p className="text-muted-foreground mb-4">
              This is a high-quality Android application that provides excellent functionality and user experience. 
              Download the latest version to enjoy new features, improvements, and bug fixes.
            </p>
            <h3 className="font-semibold mb-2">What's New:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Performance improvements</li>
              <li>Bug fixes and stability enhancements</li>
              <li>New features and UI updates</li>
              <li>Security patches</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Available Variants</h2>
            <div className="space-y-3">
              {[
                { arch: "armeabi-v7a", dpi: "nodpi", size: "42.1 MB" },
                { arch: "arm64-v8a", dpi: "nodpi", size: "45.2 MB" },
                { arch: "x86", dpi: "nodpi", size: "44.8 MB" },
                { arch: "x86_64", dpi: "nodpi", size: "47.3 MB" },
              ].map((variant, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-semibold">{variant.arch}</p>
                    <p className="text-sm text-muted-foreground">{variant.dpi} • {variant.size}</p>
                  </div>
                  <Button onClick={handleDownload} variant="outline" className="border-[hsl(var(--apk-orange))] text-[hsl(var(--apk-orange))] hover:bg-[hsl(var(--apk-orange))] hover:text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </Card>
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

export default AppDetail;
