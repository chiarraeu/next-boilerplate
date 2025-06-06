import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardCheck, Container, ShieldCheck, UserRoundCog } from "lucide-react";

const features = [
  {
    icon: <ClipboardCheck className="h-10 w-10" />,
    title: "Dashboard & CRUD",
    description:
      "Manage data effortlessly with a user-friendly interface and flexible CRUD features for various needs.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Secure Authentication",
    description:
      "Login and registration system powered by Auth.js, ensuring reliable session management.",
  },
  {
    icon: <UserRoundCog className="h-10 w-10" />,
    title: "User & Post Management",
    description:
      "Handle users and manage content with complete features for adding, editing, and deleting data efficiently.",
  },
  {
    icon: <Container className="h-10 w-10" />,
    title: "PostgreSQL Database",
    description:
      "PostgreSQL database integration in container for robust data storage and management, ensuring reliability and performance.",
  },
];

export default function Features() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="p-2 bg-primary-foreground rounded-full w-fit">
                {feature.icon}
              </div>
              <CardTitle className="mt-4 bg-gradient-to-r from-blue-600 to-violet-900 bg-clip-text text-transparent">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
