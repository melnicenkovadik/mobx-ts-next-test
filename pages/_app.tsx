import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {StoreProvider, SimpleTodoStore} from "@/store";
import "../styles/globals.css";
import {Toaster} from "react-hot-toast";

const store = new SimpleTodoStore();
export default function App({Component, pageProps}: AppProps) {
    return (
       <>
           <Toaster
               position="top-right"
               reverseOrder={false}
           />
           <StoreProvider store={store}>
               <Component {...pageProps} />
           </StoreProvider>
       </>
    );
}
