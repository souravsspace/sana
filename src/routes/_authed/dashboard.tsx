import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/integrations/better-auth/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = useSession();

  return (
    <div>
      <p>{JSON.stringify(session, null, 2)}</p>

      <Button onClick={async () => await signOut()}>Logout</Button>
    </div>
  );
}
