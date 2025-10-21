import React from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "../components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Auth() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-100 via-beige-100 to-neutral-200 text-neutral-800 ">
      <div className="w-full max-w-md bg-white/80 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-neutral-200">
        <h1 className="text-3xl font-semibold text-center mb-6 tracking-tight">
          Welcome
        </h1>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-neutral-100 rounded-xl mb-6 border border-neutral-200">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-neutral-900 data-[state=active]:text-white transition-all"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-neutral-900 data-[state=active]:text-white transition-all"
            >
              Register
            </TabsTrigger>
          </TabsList>

          {/* LOGIN TAB */}
          <TabsContent value="login">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="border-neutral-300 focus-visible:ring-neutral-500"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <FieldDescription>
                    Must be at least 6 characters long.
                  </FieldDescription>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="border-neutral-300 focus-visible:ring-neutral-500"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Button className="mt-4 w-full bg-neutral-900 text-white hover:bg-neutral-800">
              Login
            </Button>
          </TabsContent>

          {/* REGISTER TAB */}
          <TabsContent value="register">
            <FieldSet>
              <FieldGroup>
                <div className="flex gap-3">
                  <Field className="w-1/2">
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      className="border-neutral-300 focus-visible:ring-neutral-500"
                    />
                  </Field>
                  <Field className="w-1/2">
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="border-neutral-300 focus-visible:ring-neutral-500"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    className="border-neutral-300 focus-visible:ring-neutral-500"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-neutral-300 focus-visible:ring-neutral-500"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <FieldDescription>
                    Must be at least 6 characters long.
                  </FieldDescription>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="border-neutral-300 focus-visible:ring-neutral-500"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="********"
                    className="border-neutral-300 focus-visible:ring-neutral-500"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Button className="mt-4 w-full bg-neutral-900 text-white hover:bg-neutral-800">
              Register
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Auth;
