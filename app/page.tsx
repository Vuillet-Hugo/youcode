import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
   <div className="flex justify-center">
    <Card className="w-3/4">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
    </Card>
   </div>
  );
}
