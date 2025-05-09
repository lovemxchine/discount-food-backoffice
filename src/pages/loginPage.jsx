import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");



  return (
    <div>
      <h1 className="text-center mt-40">Discount Food Application Management</h1>
      <form>
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
                  label="username"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="w-full">
                <TextField
                  id="password"
                  label="password"
                  variant="outlined"
                  fullWidth
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
