// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { Presence } from "@motionone/solid";

export default function Root() {
  return (
      <Html lang="en">
        <Head>
          <Title>SolidStart</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body>
          <Suspense>
            <ErrorBoundary>
              <header class="text-center mx-auto p-4">
                <A class="btn" href="/">
                  Index
                </A>
                <A class="btn" href="/about">About</A>
              </header>
              <Presence exitBeforeEnter>
                <Routes>
                  <FileRoutes />
                </Routes>
              </Presence>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Body>
      </Html>
  );
}
