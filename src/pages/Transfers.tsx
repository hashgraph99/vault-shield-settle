import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Transfers = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Transfers</h1>
      <Card>
        <CardHeader>
          <CardTitle>Privacy-Preserving Transfers</CardTitle>
          <CardDescription>
            All transfers are encrypted using FHE technology to ensure complete privacy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Transfer functionality will be available after wallet connection and contract deployment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
