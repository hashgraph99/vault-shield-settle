export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">VaultShield</h3>
            <p className="text-sm text-muted-foreground">
              Next-generation financial privacy platform with zero-knowledge encryption.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="/transfers" className="hover:text-foreground transition-colors">Transfers</a></li>
              <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Enterprise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/enterprise" className="hover:text-foreground transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Compliance</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 VaultShield. All rights reserved. Built with privacy-first architecture.</p>
        </div>
      </div>
    </footer>
  );
};
