import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/page")({
  component: () => <Navigate to="/about" replace />,
});