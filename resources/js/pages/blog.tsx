import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Blog',
    href: '/blog',
  },
];

const Blog01Page = ({ events }: { events: { id: number, title: string, content: string; published: boolean }[] }) => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
          <Select defaultValue="recommended">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <Card key={event.id} className="shadow-none">
              <CardHeader className="p-2">
                <div className="aspect-video bg-muted rounded-lg w-full" />
              </CardHeader>
              <CardContent className="pt-4 pb-5">
                <Badge>Technology</Badge>

                <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                  {event.title}
                </h3>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <span className="text-muted-foreground font-semibold">
                      John Doe
                    </span>
                  </div>

                  <span className="text-muted-foreground text-sm">
                    Nov 30, 2024
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog01Page;
