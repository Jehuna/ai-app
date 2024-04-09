// hooks/useImageGeneration.ts or utils/useImageGeneration.ts
async function generateImage(prompt: string): Promise<string> {
    if (prompt === "") {
        return "/";
    }

    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            prompt,
            n: 1,
            size: "512x512",
        }),
    });

    const data = await response.json();
    return data.data[0]?.url || "/";
}

export default generateImage;
