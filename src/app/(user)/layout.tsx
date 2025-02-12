import { Container } from "@mui/material";
import AppHeader from "../../components/layout/app.header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <NProgressWrapper> */}
      <AppHeader />
      <Container>{children}</Container>
      {/* </NProgressWrapper> */}
    </>
  );
}
