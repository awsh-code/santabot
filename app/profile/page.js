import { Separator } from "@/components/ui/separator";
import { AddressForm } from "./components/AddressForm";
// import { ProfileForm } from "@/components/settings/profile-form";

// import { ProfileForm } from "@/app/examples/forms/profile-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is your public info on the site.
        </p>
      </div>
      <Separator />
      {/* <ProfileForm /> */}
    </div>
  );
}
