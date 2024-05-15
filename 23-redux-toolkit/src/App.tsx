import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import store from "./redux/store";

const SearchParams = lazy(() => import("./components/SearchParams"));
const CarDetails = lazy(() => import("./components/CarDetail/CarDetails.cont"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="py-5 text-3xl font-bold tracking-tight text-gray-900">
                <Link to={"/"}>Velocity Vault</Link>
              </h2>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<SearchParams />} />
                  <Route path="/details/:id" element={<CarDetails />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);

root.render(<App />);
