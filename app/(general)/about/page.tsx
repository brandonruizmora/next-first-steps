import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About page',
    description: 'Esta pagina contiene información sobre la pagina',
    keywords: ["About Page", "Brandon", "Información", "..."],
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}