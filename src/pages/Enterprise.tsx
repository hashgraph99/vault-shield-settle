import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Shield, Scale, Users } from "lucide-react";

export const Enterprise = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Enterprise Solutions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <Building className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle>Enterprise-Grade Security</CardTitle>
            <CardDescription>
              Built for large-scale financial operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• SOC 2 Type II compliance</li>
              <li>• ISO 27001 certification</li>
              <li>• PCI DSS compliance</li>
              <li>• GDPR compliance</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Shield className="w-8 h-8 text-purple-600 mb-2" />
            <CardTitle>Regulatory Compliance</CardTitle>
            <CardDescription>
              Built-in compliance frameworks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Automated compliance reporting and audit trails for regulatory requirements.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Scale className="w-8 h-8 text-green-600 mb-2" />
            <CardTitle>Scalable Infrastructure</CardTitle>
            <CardDescription>
              Handle enterprise-level transaction volumes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Designed to scale with your business needs and transaction volumes.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Users className="w-8 h-8 text-orange-600 mb-2" />
            <CardTitle>Multi-Party Operations</CardTitle>
            <CardDescription>
              Secure collaborative financial operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Enable secure multi-party computation for complex financial operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
