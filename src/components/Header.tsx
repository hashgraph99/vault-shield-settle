import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">VaultShield</h1>
            <p className="text-xs text-muted-foreground">Private Settlement Layer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
          <a href="/transfers" className="text-muted-foreground hover:text-foreground transition-colors">Transfers</a>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="/enterprise" className="text-muted-foreground hover:text-foreground transition-colors">Enterprise</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Shield className="w-4 h-4 mr-2" />
            Privacy Portal
          </Button>
          <ConnectButton />
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
