import Banner from "@/components/common/Banner";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

const listings = [
  { id: 1, title: "Cozy Apartment", description: "A nice cozy place to stay." },
  { id: 2, title: "Modern Studio", description: "Close to the city center." },
  { id: 3, title: "Beach House", description: "Enjoy the ocean view." },
  { id: 4, title: "Mountain Cabin", description: "Peaceful and secluded." },
  { id: 5, title: "Urban Loft", description: "Stylish city living." },
  { id: 6, title: "Country Villa", description: "Spacious and serene." },
];
export default function Home() {
  return (
    <main className="p-4">
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {listings.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      description={item.description}
    />
  ))}
</div>
<div className="flex justify-center">
  <Button>View More Listings</Button>
</div>
    </main>
  );
}