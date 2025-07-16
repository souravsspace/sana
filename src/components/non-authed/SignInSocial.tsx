import { Button } from "@/components/ui/button";
import { signIn } from "@/integrations/better-auth/auth-client";
import { useState } from "react";

type SignInSocialProps = {
  provider: "google" | "github";
  children: React.ReactNode;
};

export const SignInSocial = ({ children, provider }: SignInSocialProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      onClick={async () => {
        setLoading(true);
        await signIn.social({
          provider,
          // TODO: make this configurable
          callbackURL: "/posts",
        });
        setLoading(false);
      }}
      type="button"
      variant={"outline"}
      disabled={loading}
    >
      {children}
    </Button>
  );
};
