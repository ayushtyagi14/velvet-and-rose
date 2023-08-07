import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function BlurImage({ image, className, title }) {
    const [isLoading, setLoading] = useState(true);

    return (
        <div className="aspect-w-auto aspect-h-auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-auto xl:aspect-h-auto">
            <Image
                alt={title}
                src={image}
                fill
                className={`
                duration-700 ease-in-out ${className}
                ${isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    );
}
