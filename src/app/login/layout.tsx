import { Toaster } from "react-hot-toast";

export default function LoginLayout({ children }:{children: React.ReactNode}) {
    return (<>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
    </>
    )
}
