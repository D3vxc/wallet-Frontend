import { z } from "zod";

const RegisterValidation = z.object({
  
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  dob: z.string(),
});
export default RegisterValidation;