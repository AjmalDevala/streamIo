"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { date, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const SignUpSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  const GoogleSignIn = () => {
    signIn("google");
  };

  useEffect(() => {
    if (session) {
      const userName = session?.user?.name || "Unknown User";
      localStorage.setItem("name", userName);
      localStorage.setItem("sessionActive", "true");
      router.push("/");
    }
  }, [session, router]);

  const signInForm = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const signUpForm = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSignInSubmit(data: z.infer<typeof SignInSchema>) {
    toast({
      title: "Sign In Successful!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Handle Sign In logic here
  }

  function onSignUpSubmit(data: z.infer<typeof SignUpSchema>) {
    toast({
      title: "Sign Up Successful!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Handle Sign Up logic here
  }

  return (
    <div className="w-[50%] p-6 md:m-auto md:mt-20 m-2">
      <button
        onClick={GoogleSignIn}
        className="flex items-center mb-2 justify-center w-full p-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100"
      >
        <Image src="/google.png" alt="Google Icon" width={24} height={24} />
        <span className="ml-2 text-sm font-medium text-gray-700">
          Sign in with Google
        </span>
      </button>
      <div className="flex justify-around mb-6 border-t-2">
        <button
          onClick={() => setIsSignUp(false)}
          className={`${
            !isSignUp
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          } pb-2`}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignUp(true)}
          className={`${
            isSignUp
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          } pb-2`}
        >
          Sign Up
        </button>
      </div>

      {/* Sign In Form */}
      {!isSignUp && (
        <div>
          <Form {...signInForm}>
            <form
              onSubmit={signInForm.handleSubmit(onSignInSubmit)}
              className="space-y-6"
            >
              <FormField
                control={signInForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signInForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            <button className="mt-2" onClick={() => setIsSignUp(true)}>
              Not a Member?
            </button>
          </Form>
        </div>
      )}

      {/* Sign Up Form */}
      {isSignUp && (
        <div>
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
              className="space-y-6"
            >
              <FormField
                control={signUpForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signUpForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signUpForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
