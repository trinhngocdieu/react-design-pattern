import React, { ReactNode } from 'react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  children?: ReactNode
  title?: string
}
const queryClient = new QueryClient();

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <QueryClientProvider client={queryClient}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        {children}
      </Container>
    </div>
  </QueryClientProvider>

)

export default Layout
