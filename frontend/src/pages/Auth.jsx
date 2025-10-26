import React, { useState } from "react";
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
import {registerUser, loginUser} from '../utils/api/api';
import {toast} from "sonner"
import { useNavigate } from "react-router-dom";




function Auth() {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("login");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //*handling submit
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (tab === "register") {
        const res = await registerUser(formData);
        toast.success(res.message || "Registered successfully");

//reset form after successfully registering

        setTab('login');
          setFormData({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        
      } else {
        const res = await loginUser(formData);
        //store user info in localstorage for later use
        localStorage.setItem("user", JSON.stringify(res.user));

          toast.success(res.message || "Logged in successfully");
          navigate("/dashboard");
       
      } 
    } catch (error) {
      console.error("Auth Error:" , error);

      //handle error bases on backend message 
      if(error.response?.status === 400 ) {
        toast.error("Please enter valid input fields.");
      } else if (error.response?.status === 401) {
        toast.error( "Invlaid credentials. Please check your email or password.");
      } else if (error.response?.status === 409) {
        toast.error("User already exist with this email.");
      } else {
        //handle axios error response safely
        const msg =
          error.response?.data?.message ||
          error.message ||
          "Something went wrong.";
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-100 via-beige-100 to-neutral-200 text-neutral-800 ">
      <div className="w-full max-w-md bg-white/80 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-neutral-200">
        <h1 className="text-3xl font-semibold text-center mb-6 tracking-tight">
          Welcome
        </h1>

        <Tabs
          value={tab}
          onValueChange={setTab}
          defaultValue="login"
          className="w-full"
        >
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
            <form onSubmit={handleSubmit}>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="username">Email</FieldLabel>
                    <Input
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      value={formData.email}
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
                      onChange={handleChange}
                      value={formData.password}
                      className="border-neutral-300 focus-visible:ring-neutral-500"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-neutral-900 text-white hover:bg-neutral-800"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </TabsContent>

          {/* REGISTER TAB */}
          <TabsContent value="register">
            <form onSubmit={handleSubmit}>
              <FieldSet>
                <FieldGroup>
                  <div className="flex gap-3">
                    <Field className="w-1/2">
                      <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={formData.firstName}
                        className="border-neutral-300 focus-visible:ring-neutral-500"
                      />
                    </Field>
                    <Field className="w-1/2">
                      <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={formData.lastName}
                        className="border-neutral-300 focus-visible:ring-neutral-500"
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="userName">Username</FieldLabel>
                    <Input
                      id="userName"
                      type="text"
                      placeholder="Choose a username"
                      onChange={handleChange}
                      value={formData.userName}
                      className="border-neutral-300 focus-visible:ring-neutral-500"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      value={formData.email}
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
                      onChange={handleChange}
                      value={formData.password}
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
                      onChange={handleChange}
                      value={formData.confirmPassword}
                      className="border-neutral-300 focus-visible:ring-neutral-500"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-neutral-900 text-white hover:bg-neutral-800"
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Auth;
