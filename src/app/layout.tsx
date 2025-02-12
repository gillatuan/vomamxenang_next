import QueryProvider from "@/components/query-provider/query.provider";
import ThemeRegistry from "@/components/theme-registry/theme.registry";
import NextAuthWrapper from "@/lib/next.auth.wrapper";
import NProgressWrapper from "@/lib/nprogress.wrapper";
import { ToastProvider } from "@/utils/toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NProgressWrapper>
            <QueryProvider>
              <NextAuthWrapper>
                <ToastProvider>{children}</ToastProvider>
              </NextAuthWrapper>
            </QueryProvider>
          </NProgressWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
