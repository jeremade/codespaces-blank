async function test() {
    const res = await fetch("https://localhost:8787", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            text: "hola. im a walrus by the name of Fred."
        })
    })

    return res.json()
}

test().then(console.info)