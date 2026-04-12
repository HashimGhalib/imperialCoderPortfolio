

{/* Add a simple footer */ }

export default function Footer() {
    return (
        <footer className="py-10 font-body text-center text-sm text-zinc-500 border-t dark:border-zinc-900">
            © {new Date().getFullYear()} — Ghailib Hashim
        </footer>
    )
}