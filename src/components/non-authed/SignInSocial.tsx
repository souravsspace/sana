import { Button } from "@/components/ui/button";
import { signIn } from "@/integrations/better-auth/auth-client";

type SignInSocialProps = {
  provider: "google" | "github";
  children: React.ReactNode;
  isLoading: boolean;
  callback: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SignInSocial = ({
  children,
  provider,
  callback,
  isLoading: loading = false,
}: SignInSocialProps) => {
  return (
    <Button
      onClick={async () => {
        try {
          callback(true);
          await signIn.social({
            provider,
            callbackURL: "/dashboard",
          });
        } catch (err) {
          callback(false);
        }
        callback(false);
      }}
      type="button"
      variant={"outline"}
      disabled={loading}
    >
      {children}
    </Button>
  );
};
