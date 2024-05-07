import BreadCrumb from "@/components/dashboard/breadcrumb";
import { CreateProfileOne } from "@/components/dashboard/forms/user-profile-stepper/create-profile";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <CreateProfileOne categories={[]} initialData={null} />
      </div>
    </ScrollArea>
  );
}