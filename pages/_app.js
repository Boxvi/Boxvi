import '../styles/globals.css';

import Layout from './layout';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    )
}
/*
<ThemeProvider enableSystem={true}  attribute="class">
            <AnimatePresence>
                <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
                    <DefaultLayout>
                        <Component {...pageProps} />
                    </DefaultLayout>
                </div>
            </AnimatePresence>
        </ThemeProvider>
        */