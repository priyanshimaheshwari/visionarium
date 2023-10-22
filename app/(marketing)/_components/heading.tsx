"use client"

import { Button } from "@/components/ui/button"

export const Heading =() =>{
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Your Ideas, Documents, &Plans. Unified . Welcome to <span className="underline">Visionarium</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Visionarium is the connected workspace where <br />
                better, faster task happen.
            </h3>
            <Button>
                Enter Visionarium
            </Button>
        </div>
    )
    }