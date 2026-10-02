import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/service")({
  component: () => <Navigate to="/services" replace />,
});
