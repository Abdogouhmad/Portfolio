"use client";
import { ndot47 } from "@/config/fonts";
import { iconsContact } from "@/config/icon";
import { contactLinks } from "@/config/site";
import Link from "next/link";

export default function MContact() {

    return (
        <div className="space-y-6" id="contact">
            {/* title */}
            <div className="mb-16 text-center">
                <h1 className={`${ndot47.className} text-5xl font-bold tracking-wider`}>
                    Get in Touch
                </h1>
            </div>

            {/* icons */}
            <div className="grid grid-cols-4 gap-6 place-items-center">
                {contactLinks.map((item) => {
                    const Icon = iconsContact[item.iconName];

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl transition-transform duration-300 hover:scale-110"
                            aria-label={item.name}
                        >
                            <Icon />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}