import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Encrypted Accounts</CardTitle>
            <CardDescription>Manage your privacy-protected accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Active accounts</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Privacy-preserving transaction history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Total transactions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Settlements</CardTitle>
            <CardDescription>Encrypted settlement operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Completed settlements</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
