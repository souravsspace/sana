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
import { Wrapper } from "@/components/Wrapper";
import { SignInSocial } from "@/components/non-authed/SignInSocial";
import { useState } from "react";
import { signUp } from "@/integrations/better-auth/auth-client";

export const Route = createFileRoute("/_non_authed/register")({
  component: RouteComponent,
});

const registerSchema = z.object({
  firstname: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastname: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters"),
});

type registerSchemaType = z.infer<typeof registerSchema>;

function RouteComponent() {
  const form = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const [socialPending, setSocialPending] = useState(false);
  const isPending =
    form.formState.isSubmitting || form.formState.isLoading || socialPending;

  const onSubmit = async (values: registerSchemaType) => {
    try {
      const res = await signUp.email({
        name: `${values.firstname} ${values.lastname}`,
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
      });

      if (res.error) {
        toast.error(res.error.message || "Failed to create account.");
      }

      toast.success("Account created successfully!");
    } catch (err) {
      toast.error("Failed to create account. Please check your details.");
      return;
    }
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
            <h1 className="mb-1 mt-4 text-xl font-semibold">Register</h1>
            <p className="text-sm">
              Welcome! Create an account to get started.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <SignInSocial
                provider="google"
                callback={setSocialPending}
                isLoading={isPending}
              >
                <Icons.google />
                Google
              </SignInSocial>
              <SignInSocial
                provider="github"
                callback={setSocialPending}
                isLoading={isPending}
              >
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
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
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
                  {isPending ? "Creating Account..." : "Continue"}
                </Button>
              </form>
            </Form>
          </div>
          <div className="rounded border p-3 bg-muted">
            <p className="text-center text-sm text-muted-foreground">
              Have an account?
              <Button asChild variant="link" className="px-2">
                <Link to="/login">Sign In</Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
