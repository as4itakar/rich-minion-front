import Layout from '@/components/pages/layout/Layot'
import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { persistor, store } from '@/store/store'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeComponentAuthFields } from '@/providers/auth-provider/auth-page.types'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={{isOnlyUser: Component.isOnlyUser, isOnlyOwner: Component.isOnlyOwner}}>
            <main className={roboto.className}>
              <ToastContainer/>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </main>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
