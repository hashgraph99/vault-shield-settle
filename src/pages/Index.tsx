import { Shield, Lock, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Next-Generation Financial Privacy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionizing enterprise finance with zero-knowledge privacy. 
            Advanced cryptographic techniques with enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Core Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>FHE Encryption</CardTitle>
                <CardDescription>
                  Process encrypted data without decryption using Fully Homomorphic Encryption.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Lock className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Zero-Knowledge Proofs</CardTitle>
                <CardDescription>
                  Validate transactions without revealing sensitive information.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Multi-Party Computation</CardTitle>
                <CardDescription>
                  Secure collaborative financial operations across parties.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>Quantum-Resistant</CardTitle>
                <CardDescription>
                  Future-proof cryptographic protection against quantum attacks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-muted-foreground">Transactions Per Second</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">&lt;100ms</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.99%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1TB+</div>
              <div className="text-muted-foreground">Encrypted Data/Hour</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
