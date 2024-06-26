import express from "express";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import Hello from "./Hello.js";

const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
Lab5(app);
ModuleRoutes(app);
Hello(app);
AssignmentRoutes(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);