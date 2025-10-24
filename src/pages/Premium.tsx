import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Premium = () => {
  const features = [
    "Ad-free browsing experience",
    "Dark mode support",
    "Priority customer support",
    "Early access to new features",
    "Exclusive app recommendations",
    "Advanced search filters",
    "Unlimited download speed",
    "APK backup and restore",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">APKMirror Premium</h1>
          <p className="text-xl text-muted-foreground">
            Enhance your APKMirror experience with Premium features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-2">Monthly</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$5</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <Button className="w-full bg-[hsl(var(--apk-orange))] hover:bg-[hsl(var(--apk-orange-dark))] mb-6">
              Get Started
            </Button>
            <ul className="space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[hsl(var(--apk-orange))] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 border-4 border-[hsl(var(--apk-orange))] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[hsl(var(--apk-orange))] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$10</span>
              <span className="text-muted-foreground">/quarter</span>
              <div className="text-sm text-[hsl(var(--apk-orange))] font-semibold mt-1">
                Save 33%
              </div>
            </div>
            <Button className="w-full bg-[hsl(var(--apk-orange))] hover:bg-[hsl(var(--apk-orange-dark))] mb-6">
              Get Started
            </Button>
            <ul className="space-y-3">
              {features.slice(0, 6).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[hsl(var(--apk-orange))] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-2">Yearly</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$30</span>
              <span className="text-muted-foreground">/year</span>
              <div className="text-sm text-[hsl(var(--apk-orange))] font-semibold mt-1">
                Save 50%
              </div>
            </div>
            <Button className="w-full bg-[hsl(var(--apk-orange))] hover:bg-[hsl(var(--apk-orange-dark))] mb-6">
              Get Started
            </Button>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[hsl(var(--apk-orange))] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-gradient-to-r from-[hsl(var(--apk-orange))] to-[hsl(var(--apk-orange-light))] text-white">
            <h2 className="text-2xl font-bold mb-4">Why Choose Premium?</h2>
            <p className="mb-6">
              Get the best APKMirror experience with ad-free browsing, exclusive features, and priority support. Join thousands of satisfied Premium members today!
            </p>
            <Button variant="secondary" className="bg-white text-[hsl(var(--apk-orange))] hover:bg-gray-100">
              Compare Plans
            </Button>
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

export default Premium;
