import { createFileRoute, Link } from "@tanstack/react-router";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/Icons";
import { SignInSocial } from "@/components/non-authed/SignInSocial";
import { Wrapper } from "@/components/Wrapper";

export const Route = createFileRoute("/_non_authed/login")({
  component: RouteComponent,
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  pwd: z.string().min(1, "Password is required"),
});

type LoginSchema = z.infer<typeof loginSchema>;

function RouteComponent() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      pwd: "",
    },
  });

  const isPending = form.formState.isSubmitting || form.formState.isLoading;

  const onSubmit = async (values: LoginSchema) => {
    // const res = await signIn(values);
    //
    // if (res?.errorMessage) {
    //   toast.error(res.errorMessage);
    // } else {
    //   toast.success("Signed in successfully!");
    // }
  };
  return (
    <Wrapper>
      <div className="flex min-h-dvh w-full items-center justify-center">
        <div className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
          <div className="p-8 pb-6">
            <Link to="/" aria-label="go home">
              {/* TODO: add logo */}
              {/* <Icons.logo /> */}
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">Login</h1>
            <p className="text-sm">Welcome back! Sign in to continue</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <SignInSocial provider="google">
                <Icons.google />
                Google
              </SignInSocial>
              <SignInSocial provider="github">
                <Icons.gitHub />
                Github
              </SignInSocial>
            </div>

            <hr className="my-4 border-dashed" />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pwd"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Button asChild variant="link" size="sm">
                          <Link to="/forget-password" className="text-sm">
                            Forget password?
                          </Link>
                        </Button>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit" disabled={isPending}>
                  {isPending ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </Form>
          </div>
          <div className="rounded border p-3 bg-muted">
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?
              <Button asChild variant="link" className="px-2">
                <Link to="/register">Create account</Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
