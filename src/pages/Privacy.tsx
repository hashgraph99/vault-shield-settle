import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Key } from "lucide-react";

export const Privacy = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <Shield className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle>FHE Encryption</CardTitle>
            <CardDescription>
              Fully Homomorphic Encryption allows computation on encrypted data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your data remains encrypted even during processing, ensuring complete privacy.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Lock className="w-8 h-8 text-purple-600 mb-2" />
            <CardTitle>Zero-Knowledge Proofs</CardTitle>
            <CardDescription>
              Validate transactions without revealing sensitive information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Prove transaction validity without exposing transaction details.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Eye className="w-8 h-8 text-green-600 mb-2" />
            <CardTitle>Privacy by Design</CardTitle>
            <CardDescription>
              Built-in privacy protection at every layer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Privacy is not an afterthought but a fundamental design principle.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Key className="w-8 h-8 text-orange-600 mb-2" />
            <CardTitle>Quantum-Resistant</CardTitle>
            <CardDescription>
              Future-proof against quantum computing attacks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Advanced cryptographic algorithms resistant to quantum threats.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
