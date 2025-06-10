import React from "react";
import { useState } from "react";
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center mt-40">
        Discount Food Application Management
      </h1>
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_API_URL}/admin/login`,
              data
            );
            console.log("Login successful:", response.data);
            // Handle successful login, e.g., redirect or store
            if (response.data.status !== "success") {
              throw new Error(response.data.message || "Login failed");
            }

            document.cookie = `token=${response.data.token}; path=/; secure; samesite=strict`;
            navigate("/users");
            window.location.reload();
          } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid email or password");
          }
        })}
      >
        <Card sx={{ maxWidth: 500, mx: "auto", mt: "2rem" }}>
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              gap="2rem"
              mt="2rem"
              padding="2rem"
              maxWidth="500px"
              mx="auto"
            >
              <div className="font-bold text-3xl text-center flex items-center justify-center ">
                Sign in
              </div>

              <div className="w-full">
                <TextField
                  id="Email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              </div>
              <div className="w-full">
                <TextField
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                />
              </div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#77bfa3",
                  "&:hover": {
                    backgroundColor: "#77bfa3",
                  },
                  "&:focus": {
                    backgroundColor: "#77bfa3",
                  },
                  "&.MuiButton-root": {
                    outline: "none",
                  },
                }}
                className="w-full text-white p-2 text-lg"
                type="submit"
              >
                เข้าสู่ระบบ
              </Button>
            </Box>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default LoginPage;
