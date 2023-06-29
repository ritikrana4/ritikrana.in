import React, { ReactNode } from "react"
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

const ErrorFallback = () => {
    return (
        <div>
            Something Went Wrong
        </div>
    );
};

const SuspenseFallback = () => {
    return (
        <div>
            Loading...
        </div>
    )
}

type AppProviderProp = {
    children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProp) => {
    return (
        <React.Suspense fallback={SuspenseFallback()} >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <HelmetProvider>
                    <Router>
                         {children}
                    </Router>
                </HelmetProvider>
            </ErrorBoundary>
        </React.Suspense>
    );
}