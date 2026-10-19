import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { pages } from "../routes";
import { Canvas, PageWrapper, ContentRow } from "../styles/ResumeStyles";

export default function Root() {
  return (
    <Canvas>
      <PageWrapper id="page-wrapper">
        <Header />
        <ContentRow id="container">
          <Nav />
          <Routes>
            {pages.map((page) => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
          </Routes>
        </ContentRow>
        <Footer />
      </PageWrapper>
    </Canvas>
  );
}
