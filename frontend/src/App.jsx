import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import TeacherTemplatesPage from "./pages/teacher/templates";
import CreateTemplatePage from "./pages/teacher/templates/create";
import NotFoundPage from "./pages/404";
import TeacherAssesmentsPage from "./pages/teacher/assesments";
import CreateAssesmentPage from "./pages/teacher/assesments/create";

const Home = lazy(() => import("./pages/index"));
const TeacherDashboard = lazy(() => import("./pages/teacher/dashboard"));
const TeacherLayout = lazy(() => import("./components/Teacher/Layout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<TeacherLayout />}>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route
              path="/teacher/templates"
              element={<TeacherTemplatesPage />}
            />
            <Route
              path="/teacher/templates/create"
              element={<CreateTemplatePage />}
            />
            <Route
              path="/teacher/templates/:id"
              element={<CreateTemplatePage />}
            />
            <Route
              path="/teacher/assesments"
              element={<TeacherAssesmentsPage />}
            />
            <Route
              path="/teacher/assesments/create"
              element={<CreateAssesmentPage />}
            />
            <Route
              path="/teacher/assesments/:id"
              element={<CreateAssesmentPage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
