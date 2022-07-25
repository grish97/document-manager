import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

// Navigation middlewares
import { PrivateNavigation } from "navigation/PrivateNavigation";
import { PublicNavigation } from "navigation/PublicNavigation";

// Layouts
import { AuthLayout, DocumentsLayout, MainLayout } from "components";

// Pages
import { DocumentEdit, DocumentDetailedView, DocumentCreate, DocumentList } from "pages/Documents";
import { SignIn, SignUp } from "pages/Auth";
import { Dashboard } from "pages/Dashboard";
import { Unknown } from "pages/Unknown";

export const Navigation: FC = () => {
  return (
    <Routes>
      {/** Private routes for logged users */}
      <Route element={<PrivateNavigation />}>

        <Route path="/" element={<MainLayout/>}>

          <Route index element={<Dashboard/>}/>

          {/** Documents routing group */}
          <Route path="/documents" element={<DocumentsLayout/>}>
            <Route index element={<DocumentList/>}/>

            <Route path="create" element={<DocumentCreate/>}/>
            <Route path="edit/:documentId" element={<DocumentEdit />}/>
            <Route path="view/:documentId" element={<DocumentDetailedView />}/>
          </Route>

        </Route>

      </Route>

      {/** Authorization routing group */}
      <Route element={<PublicNavigation />}>

        <Route path="/auth" element={<AuthLayout/>}>
          <Route index element={<Navigate to="/auth/signin" />}/>

          <Route path="signin" element={<SignIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
        </Route>

      </Route>

      {/** Unknown route */}
      <Route path="*" element={<Unknown/>} />
    </Routes>
  );
};
